async function signup(){
const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
const role=document.getElementById("role").value;

const {data,error}=await supabase.auth.signUp({email,password});

if(error){msg.innerText=error.message;return;}

await supabase.from("users").insert([{id:data.user.id,name,role}]);

msg.innerText="Account created! You can login now";
}

async function login(){
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

const {error}=await supabase.auth.signInWithPassword({email,password});

if(error){msg.innerText=error.message;return;}

window.location="dashboard.html";
}

document.getElementById("signupForm")?.addEventListener("submit",e=>{
e.preventDefault();signup();
});

document.getElementById("loginForm")?.addEventListener("submit",e=>{
e.preventDefault();login();
});
