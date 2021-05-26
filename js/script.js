/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

const pageItems = 9;
const studentsList = document.querySelector(".student-list");
const linkList = document.querySelector(".link-list");


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage (list, page) {
	let startIndex = (page * pageItems) - pageItems;
	let endIndex = page * pageItems;
	studentsList.innerHTML = "";
		for (let i = 0; i < list.length; i++) {
			if (i >= startIndex && i < endIndex) {
				let listI = list[i];	
			let studentInfo =		
					`<li class="student-item cf">
							<div class="student-details">
								  <img class="avatar" src="${listI.picture.large}" alt="Profile Picture">
								  <h3>${listI.name.first} ${listI.name.last}</h3>
								  <span class="email">${listI.email}</span>
							</div>
						<div class="joined-details">
							<span class="date">Joined ${listI.registered.date}</span>
						</div>
					 </li>`;
			
			studentsList.insertAdjacentHTML("beforeend", studentInfo);
			}
		}
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
	let pages = Math.ceil(list.length / pageItems);
	linkList.innerHTML = '';
		for (let i = 1; i <= pages; i++) {
			let pagination = `
			<li>
				 <button type="button">${i}</button>
			</li>`;
			linkList.insertAdjacentHTML('beforeend', pagination);

		}
			let firstPagButton = document.querySelector(".link-list button");
			firstPagButton.className = "active";

		linkList.addEventListener ("click", (e) => {
			if (e.target.tagName == "BUTTON") {
				let clickedButton = document.querySelector(".active");
				clickedButton.classList.remove("active");
				e.target.classList.add("active")
				showPage(list, e.target.textContent);
			}	
		
		});

}



// Call functions
showPage(data, 1);
addPagination(data);