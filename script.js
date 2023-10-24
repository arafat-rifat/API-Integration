"use strict";

const randerAdress = function (data, className) {
  let html = "";
  data.map((value) => {
    console.log(value);

    // const { primary, address, phone, website, company } = value;
    // console.log(primary, address, phone, website, company);
    html += `

    <div class="py-6 md:py-0 md:px-6 ${className}"  id="details">
    <h1 class="text-4xl font-bold">${value.name}</h1>
    <p class="pt-2 pb-4"> ID:${value.id}</p>
    <div class="space-y-4 ">
      <p class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5 mr-2 sm:mr-6"
        >
          <path
            fill-rule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>street:"${value.address.street}",Zip-code:"${value.address.zipcode}",city:"${value.address.city}"</span>
      </p>
      <p class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5 mr-2 sm:mr-6"
        >
          <path
            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
          ></path>
        </svg>
        <span>${value.phone}</span>
      </p>
      <p class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5 mr-2 sm:mr-6"
        >
          <path
            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
          ></path>
          <path
            d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
          ></path>
        </svg>
        <span>${value.email}</span>
      </p>
      <p class="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5 mr-2 sm:mr-6"
      >
        <path
          d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
        ></path>
        <path
          d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
        ></path>
      </svg>
      <span>${value.company.name}</span>
    </p>

    <p class="flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="w-5 h-5 mr-2 sm:mr-6"
    >
      <path
        fill-rule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <span>GEO:-->  Lat:"${value.address.geo.lat}",Lang:"${value.address.geo.lng}"</span>
  </p>

    </div>
    </div>`;

    document.getElementById("details").innerHTML = html;
  });
};

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    // randerCart(data);
    console.log(data);

    randerAdress(data, "mb-[50px]");
  })
  .catch((err) => console.log(err));

Another Task

const randerPost = function (data, className = "") {
  let html = " ";

  data.forEach((value) => {
    console.log(value);

    if (value.userId === 1 || value.userId === 2)
      html += ` <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12"  id="Test">
    <a rel="noopener noreferrer" href="#" class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
    <img src="https://source.unsplash.com/random/480x360" alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500">
    <div class="p-6 space-y-2 lg:col-span-5">
      <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:no-underline">${value.title}</h3>
      <span class="text-xs dark:text-gray-400 ${className} ">ID: ${value.id}, UserId: ${value.userId}</span>
      <p class="${className}">${value.body}</p>
    </div>
  </div>`;

    document.getElementById("Test").innerHTML = html;
  });
};

const getJson = function (url) {
  return fetch(url).then((res) => res.json());
};

getJson("https://jsonplaceholder.typicode.com/posts").then((data) => {
  console.log(data);
  randerPost(data, "text-lg font-bold");
});




// For POST Method
// When We send Some thing for BackEnd

const firstName = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const address = document.getElementById("address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip = document.getElementById("zip");
const username = document.getElementById("username");
const website = document.getElementById("website");
const bio = document.getElementById("bio");
const button = document.getElementById("button");

button.addEventListener("click", function () {
  let obj = {
    method: "POST",
    body: JSON.stringify({
      // title: "Rifat",
      // body: "a,b,c,d,e,f,g,h,i",
      // userId: 506,

      fname: firstName.value,
      lname: `USER/${lastname.value}`,
      email: `${email.value}`,
      address: `${address.value}`,
      city: `${city.value}`,
      state: `${state.value}`,
      zip: `${zip.value}`,
      bio: `${bio.value}`,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  fetch("https://jsonplaceholder.typicode.com/posts", obj)
    .then((response) => response.json())
    .then((data) => console.log(data));
});
