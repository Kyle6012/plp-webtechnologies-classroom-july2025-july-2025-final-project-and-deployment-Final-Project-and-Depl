// nav toggle for mobile
function bindNavToggle(buttonId, navId){
  let btn = document.getElementById(buttonId)
  let nav = document.getElementById(navId)
  if(!btn || !nav) return
  btn.addEventListener('click', function(){
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex'
  })
}

// bind toggles for each page header 
bindNavToggle('navToggle','siteNav')
bindNavToggle('navToggleAbout','siteNavAbout')
bindNavToggle('navToggleProjects','siteNavProjects')
bindNavToggle('navToggleContact','siteNavContact')

// filter projects on projects.html
function bindProjectFilters(){
  let buttons = document.querySelectorAll('.filter-btn')
  let cards = document.querySelectorAll('.project-card')
  if(!buttons.length) return
  buttons.forEach(b => b.addEventListener('click', function(e){
    buttons.forEach(x=>x.classList.remove('active'))
    b.classList.add('active')
    let filter = b.dataset.filter
    cards.forEach(c => {
      let t = c.dataset.type
      if(filter === 'all' || t === filter) c.style.display = ''
      else c.style.display = 'none'
    })
  }))
}
bindProjectFilters()

// form validation 
let contactForm = document.getElementById('contactForm')
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault()
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let message = document.getElementById('message')
    let msg = document.getElementById('formMsg')
    if(!name.value.trim() || !email.value.trim() || !message.value.trim()){
      msg.textContent = 'fill all fields'
      return
    }
    // sent message sim
    msg.textContent = 'thanks — message queued'
    contactForm.reset()
  })
}

(function highlight(){
  let links = document.querySelectorAll('.site-nav a')
  let path = location.pathname.split('/').pop() || 'index.html'
  links.forEach(a => {
    if(a.getAttribute('href') === path) a.classList.add('active')
  })
})()
