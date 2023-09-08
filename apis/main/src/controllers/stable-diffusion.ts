import { ControllerCollection } from 'types/app';
import stableDiffusion from '@/lib/requests/apis/stable-diffusion';

const stableDiffusionController: ControllerCollection = (db) => {
  return {
    async generateImagefromPrompt(req, res, next) {
      try {
        const prompt = {
          key: process.env.STABLE_DIFFUSION_API_KEY as string,
          ...req.body,
        };
        const stableDiffusionResponse = await stableDiffusion.post('/text2img', prompt);
        let stableDiffusionImageData = await stableDiffusionResponse.json();

        if (stableDiffusionImageData.status === 'processing') {
          stableDiffusionImageData = await stableDiffusion.post('/fetch', {
            key: prompt.key,
            id: stableDiffusionImageData.id,
          });
        }

        res.status(200).json({ result: true, data: stableDiffusionImageData });
      } catch (err) {
        console.log(err);
        res.status(500).json({ result: false });
      }
    },
  };
};

export default stableDiffusionController;
