var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["judul"] = document.getElementById("judul").value;
    formData["penerbit"] = document.getElementById("penerbit").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["tgl"] = document.getElementById("tgl").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("listpinjam").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.judul;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.penerbit;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.qty;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.tgl;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a class="btn btn-danger" onClick="onEdit(this)">Edit</a>
                       <a class="btn btn-primary" onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("judul").value = "";
    document.getElementById("penerbit").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("tgl").value = "";

    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("judul").value = selectedRow.cells[1].innerHTML;
    document.getElementById("penerbit").value = selectedRow.cells[2].innerHTML;
    document.getElementById("qty").value = selectedRow.cells[3].innerHTML;
    document.getElementById("tgl").value = selectedRow.cells[4].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.judul;
    selectedRow.cells[2].innerHTML = formData.penerbit;
    selectedRow.cells[3].innerHTML = formData.qty;
    selectedRow.cells[4].innerHTML = formData.tgl;

}

function onDelete(td) {
    if (confirm('Hapus data yang dipilih ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("listpinjam").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}