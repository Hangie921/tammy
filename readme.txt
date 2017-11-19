Dear Tammy:

Please read the following b4 you start to modify the content to avoid
unnecessary waste of time

1. For language setting
  I write an example already for the "Who I am" in the footer.
  Just select the language option and you should see the change.

  If you want to add more, please see the files in /lang folder
  Don't forget to add the lang attr in the html tag you want to translate
  ex: <h4 lang="en">Who I am</h4>

  Add just lang="en" would be fine, the plugin will do the rest.
  More details will be in => https://github.com/Irrelon/jquery-lang-js

2. For the CSS 

  a. I separate the CSS into 3 files, main.css, index.css, proj1.css.
     As you can see, main.css includes the general style in both index.html
     and proj1.html, then the reset will be in the individual .css file. So
     do the responsive CSS
  
  b. Most of the class name you see in the html file would be the class in
     bootstrap 3.
     Here is the https://www.w3schools.com/bootstrap/default.asp

  c. More details is in the individual .css file. Generally I use a lot of
     <section> to separate every block, and use bootstrap to give them space
     and sort the position.

3. For the carousel

  a. index.html is using different carousel plugin from the proj1.html as the
     different request. Because you request the interval time of the carousel,
     I think it's easier to use another plugin.

     index.html: https://www.w3schools.com/bootstrap/bootstrap_carousel.asp
     proj1.html: http://flexslider.woothemes.com/
