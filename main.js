
/* Select metrics */
/* function hideOrShow(id) {

    var x = document.getElementById(id);

    if ( window.getComputedStyle(x, null).getPropertyValue("display") === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }

}  */  

function hideOrShow(id) {

  var x = document.getElementById(id);

  if ( window.getComputedStyle(x, null).getPropertyValue("display") === 'none') {
      x.style.display = 'block';
  } else {
      x.style.display = 'none';
  }

}



/* Checked & unchecked */
function changeBtn(id){
    
    if(document.getElementById(id).className == "btn"){
        document.getElementById(id).className = "mystyle";
    } else {
        document.getElementById(id).className = "btn";
    }

}


/* Drag & drop, Manually sort */

function enableDragSort(listClass) {
    const sortableLists = document.getElementsByClassName(listClass);
    Array.prototype.map.call(sortableLists, (list) => {enableDragList(list)});
  }
  
  function enableDragList(list) {
    Array.prototype.map.call(list.children, (item) => {enableDragItem(item)});
  }
  
  function enableDragItem(item) {
    item.setAttribute('draggable', true)
    item.ondrag = handleDrag;
    item.ondragend = handleDrop;
  }
  
  function handleDrag(item) {
    const selectedItem = item.target,
          list = selectedItem.parentNode,
          x = event.clientX,
          y = event.clientY;
    
    selectedItem.classList.add('drag-sort-active');
    let swapItem = document.elementFromPoint(x, y) === null ? selectedItem : document.elementFromPoint(x, y);
    
    if (list === swapItem.parentNode) {
      swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
      list.insertBefore(selectedItem, swapItem);
    }
  }
  
  function handleDrop(item) {
    item.target.classList.remove('drag-sort-active');
  }
  
  (()=> {enableDragSort('selected-list')})();