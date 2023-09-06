import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';

export function tailwindConfigResolver() {
  try {
    return resolveConfig(tailwindConfig);
  } catch (err) {
    console.log(err);
  }
}
