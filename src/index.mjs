import assert from 'node:assert/strict';
import { generateSecret, createAuthorizationKey, isAuthorizedForApp, resolveAuthorizationKey } from '@x12i/basic-auth';

// This random secret exists only in this process. No key material is printed.
const secret = generateSecret();
const key = createAuthorizationKey({ appId: 'example-app', secret, expiresIn: '5m', metadata: { purpose: 'demo' } });
assert.equal(isAuthorizedForApp({ key, appId: 'example-app', secret }), true);
assert.equal(isAuthorizedForApp({ key, appId: 'another-app', secret }), false);
const resolved = resolveAuthorizationKey({ key, secret });
assert.equal(resolved.metadata.purpose, 'demo');
console.log({ appId: resolved.appId, expired: resolved.expired });
