const pointForm = document.getElementById("pointForm");
const pointList = document.getElementById("pointList");
const areaResult = document.getElementById("areaResult");
const clearPoints = document.getElementById("clearPoints");
const loadSample = document.getElementById("loadSample");
const alertBox = document.getElementById("alertBox");
const unitInput = document.getElementById("unitInput");
const unitLabel = document.getElementById("unitLabel");
const vertexCount = document.getElementById("vertexCount");

const points = [];

const setAlert = (message = "") => {
  alertBox.textContent = message;
};

const updateStats = () => {
  vertexCount.textContent = points.length;
  const unit = unitInput.value.trim() || "square units";
  areaResult.querySelector(".unit").textContent = unit;
  unitLabel.textContent = unit;
};

const calculateArea = () => {
  if (points.length < 3) {
    setAlert("Add at least three vertices to calculate an area.");
    areaResult.querySelector(".value").textContent = "0";
    return;
  }

  let sum = 0;
  for (let i = 0; i < points.length; i += 1) {
    const nextIndex = (i + 1) % points.length;
    const { x: x1, y: y1 } = points[i];
    const { x: x2, y: y2 } = points[nextIndex];
    sum += x1 * y2 - y1 * x2;
  }

  const area = Math.abs(sum) / 2;
  areaResult.querySelector(".value").textContent = area.toFixed(2);
  setAlert("");
};

const renderPoints = () => {
  pointList.innerHTML = "";

  points.forEach((point, index) => {
    const row = document.createElement("div");
    row.className = "row";

    row.innerHTML = `
      <span>${index + 1}</span>
      <span>${point.x}</span>
      <span>${point.y}</span>
      <span>
        <button type="button" data-index="${index}">Remove</button>
      </span>
    `;

    row.querySelector("button").addEventListener("click", () => {
      points.splice(index, 1);
      renderPoints();
    });

    pointList.appendChild(row);
  });

  updateStats();
  calculateArea();
};

pointForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(pointForm);
  const xValue = Number(formData.get("x"));
  const yValue = Number(formData.get("y"));

  if (Number.isNaN(xValue) || Number.isNaN(yValue)) {
    setAlert("Please enter valid numeric coordinates.");
    return;
  }

  points.push({ x: xValue, y: yValue });
  pointForm.reset();
  renderPoints();
});

clearPoints.addEventListener("click", () => {
  points.length = 0;
  renderPoints();
});

loadSample.addEventListener("click", () => {
  points.length = 0;
  points.push(
    { x: 0, y: 0 },
    { x: 4, y: 0 },
    { x: 5, y: 3 },
    { x: 2, y: 5 },
    { x: -1, y: 3 }
  );
  renderPoints();
});

unitInput.addEventListener("input", () => {
  updateStats();
});

renderPoints();
