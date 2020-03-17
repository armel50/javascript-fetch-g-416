const app = "I don't do much.";
"const token ="f2c9fcb35817de31cc311bd93dd2b571892163c2" 'YOUR_TOKEN_HERE';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));