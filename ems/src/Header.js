import React from 'react'

function Header() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
<div style={{display:'flex'}} className='ms-3'>
    <i class="fa-solid fa-users fa-fade fa-2xl mt-3"></i>
    <a class="navbar-brand ms-3 fs-1" href="/">Employee</a>
  
</div>    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
  </div>
</nav>
    </div>
  )
}

export default Header