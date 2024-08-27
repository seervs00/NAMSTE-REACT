const heading = React.createElement
("div",
{id:"heading"},
[React.createElement("div",{id:"child"},
    [
        React.createElement("p",{},"hello i am 1"),
        React.createElement("p",{},"hello i am 2")
    ]
),React.createElement("div",{id:"child2"},
    [   React.createElement("p",{},"hello i am 1"),
        React.createElement("p",{},"hello i am 2")]
)
]);
const b = ReactDOM.createRoot(document.getElementById("hpp"));
b.render(heading);
console.log(heading)