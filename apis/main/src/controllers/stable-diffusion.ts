import { ControllerCollection } from 'types/app';

const stableDiffusionController: ControllerCollection = (db) => {
  return {
    async generateImagefromPrompt(req, res, next) {
      const prompt = { key: process.env.TABLE_DIFFUSION_API_KEY as string };
      console.log(prompt);
      res.status(200);
    },
  };
};

export default stableDiffusionController;
