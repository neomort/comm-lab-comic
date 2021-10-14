# Comm Lab Comic Assignment
## Project Name: Year of the 50th
## Contributors: Kyle Adams, Cole Beasley, Maaz Ahmed
### Project Description
For the comic assignment, we thought it would be cool to create something which was specific to our university or to the UAE. During our first meeting, Cole reminded us that the UAE would be celebrating its 50th National Day this year, and so we decided to portray the history of the UAE in the form of an interactive comic. The idea was to create a scrolling comic which would cover the entire period from the time when nomadic tribes lived in the region to the modern-day UAE. As we scrolled down the page, some of the most significant events in the history of the UAE would appear until we finally got to the celebration of the 50th National Day.
### Process
We first made a list of important events in the history of the UAE that we wanted to include in the comic. Once we had this list, we made a [wireframe](https://www.figma.com/file/NA4bJx07pnpP9l8OIhXYYF/UAE-Comic?node-id=3%3A18) (thanks for Figma, Kyle) and a list of all illustrations we needed (buildings, people and more) which allowed us to have a good basic idea of what we wanted in the final version of the comic. Next, we used Illustrator to make SVGs of some of the most prominent buildings in the UAE, of the nomadic people in the region, of Sheikh Zayed and more (all images on the website are SVGs and we made them ourselves). This was a time-consuming process but really allowed us to get more comfortable with using Illustrator.  
  
Once we had all the elements, an idea about how to implement them and a wireframe to look back to, we just had to put all the elements together, though this was much harder than what we anticipated.  
  
The first part of the comic, which appears when the page first loads, consists of a brown background with particles which signify the presence of sand. For the particles, we made use of a [Javascript library](https://github.com/VincentGarreau/particles.js?fbclid=IwAR0Dd8qIfWN6RI1Zk06vzH5GWA0Z0ZijwnoIgFmIXwQyFFCcWBUzLtt8myU) which allowed us to create these particles, play with their positioning and also have some interactivity where newer particles would appear and accumulate upon clicking on the screen. We were also able to use JavaScript to fade out the background for this part of the webpage as we scrolled down to the rest of the page.  
  
For the rest of the page, we divided it into slides which consisted of one or more of the events which we wanted to have in our comic. The slides either represented a big event in the history of the UAE, such as Sheikh Zayed becoming the ruler of Abu Dhabi, or a sequence of relatively smaller events such as the opening of Burj Khalifa as the tallest building in the world. We gave each slide a number and all of them cover 100% the size of the screen. For the text inside the slides, we used relevant properties in our main CSS file, style.css, depending on whether the text was a heading or a description and depending on where we wanted to have the text on the screen. Some of these slides also consist of images, such as the outline of the UAE on the map and an image of Sheikh Zayed. For other images in our comic, we used a different method to display them.  
  
It was relatively harder to implement the rest of the images in our comic. For most of these images, we wanted them to implement a behavior where they would appear as we entered a particular slide, then stick to a position as we scrolled down through some slides, and then finally get rid of the sticky behavior as we moved to further slides. For instances, in the comic, as we move into the "Early UAE" slide, the camel and the nomadic people appear, and they stick to the bottom for the next couple of slides, and finally stop exhibiting that behavior as we move to the "Formation of the UAE" slide. Implementing all of this got tricky because initially, we couldn't get the images to stick at the bottom in the first place. However, after a couple of hours of reevaluating our logic and using the right combination of HTML elements and CSS properties, we were able to let these images stick to the bottom. Then, the only thing that was left was to stop this sticky behavior for some images as we crossed certain slides. For this, we made use of JavaScript and made changes to class names of these image elements as the user scrolled past a number of pixels on the screen. This ended up becoming a powerful tool which we used in multiple places in the comic, such as for displaying buildings in modern UAE.  
  
The comic ends with the celebration of the 50th National Day of the UAE, where we have fireworks which are similar to the "particles" we used at the very top of the page, and also use the same JavaScript library. These fireworks are colored according to the colors on the UAE flag. They also follow the cursor on the screen and clicking on the screen allows one to create more fireworks.  
  
We made our comic interactive in several different ways. The behavior of the "particles" at the top of the page and "fireworks" at the bottom of the page has already been discussed above. We also discussed how certain images stick and then stop sticking to the bottom when the user has scrolled through a certain part of the comic. Other than that, the colors of the background sky and that of the ground also change as we scroll through the comic.

### Reflection
Although we formed our group and started working on this assignment a little late, we still managed to comfortably get done with whatever we had planned. Coming up with a solid idea and a wireframe to refer to really helped a lot and made the process a lot simpler for us. Although some parts of the work got tiring and time consuming, they allowed us to understand different ways of doing things and we managed to pull through. Overall, we are very satisfied with the final version of the comic since we were not only able to do whatever we had decided at the beginning but we also implemented a couple of features which were not part of the original plan, such as interacting with the sand particles and the fireworks.

