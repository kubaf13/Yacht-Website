import type { FC } from 'react';
import React from 'react';

import { ErrorPage as ErrorPageTemplate } from './ErrorPage';
import { errorPageMocks } from './ErrorPage.mocks';

export const ErrorPage: FC = () => <ErrorPageTemplate {...errorPageMocks} />;

export default { title: 'Templates/Error Page' };
