import { validationMiddleware } from '@/middleware/exports';
import stableDiffusionControler from '@/controllers/stable-diffusion';
import { Router } from 'types/app';

const stableDiffusionRouter: Router = (router, db) => {
  const validate = validationMiddleware(db);
  const controller = stableDiffusionControler(db);

  return {
    base: '/stable-diffusion',
    routers: () => {
      const promptOptionKeys = [
        'prompt',
        'negative_prompt',
        'width',
        'height',
        'samples',
        'num_inference_steps',
        'safety_checker',
        'enhance_prompt',
        'seed',
        'guidance_scale',
        'multi_lingual',
        'panorama',
        'self_attention',
        'upscale',
        'embeddings_model',
        'webhook',
        'track_id',
      ];

      router.post(
        '/txttoimg',
        validate.fields(promptOptionKeys, true),
        controller.generateImagefromPrompt
      );
    },
  };
};

export default stableDiffusionRouter;
