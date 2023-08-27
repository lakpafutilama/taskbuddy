const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");

let tid;

draggables.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
    tid = task.getAttribute("data-task-id");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
    task.setAttribute("draggable", true);
  });
});

droppables.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();

    const bottomTask = insertAboveTask(zone, e.clientY);
    const curTask = document.querySelector(".is-dragging");

    if (!bottomTask) {
      zone.appendChild(curTask);
    } else {
      zone.insertBefore(curTask, bottomTask);
    }
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();

    const targetSwimLane = e.target.closest(".swim-lane");
    if (targetSwimLane) {
      let task_status;
      if (targetSwimLane.id == "created-lane") task_status = "Create";
      else if (targetSwimLane.id == "progress-lane") task_status = "Progress";
      else if (targetSwimLane.id == "hold-lane") task_status = "Hold";
      else if (targetSwimLane.id == "done-lane") task_status = "Complete";
      updateStatus(tid, { task_status });
    }
  });
});

const insertAboveTask = (zone, mouseY) => {
  const els = zone.querySelectorAll(".task:not(.is-dragging)");

  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  els.forEach((task) => {
    const { top } = task.getBoundingClientRect();
    const offset = mouseY - top;

    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestTask = task;
    }
  });

  return closestTask;
};

async function updateStatus(tid, payload) {
  try {
    const response = await axios.put(
      `http://localhost:8080/task/${tid}`,
      payload
    );
    alert(response.data.data);
    window.location.reload();
  } catch (error) {
    alert(error.response.data.message);
  }
}
