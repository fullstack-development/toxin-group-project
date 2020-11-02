import { boundMethod } from 'autobind-decorator';

import { SubscriptionData } from 'redux/Subscriptions/types';

import { Database, CollectionReference } from '../Firebase/modules/Database';

class Subscriptions {
  private readonly actions: Database;
  private readonly reference: CollectionReference;

  constructor(actions: Database) {
    this.actions = actions;
    this.reference = this.actions.ref().collection('subscriptions');
  }

  @boundMethod
  public async add(email: string, data: SubscriptionData): Promise<void> {
    this.actions.post({ ref: this.reference, doc: email, data });
  }

  @boundMethod
  public async remove(email: string): Promise<void> {
    this.actions.removeDocument(this.reference.doc(email));
  }

  @boundMethod
  public update(email: string, data: SubscriptionData): void {
    this.actions.update(this.reference.doc(email), data);
  }

  @boundMethod
  public async load(email: string): Promise<SubscriptionData> {
    return this.actions.getDocument(this.reference, email);
  }
}

export default Subscriptions;
