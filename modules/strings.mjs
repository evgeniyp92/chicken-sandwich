'use strict';
const strings = () => {
  return {
    about: `<img src="./assets/img/headshot.jpg" alt="headshot" />
    <div class="paragraph">
      My name is Evgeniy Pimenov. I am a developer 
      for the United States Air Force currently at the 693 Intelligence Support 
      Squadron in Germany.
    </div>
    <div class="paragraph">
      I've been playing around with code since I was 15, but 
      recently I have had the privilege of <strike>being paid to bash my head against 
      my keyboard</strike> developing applications for a living.
    </div>
    <div class="paragraph">
      Some of my work is available on my Github, which you can find under the contact
      button. Unless otherwise stated, I reserve all rights to my projects and work.
    </div>`,
    projects: `<div class="paragraph">Ut numquam sed ullam dicta. Asperiores ex vel aut sed. Unde amet error
    consequatur nobis aperiam nam minus vel.</div><div class="paragraph">Aut consequatur nemo nesciunt placeat consequuntur nostrum. Suscipit
    cum in explicabo maiores est velit doloribus. Odit id repellendus et
    quae. Ullam deleniti et eos. Qui quasi voluptatem velit provident est
    molestiae provident.</div>`,
    contact: `<div>
    <div class="socials" style="padding-top: 0.25rem">
      <i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
      <p class="username">evgeniy-pimenov</p>
    </div>
    <div class="socials">
      <i class="fa fa-github fa-3x" aria-hidden="true"></i>
      <p class="username">evgeniyp92</p>
    </div>
    <div class="socials">
    <a href="mailto:1@evgeniypimenov.com" style="color: white; display: flex">
    <img src="./assets/img/envelope.svg" id="envelope" alt="envelope" style="color: white; width: 41px;">
    <p class="username" style="margin-top: .9rem">Email</p>
    </a>
  </div>
  </div>`,
    emptyContent: `
    <div class="paragraph" id="about-content"></div>
    <div class="paragraph" id="projects-content"></div>
    <div class="paragraph" id="contact-content"></div>`,
  };
};

export default strings;
