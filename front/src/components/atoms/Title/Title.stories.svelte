<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Title from './Title.svelte';
</script>

<Meta
  title="Atoms/Title"
  component={Title}
  argTypes={{
    content: { control: 'text' },
  }}
/>

<Template let:args>
  <Title {...args} />
</Template>

<Story
  name="With Text"
  args={{
    content: 'placeholder.text',
  }}
/>
