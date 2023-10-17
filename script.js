document.addEventListener("DOMContentLoaded", function () {
    const postForm = document.getElementById("post-form");
    const postTable = document.getElementById("post-table");

    postForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        const newRow = postTable.insertRow(1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.innerHTML = title;
        cell2.innerHTML = content;
        cell3.innerHTML = '<button onclick="deletePost(this)">Delete</button> ' +
            '<button onclick="updatePost(this)">Update</button>';

        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
    });
});

function deletePost(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function updatePost(button) {
    const row = button.parentNode.parentNode;
    const title = row.cells[0].innerHTML;
    const content = row.cells[1].innerHTML;

    document.getElementById("title").value = title;
    document.getElementById("content").value = content;

    deletePost(button);
}
