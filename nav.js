var _html = `
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link" href="/index.html">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/formio/register.html">Register</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/formio/login.html">Login</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/formio/test1.html">Test Form 1</a>
  </li>
</ul>
`;

var _header = document.getElementById('header');
if(_header){
  // _header.html(_html);
  _header.innerHTML = _html;
}