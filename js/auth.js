const msg = document.getElementById("msg");

async function signup(){
try{
const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
const role=document.getElementById("role").value;

msg.innerText="Creating account...";

const { data, error } = await supabase.auth.signUp({
email:email,
password:password
});

if(error){
msg.innerText=error.message;
return;
}

await supabase.from("users").insert([
{
id:data.user.id,
name:name,
role:role
}
]);

msg.innerText="Account created successfully! Now login.";
}
catch(e){
msg.innerText="Error: "+e.message;
}
}

async function login(){
try{
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

msg.innerText="Logging in...";

const { error } = await supabase.auth.signInWithPassword({
email:email,
password:password
});

if(error){
msg.innerText=error.message;
return;
}

window.location.href="dashboard.html";
}
catch(e){
msg.innerText="Error: "+e.message;
}
}

document.getElementById("signupForm")?.addEventListener("submit",e=>{
e.preventDefault();
signup();
});

document.getElementById("loginForm")?.addEventListener("submit",e=>{
e.preventDefault();
login();
});
