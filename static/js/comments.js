document.addEventListener("DOMContentLoaded", () => {
  const editButtons = document.getElementsByClassName("btn-edit");
  const deleteButtons = document.getElementsByClassName("btn-delete");
  const deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
  const deleteConfirm = document.getElementById("deleteConfirm");
  const commentText = document.getElementById("id_body");
  const commentForm = document.getElementById("commentForm");
  const submitButton = document.getElementById("submitButton");

  // EDIT comments
  for (let btn of editButtons) {
    btn.addEventListener("click", (e) => {
      const editUrl = e.currentTarget.getAttribute("data-edit-url");
      console.log("EDIT click will POST to", editUrl);

      const commentId = e.currentTarget.getAttribute("data-comment_id");
      const commentContent = document.getElementById(`comment${commentId}`).innerText;
      commentText.value = commentContent;

      submitButton.innerText = "Update";
      commentForm.setAttribute("action", editUrl);
    });
  }

  // DELETE comments
  for (let btn of deleteButtons) {
    btn.addEventListener("click", (e) => {
      const deleteUrl = e.currentTarget.getAttribute("data-delete-url");
      console.log("DELETE click will go to", deleteUrl);

      deleteConfirm.href = deleteUrl;
      deleteModal.show();
    });
  }
});
