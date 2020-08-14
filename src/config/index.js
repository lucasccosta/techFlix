const URL_BACKEND = window.location.hostname.includes('localhost') 
  ?'http://localhost:8080/'
  : 'https://devsoutinhoflix.herokuapp.com'

  // : 'https:// LINK DO DEPLOY NO HEROKU'


export default {
  URL_BACKEND,
};