const sweetArray = [
    {
        name: "Apple Delights",
        event: "Back To School",
        count: 8
    },
    {
        name: "Pumkin delights",
        event: "Fall Festival",
        count: 8
    },
    {
        name: "Debbie cakes",
        event: "Winter Formal",
        count: 10
    }
];

const createSweetComponent = (item) => {
    return `
    <div>
        <h2>${item.name}</h2>
        <p>${item.event}</p>
        <p>8${item.count}</p>
     </div>
      `;
};
container = document.querySelector("#container");

sweetArray.forEach((item, index) => {
    container.innerHTML += createSweetComponent(item,index)

})