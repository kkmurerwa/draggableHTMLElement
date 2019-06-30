//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));
var parentComponent = document.getElementById("container");

//Function that facilitates dragging of objects
function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        // alert(parentComponent.clientHeight);
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        //Prevent item from crossing top border
        if (elmnt.offsetTop < parentComponent.offsetTop) {
            elmnt.style.top = parentComponent.offsetTop + "px";
        }
        //Prevent item from crossing bottom border
        else if (elmnt.offsetTop > parentComponent.clientHeight - elmnt.clientHeight) {
            elmnt.style.top = (parentComponent.clientHeight - elmnt.clientHeight) + "px";
        }
        //Prevent item from crossing Right border
        else if (elmnt.offsetLeft > parentComponent.clientWidth) {
            elmnt.style.left = (parentComponent.clientWidth) + "px";
        }
        //Prevent element from crossing Left border
        else if (elmnt.offsetLeft < parentComponent.offsetLeft) {
            elmnt.style.left = parentComponent.offsetLeft + "px";
        } else {
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}