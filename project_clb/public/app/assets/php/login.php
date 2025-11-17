<?php
include 'cont.php';

if (isset($_POST['name']) && isset($_POST['pass'])) {
    $username = $_POST['name'];
    $password = $_POST['pass'];

    $sql = "SELECT * FROM admin WHERE name = '$username' AND pass = '$password'";
    $result = $conn->query($sql);

    if ($result && $result->num_rows == 1) {
        header("Location: ./admin.html");
        exit();
    } else {
        echo "false";
    }
}
?>
