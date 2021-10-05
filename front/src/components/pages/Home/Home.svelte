<script>
  import logo from '../../../assets/rustacean-flat-gesture.svg';
  import Link from '../../atoms/Link/Link.svelte';
  import Logo from '../../atoms/Logo/Logo.svelte';
  import Paragraph from '../../atoms/Paragraph/Paragraph.svelte';
  import Title from '../../atoms/Title/Title.svelte';

  export let wasm;
</script>

<Logo src={logo} alt="the rustacean mascot" />
<Title content={wasm.greet('rustacean')} />
<Paragraph>
  Visit the <Link href="https://svelte.dev/tutorial">Svelte tutorial</Link> to learn
  how to build Svelte apps.
</Paragraph>
