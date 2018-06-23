import { AccountsService } from './../accounts.service';
import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
  // Services provided from app-module so we don't need to provide here
})
export class NewAccountComponent {

  constructor(/*private loggingService: LoggingService,*/ private accountsService: AccountsService) {} // binding to property

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
