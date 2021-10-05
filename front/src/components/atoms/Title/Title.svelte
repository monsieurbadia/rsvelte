<script>
  export let content;
</script>

<div class="title">{content}</div>

<style lang="scss">
  @import '../../../styles/abstracts/functions';

  .title {
    font-size: font-size(title);
    font-weight: font-weight(light);
    text-transform: uppercase;
    color: color(red-100);
  }
</style>
