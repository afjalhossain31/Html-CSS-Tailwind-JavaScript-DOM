//Steps number 1 : set an event handler to the button
document.getElementById('btn-post-comment').addEventListener('click', function () {
    //console.log('Button clicked');
    //step-2: get the text written in the text area

    const commentTextBox = document.getElementById('comment-text-box');

    const newComment = commentTextBox.value;
    // console.log(newComment);

    //step-3: create a new element and add it to the comment container
    const commentContainer = document.getElementById('comment-container');
    // console.log(commentContainer);

    //step-4: create a comment paragraph p and set the innerText
    const commentElement = document.createElement('p');
    // commentContainer.classList.add('comment'); div er modde box add hoi.
    commentElement.classList.add('comment');
    commentElement.innerText = newComment;

    //step-5: append the new p tag to the parent node
    commentContainer.appendChild(commentElement);

    //step-6: clear the text area
    commentTextBox.value = '';
})