var state={
    taskList:[]
};

// DOM objs
var taskContents = document.querySelector(".task_contents");
var taskModals = document.querySelector(".task__modal__body");

var htmlTaskContent = ({id, url, title, description, type}) =>{`
    <div class='col-md-6 col-lg-4 mt-3' id=${id} key=${id}>
        <div class='card shadow-sm task__card'>
            <div class='card-header d-flex justify-content-end task__card__header'>
              <button type="button" class="btn btn-outline-info mr-2" name="${id}">
                <i class="fas fa-pencil-alt"></i>
              </button>
              <button type="button" class="btn btn-outline-danger mr-2" name="${id}">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
            <div class="card-body">
              ${
                url &&
                `<img width="100%" src=${url} alt="card img cap" class="card-img-top md-3 rounded-lg" />`
              }
              <h4 class="card-title">${title}</h4>
              <p class="description trim-3-lines text-muted data-gram_editor='false'">${description}</p>
              <div class="tags text-white d-flex flex-wrap">
                <span class="badge bg-primary m-1">${type}</span>
              </div>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-outline-primary float-right" data-bs-toggle="modal" data-bs-target="#ViewTaskModa">Open Task</button>
            </div>
        </div>
    </div>
`;
};

var htmlTaskModal = (id, url, title, description, type) =>
{
  var date = new Date(parseInt(id));
  return`
    <div id=${id}>
      ${
        url &&
       `<img width="100%" src=${url} alt="card img cap" class="card-img-top md-3 rounded-lg" />`
      }
      <strong class='text-sm text-muted'>Created on ${date.toDateString()}</strong>
      <h2 class='my-3'>${title}</h2>
      <p class='lead'>${description}</p>
    </div>
  `;
};

var updateLocalStorage = () =>
{
  localStorage.setItem('task', JSON.stringify({tasks : state.taskList,}))
}

var loadinitialData = () =>
{
  var localStorageCopy = JSON.parse(localStorage.tasks);
  if(localStorageCopy) state.taskList = localStorageCopy.tasks;
  state.taskList.map((cardDate)=>
  {
    taskContents.insertAdjacentHTML("beforeend",htmlTaskContent(cardDate));
  })
}

var handleSubmit = (event) =>
{
  const id = `${Date.now()}`;
  const input = {
    url: document.getElementById("imageURL").value,
    title: document.getElementById("taskTitle").value,
    type: document.getElementById("tags").value,
    description: document.getElementById("description").value,
  }
}