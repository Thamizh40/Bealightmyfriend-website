// function hasClass(elem, className) {
//     return elem.className.split(' ').indexOf(className) > -1;
// }
// document.getElementById('allComments').addEventListener('click', function (e) {
//     if (hasClass(e.target, 'reply')) {
//         const parentDiv = e.target.parentElement;
//         const wrapDiv = document.createElement('div');
//         wrapDiv.style.marginLeft = (Number.parseInt(parentDiv.style.marginLeft) + 15).toString() + 'px';
//         wrapDiv.className = 'wrapper';
//         const textArea = document.createElement('textarea');
//         textArea.style.marginRight = '20px';
//         const addButton = document.createElement('button');
//         addButton.className = 'addReply';
//         addButton.innerHTML = 'Add';
//         const cancelButton = document.createElement('button');
//         cancelButton.innerHTML = 'Cancel';
//         cancelButton.className='cancelReply';
//         wrapDiv.append(textArea, addButton, cancelButton);
//         parentDiv.appendChild(wrapDiv);
//     } else if(hasClass(e.target, 'addReply')) {
//         addComment(e);
//     } else if(hasClass(e.target, 'likeComment')) {
//          const likeBtnValue = e.target.innerHTML;
//          e.target.innerHTML = likeBtnValue !== 'Like' ? Number.parseInt(likeBtnValue) + 1 : 1;
//     } else if(hasClass(e.target, 'cancelReply')) {
//         e.target.parentElement.innerHTML = '';
//     } else if(hasClass(e.target, 'deleteComment')) {
//         e.target.parentElement.remove();
//     }
// });


let add = () => {
    let name = document.querySelector('.container-comment #name');
    let comment = document.querySelector('.container-comment #comment');

    if (name.value !== "" && comment.value != "") {

        let list = document.querySelector('.list');
        let time = new Date();
        let h = time.getHours();
        let m = time.getMinutes();
        let s = time.getSeconds();
        let now = time;
        let list_item = document.createElement("l1");

        list_item.innerHTML = `
    <span>
    <p>${name.value} ${now}</p> 
    </span>
    <p>${comment.value}</p>
    `;
        list.append(list_item);
    }

    if (name.value == "" || comment.value == "") {
        let list = document.querySelector('.list');
        let list_item = document.createElement("l2");
        var warn = 'Please enter name & comment!';
        list_item.innerHTML = `
    <span>
    <p>${warn}</p> 
    </span>
    `;
        list.append(list_item);
    }
    name.value = comment.value = "";
}


