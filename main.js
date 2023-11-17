let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #53156e;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #53156e;">Estudio diseño industrial y realizo actividades multidisciplinarias.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
