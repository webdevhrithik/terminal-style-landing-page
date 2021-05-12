const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');

about.addEventListener('click', () => {
  new WinBox({
    title: 'About Me',
    background: 'darkgreen',
    color: 'black',
    width: '300px',
    hright: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00');
    },
    onblur: function () {
      this.setBackground('#777');
    },
  });
});

contact.addEventListener('click', () => {
  new WinBox({
    title: 'Contact Me',
    background: 'darkgreen',
    color: 'black',
    width: '300px',
    hright: '400px',
    top: 150,
    right: 150,
    bottom: 50,
    left: 150,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00');
    },
    onblur: function () {
      this.setBackground('#777');
    },
  });
});
