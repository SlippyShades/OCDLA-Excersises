let state = {};
let root = null;
let rootComponent = null;
let renderFn = null;
function GetState(Key){
    return state[Key];
};
function SetState(Key,Value){
    state[Key] = Value;
    renderFn();
};
function render(root, Component) {

    let fn = function() {
        root.innerHTML = "";
        root.appendChild(Component());
    };

    renderFn = fn;
    renderFn();
};
export {GetState, SetState,render};