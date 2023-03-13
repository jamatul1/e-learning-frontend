export const lessonsData = [
  {
    id: 1,
    title: "6 things you must know as a javascript developer",
    type: "video",
    url: "https://res.cloudinary.com/dws1ftsos/video/upload/v1678677221/8_Must_Know_JavaScript_Array_Methods_j0dn2f.mp4",
    notes: [
      {
        title: "Simple input",
        description: "Create a file using the simple input",
      },
    ],
    duration: 10,
    rating: {
      1: 21,
      2: 23,
      3: 32,
      4: 52,
      5: 2,
    },
    completed: true,
  },
  {
    id: 2,
    title: "Intro to objects",
    type: "text",
    text: `What's the THIS keyword?
      Ok, so let's start by defining what the this keyword is. In JavaScript, the this keyword always refers to an object. The thing about it is that the object it refers to will vary depending on how and where this is being called.
      
      And there's a few different ways in which you can use the this keyword, so let's see the most common cases and how it behaves in each of them.
      
      An important comment is that this is not a variable – it's a keyword, so its value can't be changed or reassigned.
      
      How to Call this By Itself
      If we call this by itself, meaning not within a function, object, or whatever, it will refer to the global window object.
      
      If you print it like console.log('this alone', this); you'll get this in your console: [object Window].
      
      Or this if you expand it:
      
      image-367
      Expanded result of calling this by itself
      How to Call this in an Object Method
      But if we call this within an object method, like in the following example:
      
      const person = {
          firstName: "John",
          lastName : "Doe",
          id       : 5566,
          getThis : function() {
            return this;
          }
      };
      
      console.log('this in object method', person.getThis());
      We'll see that this no longer refers to the object itself:
      
      image-368
      Result of calling this within an object method
      And given this, we can use this to access other properties and methods from the same object:
      
      const person = {
          firstName: "John",
          lastName : "Doe",
          id       : 5566,
          getFullName : function() {
            return this.name + ' ' + this.lastName;
          }
      };
      
      console.log('this in object method', person.getFullName());
      How to Call this in a Function
      If we call this within a function like in the following example:
      
      function test() {
          console.log('this in a function', this);
      }
      
      test()
      this will now refer again to the general window object, and we'll get this in our console: [object Window].
      
      A note about arrow functions
      In arrow functions, JavaScript sets the this lexically. This means that the arrow function doesn't create its own execution context but inherits the this from the outer function where the arrow function is defined.
      
      In most cases, this means this will refer to the window object as well:
      
      const show = () => this
      
      console.log('arrow function this', show())
      image-374
      It's important to notice this because, for example, if we try to implement an arrow function to it as an object method, we won't be able to access the object through the this keyword:
      
      const person = {
          name: 'Pedro',
          surname: 'Sanchez',
          sayName: () => this.name + ' ' + this.surname
      }
      
      console.log(person.sayName());
      image-375
      A note about strict-mode
      When using strict-mode, calling this within a function will return undefined.
      
      "use strict";
      
      function show() {
          console.log(this);
      }
      
      show();
      image-370
      As a side comment, if you're not familiar with what strict-mode is, following the MDN docs:
      
      JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". Strict mode isn't just a subset: it intentionally has different semantics from normal code.
      Strict mode makes several changes to regular JavaScript semantics:
      
      Eliminates some JavaScript silent errors by changing them to throw errors.
      Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
      Prohibits some syntax likely to be defined in future versions of ECMAScript.
      How to Use this in an Event Listener
      When using this in an event listener, this will refer to the DOM element that fired the event.
      
      document.getElementById('testBtn').addEventListener('click', function() {
          console.log('this in a event', this);
      })
      In our case, we added the event listener to a button element: <button id="testBtn">TEST</button>
      
      And after clicking it, we get the following in our console:
      
      image-369
      this Methods (call, apply and bind)
      To complicate the subject a little more, javascript provides three native methods that can be used to manipulate the way the this keyword behaves. These methods are call, apply and bind. Let's see how they work.
      
      How to Use the Call Method
      With call we can invoke a method passing an owner object as an argument. Said in a simpler way, we can call a method indicating to which object the keyword this will refer to.
      
      Let's see an example:
      
      const person1 = {
          name: 'Pedro',
          surname: 'Sanchez',
          sayName: function() {
              return this.name + " " + this.surname;
          }
      }
      
      const person2 = {
          name: 'Jimena',
          surname: 'Juarez'
      }
      
      console.log(person1.sayName.call(person2));
      Here we have two person objects. Each with its name and surname properties, and the person1 object has a sayName method.
      
      Then we call the person1 sayName method in the following way: person1.sayName.call(person2).
      
      By doing this, we're indicating that when the sayName method executes, the this keyword won't refer to the object that "owns" the method (person1) but to the object we passed as parameter (person2). As a consequence, we get this in our console:
      
      image-376
      Keep in mind that if the given method accepts arguments, we can pass them as well when we invoke it with call:
      
      const person1 = {
          name: 'Pedro',
          surname: 'Sanchez',
          sayName: function(city, country) {
              return this.name + " " + this.surname + ", " + city + ", " + country;
          }
      }
      
      const person2 = {
          name: 'Jimena',
          surname: 'Juarez'
      }
      
      console.log(person1.sayName.call(person2, "DF", "Mexico"));
      image-377
      How to Use the Apply Method
      The apply method works very similarly to call. The only difference between them is that call accepts parameters as a list separated by colons (as the last example we saw), and apply accepts them as an array.
      
      So if we want to replicate the same example using apply we'd have to do it like this:
      
      const person1 = {
          name: 'Pedro',
          surname: 'Sanchez',
          sayName: function(city, country) {
              return this.name + " " + this.surname + ", " + city + ", " + country;
          }
      }
      
      const person2 = {
          name: 'Jimena',
          surname: 'Juarez'
      }
      
      console.log(person1.sayName.apply(person2, ["DF", "Mexico"]));
      image-378
      How to Use the Bind Method
      Same as call and apply , the bind method indicates the object to which the this keyword will refer when a given method executes.
      
      But the difference with bind is that it will return a new function, without executing it. While with call and apply the function executed right away, using bind we must execute it separately.
      
      Let's see this in an example:
      
      const person1 = {
          name: 'Pedro',
          surname: 'Sanchez',
          sayName: function() {
              return this.name + " " + this.surname
          }
      }
      
      const person2 = {
          name: 'Jimena',
          surname: 'Juarez'
      }
      
      const sayPerson2Name = person1.sayName.bind(person2)
      
      console.log(sayPerson2Name())
      image-381
      Wrapping Up
      Well everyone, as always, I hope you enjoyed the article and learned something new.
      
      If you want, you can also follow me on LinkedIn or Twitter. See you in the next one!`,
    notes: [],
    duration: 52,
    completed: true,
    rating: {
      1: 21,
      2: 23,
      3: 32,
      4: 52,
      5: 2,
    },
  },
  {
    id: 3,
    title: "Html CSS full explanation using real world guidelines",
    type: "download",
    url: "https://wtf.tw/ref/duckett.pdf",
    notes: [],
    rating: {
      1: 21,
      2: 23,
      3: 32,
      4: 52,
      5: 2,
    },
    duration: 51,
    completed: false,
  },
  {
    id: 4,
    title:
      "Javascript Cookies vs Local Storage vs Session Storage vs Local in gram storage",
    url: "https://res.cloudinary.com/dws1ftsos/video/upload/v1678677212/JavaScript_Cookies_vs_Local_Storage_vs_Session_Storage_irqqge.mp4",
    type: "video",
    transcript:
      "Hello everybody kyle here from web dev simplifier.Todays videos we are going to talk about there main ways to store data in web dbrwoser. Now befoere i started the differences between sotrages i want to talk abouttt the siimiliarty between them.Todays videos we are going to talk about there main ways to store data in web dbrwoser. Now befoere i started the differences between sotrages i want to talk abouttt the siimiliarty between them.Todays videos we are going to talk about there main ways to store data in web dbrwoser. Now befoere i started the differences between sotrages i want to talk abouttt the siimiliarty between them. Todays videos we are going to talk about there main ways to store data in web dbrwoser. Now befoere i started the differences between sotrages i want to talk abouttt the siimiliarty between them.Todays videos we are going to talk about there main ways to store data in web dbrwoser. Now befoere i started the differences between sotrages i want to talk abouttt the siimiliarty between them.Todays videos we are going to talk about there main ways to store data in web dbrwoser. Now befoere i started the differences between sotrages i want to talk abouttt the siimiliarty between them.Todays videos we are going to talk about there main ways to store data in web dbrwoser. Now befoere i started the differences between sotrages i want to talk abouttt the siimiliarty between them",
    notes: [],
    rating: {
      1: 21,
      2: 23,
      3: 32,
      4: 52,
      5: 2,
    },
    duration: 8,
    completed: false,
  },
  {
    id: 5,
    title: "Javascript Arrow functions and their usage",
    type: "video",
    url: "https://res.cloudinary.com/dws1ftsos/video/upload/v1678677205/JavaScript_ES6_Arrow_Functions_Tutorial_epfaa9.mp4",
    notes: [],
    duration: 9,
    completed: true,
  },

  {
    id: 6,
    title: "What you have learn from the assignments",
    type: "assignment",
    text: "Write down all the necessary steps that should take by a javascript developer.",
    duration: 5,
  },
];
