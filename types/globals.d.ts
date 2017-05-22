declare namespace BEMSDK {
    export namespace BemjsonNode {
        /* Should we use BEMSDK.EntityName.* instead? */
        export type BlockName = string;
        export type ElementName = string;
        export type ModifierName = string;
        export type ModifierValue = string | true;

        /**
         * Object to represent modifiers of bemjson node.
         */
        export type Modifiers = Hash<ModifierName, ModifierValue>;

        /**
         * Strict object to represent bemjson node.
         */
        export interface AbstractRepresentation {
            block: BlockName;
            elem?: ElementName;
        }

        /**
         * Object to create representation of entity name.
         */
        export interface Options extends AbstractRepresentation {
            mods?: Modifiers;
            elemMods?: Modifiers;
            mix?: Array.<BemjsonNode | string>;
        }

        /**
         * Strict object to represent bemjson node.
         */
        export interface Representation extends AbstractRepresentation {
            mods: Modifiers;
            elemMods: Modifiers;
            mix: Array.<BemjsonNode>;
        }
    }
}
