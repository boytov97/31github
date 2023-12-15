export class SocialShareUrlGenerator {
  private static instance: SocialShareUrlGenerator;

  private type!: string;

  public static getInstance(): SocialShareUrlGenerator {
    if (!SocialShareUrlGenerator.instance) {
      SocialShareUrlGenerator.instance = new SocialShareUrlGenerator();
    }

    return SocialShareUrlGenerator.instance;
  }

  public setType(type: string): void {
    this.type = type;
  }

  public getType(): string {
    return this.type;
  }
}
