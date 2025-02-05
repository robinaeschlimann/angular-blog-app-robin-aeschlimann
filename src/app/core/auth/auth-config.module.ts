import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';
import { environment } from '../../../environments/environment';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority:
          'https://d-ca-blog-keycloak.livelybush-bf381778.switzerlandnorth.azurecontainerapps.io/realms/blog',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'spa-blog',
        scope: 'openid profile email offline_access blogs',
        responseType: 'code',
        silentRenew: true,
        silentRenewUrl: window.location.origin + '/silent-renew.html',
        renewTimeBeforeTokenExpiresInSeconds: 10,
        secureRoutes: [environment.serviceUrl],
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
