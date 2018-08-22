// add code snippets from README

/* Application Goal
1) Clicking on the button should change the state.
2) This change in state should be rendered.
*/


let state;
 
// Reducer Function to get what the new state should be
function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}

// Dispatch Function -- function that persists state and calls render
function dispatch(action){
    state = reducer(state, action);
    render();
}

// Render Function -- updates the HTML view
function render(){
    let container = document.getElementById('container');
    container.textContent = state.count;
}


// Init call to dispatch to render the "default state"
dispatch({type: '@@INIT'})


// Include a non-jQuery JS click listener
let button = document.getElementById('button');
button.addEventListener('click', function(){
    dispatch({type: 'INCREASE_COUNT'})
})
