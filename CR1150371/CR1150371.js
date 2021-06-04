
<script>
        var s = "b".repeat(0xAAAFFFF);
        new Intl.ListFormat().format(Array(16).fill(s)).length
</script>