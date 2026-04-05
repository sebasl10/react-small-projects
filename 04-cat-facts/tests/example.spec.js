// @ts-check
import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:5173';
const PREFIX_URL = 'https://cataas.com/cat/';

test('app shows random fact and image', async ({ page }) => {
  await page.goto(BASE_URL);

  const textContent = await page.getByRole('paragraph').textContent();
  const imageSrc = await page.getByRole('img').getAttribute('src');

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(PREFIX_URL)).toBe(true);
});