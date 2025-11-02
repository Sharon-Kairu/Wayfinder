'use client';
import React, { Suspense } from 'react';
import WhatWeDoContent from './WhatWeDoContent';

const WhatWeDoPage = () => {
  return (
    <Suspense fallback={<div className="text-center py-20 text-blue-900">Loading...</div>}>
      <WhatWeDoContent />
    </Suspense>
  );
};

export default WhatWeDoPage;
