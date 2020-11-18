<script type="text/javascript">
    $(function () {
        $("#btnShowPopup").click(function () {
            var title = "Greetings";
            var body = "Welcome to ASPSnippets.com";
 
            $("#MyPopup .modal-title").html(title);
            $("#MyPopup .modal-body").html(body);
            $("#MyPopup").modal("show");
        });
    });
</script>