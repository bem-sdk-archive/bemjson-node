import './globals.d';

declare class BemjsonNode {
    constructor(obj: BEMSDK.BemjsonNode.Options);

    readonly block: BEMSDK.BemjsonNode.BlockName;
    readonly elem: BEMSDK.BemjsonNode.ElementName | undefined;
    readonly mods: BEMSDK.BemjsonNode.Modifiers | undefined;
    readonly mix: Array.<BemjsonNode>;

    valueOf(): BEMSDK.BemjsonNode.Representation;
    toJSON(): BEMSDK.BemjsonNode.Representation;
    toString(): string;
    inspect(depth: number, options: object): string;

    static create(obj: BEMSDK.BemjsonNode.CreateOptions | string): BemjsonNode;
    static isBemjsonNode(bemjsonNode: any): boolean;
}

export = BemjsonNode;
