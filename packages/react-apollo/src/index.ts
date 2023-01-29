import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/**
 * Angle unit
 * @typedef {("Degrees"|"Radians")} AngleUnit
 */

/**
 * Result of approving a follow request
 * @typedef {Object} ApproveProfileFollowPayload
 * @property {Profile} fromProfile - The follower profile
 * @property {ProfileFollowStatus} [status] - The status of the follow request
 * @property {Profile} toProfile - The profile being followed
 */

/**
 * Additional data defined on a resource
 * @typedef {Object} Attribute
 * @property {string} id - 
 * The attribute identifier
 * 
 * Has the form "{{resource_type}}/{{attribute_name}}"
 * eg: The "title" attribute on an item will have the id: "item/title"
 * 
 * Custom attributes have the form "custom/{{attribute_name}}"
 * 
 * @property {string} [locale] - Optional string representing the locale of the attribute value
 * @property {JSON} [meta] - Optional attribute metadata, can be any JSON-serialisable type
 * @property {JSON} [value] - The attribute value, can be any JSON-serialisable type
 */

/**
 * Connection of Attributes
 * @typedef {Object} AttributeConnection
 * @property {Array<AttributeEdge>} edges - All the edges in this page of the connection
 * @property {Array<Attribute>} nodes - Shortcut for edges[].node
 * @property {PageInfo} pageInfo - Details regarding the current page of the connnection
 * @property {number} totalCount - The total number of items in the connection (in all pages)
 */

/**
 * Edge containing a Attribute
 * @typedef {Object} AttributeEdge
 * @property {string} cursor - The cursor string pointing to this item
 * @property {Attribute} node - The item
 */

/**
 * A selector for an attribute
 * @typedef {Object} AttributeIdentifierInput
 * @property {string} id - The attribute identifier
 * @property {string} [locale] - The locale of the attribute
 */

/**
 * Defines an attribute
 * @typedef {Object} AttributeInput
 * @property {string} id - The attribute identifier
 * @property {string} [locale] - Optional string representing the locale of the attribute value
 * @property {JSON} [meta] - Optional attribute metadata, can be any JSON-serialisable type
 * @property {JSON} value - The attribute value, can be any JSON-serialisable type
 */

/**
 * The address field of a BillingDetails object
 * @typedef {Object} BillingAddress
 * @property {string} addressLineOne
 * @property {string} [addressLineTwo]
 * @property {string} countryCode
 * @property {string} locality
 * @property {string} [postalCode]
 * @property {string} region
 */

/**
 * Fields for update billing address field
 * @typedef {Object} BillingAddressInput
 * @property {string} addressLineOne
 * @property {string} [addressLineTwo]
 * @property {string} countryCode
 * @property {string} locality
 * @property {string} [postalCode]
 * @property {string} region
 */

/**
 * Billing details associated with a profile
 * @typedef {Object} BillingDetails
 * @property {BillingAddress} address - The billing address
 * @property {string} emailAddress - The email address
 * @property {string} familyName - The family name
 * @property {string} givenName - The given name
 * @property {string} [organization] - The optional organization name
 * @property {Profile} profile - Profile that these billing details apply to
 */

/**
 * A billing plan
 * @typedef {Object} BillingPlan
 * @property {string} id - The identifier for this plan
 * @property {BillingPrice} [price] - The price of this plan
 * @property {number} quantity - The quantity
 */

/**
 * A price available for a billing plan
 * @typedef {Object} BillingPrice
 * @property {number} amount - The amount of this price
 * @property {string} currency - The currency used for this price
 * @property {string} id - The unique id for this price
 * @property {BillingProduct} product - The product corres
 * @property {BillingPriceRecurring} recurring - Recurrence details of the price
 */

/**
 * Connection of BillingPrices
 * @typedef {Object} BillingPriceConnection
 * @property {Array<BillingPriceEdge>} edges - All the edges in this page of the connection
 * @property {Array<BillingPrice>} nodes - Shortcut for edges[].node
 * @property {PageInfo} pageInfo - Details regarding the current page of the connnection
 * @property {number} totalCount - The total number of items in the connection (in all pages)
 */

/**
 * Edge containing a BillingPrice
 * @typedef {Object} BillingPriceEdge
 * @property {string} cursor - The cursor string pointing to this item
 * @property {BillingPrice} node - The item
 */

/**
 * The billing price to use
 * @typedef {Object} BillingPriceInput
 * @property {string} priceId - The ID of a BillingPrice
 * @property {number} [quantity] - The quantity, defaults to 1
 */

/**
 * The recurrence details for a BillingPrice
 * @typedef {Object} BillingPriceRecurring
 * @property {number} count - The number of interval per recurrence
 * @property {BillingPriceRecurringInterval} interval - The interval type
 */

/**
 * The interval type
 * @typedef {("Day"|"Month"|"Week"|"Year")} BillingPriceRecurringInterval
 */

/**
 * A product corresponding to a price
 * @typedef {Object} BillingProduct
 * @property {string} [description] - The description for this product
 * @property {string} id - The unique id for this product
 * @property {string} name - The name of this product
 */

/**
 * A billing subscription
 * @typedef {Object} BillingSubscription
 * @property {string} created - The date when the subscription was created
 * @property {string} id - The unique id for this subscription
 * @property {string} modified - The date when the subscription was last modified
 * @property {Array<BillingPlan>} plans - The plans attached to this subscription
 * @property {Profile} profile - Profile that this billing subscription belongs to
 * @property {BillingSubscriptionStatus} status - The current status of this subscription
 */

/**
 * Connection of BillingSubscriptions
 * @typedef {Object} BillingSubscriptionConnection
 * @property {Array<BillingSubscriptionEdge>} edges - All the edges in this page of the connection
 * @property {Array<BillingSubscription>} nodes - Shortcut for edges[].node
 * @property {PageInfo} pageInfo - Details regarding the current page of the connnection
 * @property {number} totalCount - The total number of items in the connection (in all pages)
 */

/**
 * Edge containing a BillingSubscription
 * @typedef {Object} BillingSubscriptionEdge
 * @property {string} cursor - The cursor string pointing to this item
 * @property {BillingSubscription} node - The item
 */

/**
 * The status of a BillingSubscription
 * @typedef {("Active"|"Cancelled"|"Expired"|"Inactive")} BillingSubscriptionStatus
 */

/**
 * A bounding box on a map defined by two positions (opposite corners of the box)
 * @typedef {Object} Bounds
 * @property {number} e - The east-most longitude of the bounding box
 * @property {Array<number>} en - The north-east point of the bounding box in the form: [east, north]
 * @property {Array<Array<number>>} minMax - The minimum and maximum points of the bounding box in the form: [minimum, maximum]
 * @property {number} n - The north-most latitude of the bounding box
 * @property {number} s - The south-most latitude of the bounding box
 * @property {number} w - The west-most longitude of the bounding box
 * @property {Array<number>} ws - The south-west point of the bounding box in the form: [west, south]
 * @property {Array<number>} wsen - The south-west and north-east points of the bounding box in the form: [west, south, east, north]
 */

/**
 * A bounding circle on a map defined by a center positions and a radius
 * @typedef {Object} BoundsCircleInput
 * @property {PositionInput} position - The center position of the circle
 * @property {number} radius - The radius of the bounding circle
 */

/**
 * A bounding box on a map defined by two positions (opposite corners of the box)
 * @typedef {Object} BoundsInput
 * @property {number} e - The east-most longitude of the bounding box
 * @property {number} n - The north-most latitude of the bounding box
 * @property {number} s - The south-most latitude of the bounding box
 * @property {number} w - The west-most longitude of the bounding box
 */

/**
 * The result of Mutation.captureMarketingInformation
 * @typedef {Object} CaptureMarketingInformationPayload
 * @property {string} [profileId] - The ID of the profile that the information is associated against
 */

/**
 * Response to Mutation.changeItineraryDefaultLocale
 * @typedef {Object} ChangeItineraryDefaultLocalePayload
 * @property {Itinerary} [itinerary] - The changed itinerary
 */

/**
 * Response of claiming a handle
 * @typedef {Object} ClaimProfileHandlePayload
 * @property {Profile} [profile] - The profile that will claim the handle
 */

/**
 * A collection type is used to group together a unordered set of items
 * @typedef {Object} Collection
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {AttributeConnection} attrs - Query multiple attributes optionally filtering by id and/or locale
 * @property {string} [created] - The date when the collection was created
 * @property {string} [description] - A longer text description
 * @property {string} discriminator - A label used to differentiate types of collections
 * @property {string} id - The Globally Unique ID of the object.
 * @property {CollectionItemEmbedded} [item] - Returns an item belonging to this collection by id
 * @property {CollectionItemConnection} items - Retrieve multiple collection-items belonging to this collection
 * @property {Array<MediaContainer>} media - List of MediaContainers containing images or other media - DEPRECATED: use mediaContainers instead
 * @property {MediaContainerConnection} mediaContainers - List of MediaContainers containing images or other media
 * @property {string} [modified] - The date when the collection was last modified
 * @property {MediaContainer} [preferredMedia] - A single MediaContainer representing the preferred media to use
 * @property {Profile} profile - Profile that owns this collection
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [synopsis] - A short text summary
 * @property {Array<string>} tags - A series of strings applied to label this item
 * @property {string} [title] - A supplied title for this collection
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * Connection of Collections
 * @typedef {Object} CollectionConnection
 * @property {Array<CollectionEdge>} edges - All the edges in this page of the connection
 * @property {Array<Collection>} nodes - Shortcut for edges[].node
 * @property {PageInfo} pageInfo - Details regarding the current page of the connnection
 * @property {number} totalCount - The total number of items in the connection (in all pages)
 */

/**
 * All possible collection discriminators
 * @typedef {("Collection"|"Locale")} CollectionDiscriminator
 */

/**
 * Edge containing a Collection
 * @typedef {Object} CollectionEdge
 * @property {string} cursor - The cursor string pointing to this item
 * @property {Collection} node - The item
 */

/**
 * A collection item contains data about a single entity and is assigned within a collection
 * @typedef {Object} CollectionItem
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {AttributeConnection} attrs - Query multiple attributes optionally filtering by id and/or locale
 * @property {string} [created] - The date when the collection-item was created
 * @property {string} [description] - A longer text description
 * @property {string} [externalId] - Identifier from an external source this item is associated with
 * @property {string} [externalSource] - The source of the item's externalId
 * @property {string} id - The unique identifier, taking the shape of item/XYZ
 * @property {Array<MediaContainer>} media - List of MediaContainers containing images or other media - DEPRECATED: use mediaContainers instead
 * @property {MediaContainerConnection} mediaContainers - List of MediaContainers containing images or other media
 * @property {string} [modified] - The date when the collection-item was last modified
 * @property {MediaContainer} [preferredMedia] - The preferred MediaContainer to use
 * @property {Profile} profile - The associated profile owner
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {Array<string>} sectionIds - One or more sections this item belongs to
 * @property {string} [synopsis] - A short text summary
 * @property {Array<string>} tags - A series of strings applied to label this item
 * @property {string} [title] - The supplied title
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * Connection of CollectionItems
 * @typedef {Object} CollectionItemConnection
 * @property {Array<CollectionItemEdge>} edges - All the edges in this page of the connection
 * @property {Array<CollectionItem>} nodes - Shortcut for edges[].node
 * @property {PageInfo} pageInfo - Details regarding the current page of the connnection
 * @property {number} totalCount - The total number of items in the connection (in all pages)
 */

/**
 * Edge containing a CollectionItem
 * @typedef {Object} CollectionItemEdge
 * @property {string} cursor - The cursor string pointing to this item
 * @property {CollectionItem} node - The item
 */

/**
 * A CollectionItem that's embedded in another resource
 * @typedef {(CollectionItemFailedToLoad|CollectionLocation)} CollectionItemEmbedded
 */

/**
 * Represents an embedded CollectionItem that failed to load
 * @typedef {Object} CollectionItemFailedToLoad
 * @property {string} id - The Globally Unique ID of the object.
 */

/**
 * Determine how to sort CollectionItems when listing
 * @typedef {Object} CollectionItemsSort
 * @property {SortDirection} [created] - Sort by the created date
 * @property {SortDirection} [modified] - Sort by the modified date
 * @property {SortDirection} [title] - Sort by the collection-item title
 */

/**
 * A CollectionItem used to represents a single location association to a place.
 * @typedef {Object} CollectionLocation
 * @property {PlaceAddress} address - Address information for the collection location
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {AttributeConnection} attrs - Query multiple attributes optionally filtering by id and/or locale
 * @property {Bounds} [bounds] - The bounding box around the collection-location (derived from place if not overridden)
 * @property {PlaceContact} contact - Contact information for the collection location
 * @property {string} [created] - The date when the collection-item was created
 * @property {string} [description] - A longer text description
 * @property {string} [externalId] - Identifier from an external source this item is associated with
 * @property {string} [externalSource] - The source of the item's externalId
 * @property {string} id - The unique identifier, taking the shape of item/XYZ
 * @property {Array<MediaContainer>} media - List of MediaContainers containing images or other media - DEPRECATED: use mediaContainers instead
 * @property {MediaContainerConnection} mediaContainers - List of MediaContainers containing images or other media
 * @property {string} [modified] - The date when the collection-item was last modified
 * @property {Place} place - The associated place information for this location
 * @property {Position} position - The position of the collection-location (derived from place if not overridden)
 * @property {MediaContainer} [preferredMedia] - The preferred MediaContainer to use
 * @property {Profile} profile - The associated profile owner
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {Array<string>} sectionIds - One or more sections this item belongs to
 * @property {string} [synopsis] - A short text summary
 * @property {Array<string>} tags - A series of strings applied to label this item
 * @property {string} [title] - The supplied title
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * Determine how to sort Collections when listing
 * @typedef {Object} CollectionsSort
 * @property {SortDirection} [created] - Sort by the created date
 * @property {SortDirection} [modified] - Sort by the modified date
 * @property {SortDirection} [title] - Sort by the collection title
 */

/**
 * Points on the compass rose
 * @typedef {("E"|"N"|"NE"|"NW"|"S"|"SE"|"SW"|"W")} CompassPoint
 */

/**
 * Connected apps stored in the profile
 * @typedef {Object} ConnectedApp
 * @property {ConnectedAppAuthType} [authType] - Depending on the authentication method, this can highlight the authenticated application method (e.g. OAuth)
 * @property {string} id - The Globally Unique ID of the object.
 * @property {JSON} [privateConfiguration] - Private configuration information as encrypted JSON
 * @property {Profile} [profile] - The profile associated with this connected app
 * @property {string} [publicId] - A 3rd party ID or Account ID, this does not affect any of the Alpaca ID naming - for instance, if we are connecting to an Identity in OAUTH, this is the OAUTH Identity ID - This is just a place to store data
 * @property {string} [scope] - Any specific scope that has been granted to the 3rd party application
 * @property {ConnectedAppServiceKey} serviceKey - This is the key relating to the service - it identifies the "App" we are connecting to
 * @property {ConnectedAppType} [type] - A key to describe the type of connection to the application
 */

/**
 * Possible auth types for a ConnectedApp
 * @typedef {("Credentials"|"Oauth"|"Tokens")} ConnectedAppAuthType
 */

/**
 * Connection of ConnectedApps
 * @typedef {Object} ConnectedAppConnection
 * @property {Array<ConnectedAppEdge>} edges - All the edges in this page of the connection
 * @property {Array<ConnectedApp>} nodes - Shortcut for edges[].node
 * @property {PageInfo} pageInfo - Details regarding the current page of the connnection
 * @property {number} totalCount - The total number of items in the connection (in all pages)
 */

/**
 * Edge containing a ConnectedApp
 * @typedef {Object} ConnectedAppEdge
 * @property {string} cursor - The cursor string pointing to this item
 * @property {ConnectedApp} node - The item
 */

/**
 * The key of the service for a ConnectedApp
 * @typedef {("AlpacaLegacy"|"AustralianTourismDataWarehouse"|"CrowdriffApi"|"GoogleAnalytics4"|"ShopifyApi")} ConnectedAppServiceKey
 */

/**
 * Possible types of ConnectedApp
 * @typedef {("Api"|"Configuration"|"Credentials")} ConnectedAppType
 */

/**
 * The output after creating a billing checkout session
 * @typedef {Object} CreateBillingCheckoutSessionOutput
 * @property {string} url - The url for the checkout session
 */

/**
 * The output after creating a billing portal session
 * @typedef {Object} CreateBillingPortalSessionOutput
 * @property {string} url - The url for the portal session
 */

/**
 * Creates a collection
 * @typedef {Object} CreateCollectionInput
 * @property {Array<AttributeInput>} [attrs] - Additional data defined on the collection
 * @property {string} [description] - A longer text description
 * @property {CollectionDiscriminator} discriminator - A label used to differentiate types of collections
 * @property {Array<CreateMediaContainerInput>} [media] - The list of MediaContainers to add to the new Collection
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [synopsis] - A short text summary
 * @property {Array<string>} [tags] - A series of strings applied to label the collection
 * @property {string} [title] - Title of the collection
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * The input to create a collection location
 * @typedef {Object} CreateCollectionLocationInput
 * @property {Array<AttributeInput>} [attrs] - Additional data defined on this CollectionLocation
 * @property {string} [description] - A longer description content for the new item
 * @property {string} [externalId] - Identifier from an external source this new item is associated with
 * @property {string} [externalSource] - The source of this item's externalId
 * @property {Array<CreateMediaContainerInput>} [media] - The list of MediaContainers to add to the new CollectionLocation
 * @property {PlaceInput} place - The associated place record for this location
 * @property {PositionInput} [position] - Override for the place's position
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {Array<string>} [sectionIds] - One or more sections for this new item
 * @property {string} [synopsis] - A short summary text content for the new item
 * @property {Array<string>} [tags] - A collection of strings used to label the new item
 * @property {string} [title] - Title for the new item
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * The fields available to return after creating a new collection location
 * @typedef {Object} CreateCollectionLocationPayload
 * @property {CollectionLocation} [location] - The created collection location
 */

/**
 * The return fields avaialble after creating a collection
 * @typedef {Object} CreateCollectionPayload
 * @property {Collection} [collection] - The newly created collection
 */

/**
 * Create a new ConnectedApp
 * @typedef {Object} CreateConnectedAppInput
 * @property {ConnectedAppAuthType} [authType] - The authenticated application method
 * @property {JSON} [privateConfiguration] - Encrypted JSON
 * @property {string} [publicId] - 3rd party ID or account ID
 * @property {string} [scope] - Any specific scope that has been granted to the 3rd party application
 * @property {ConnectedAppServiceKey} serviceKey - Identifies the service being connected to
 * @property {ConnectedAppType} [type] - The type of the connected-app
 */

/**
 * The return fields available after creating a connected app
 * @typedef {Object} CreateConnectedAppPayload
 * @property {ConnectedApp} [connectedApp] - The newly created connected-app
 */

/**
 * Create an IconComposition
 * @typedef {Object} CreateIconCompositionInput
 * @property {string} [iconFill] - Optional fill color for the icon
 * @property {string} name - A name for this IconComposition, should be unique across the itinerary
 * @property {string} resourceId - ID to the Icon used by this IconComposition
 * @property {string} [shieldFill] - Optional fill color for the shield
 * @property {string} [shieldKey] - Indicates which shield to use
 * @property {string} [shieldStroke] - Optional stroke color for the shield
 */

/**
 * Fields for a new IconSilhouette
 * @typedef {Object} CreateIconSilhouetteInput
 * @property {Array<AttributeInput>} [attrs] - Additional data defined on the icon
 * @property {string} name - The name of the icon, key will be generated from this value and so should be unique across the profile
 * @property {Array<string>} paths - SVG path data for this icon, eg: "M 100 .."
 * @property {string} [viewBox] - Optional SVG viewBox for this icon
 */

/**
 * The response after creating an IconSilhouette
 * @typedef {Object} CreateIconSilhouettePayload
 * @property {IconSilhouette} [icon] - The newly created IconSilhouette
 */

/**
 * Creates an itinerary item collection type
 * @typedef {Object} CreateItineraryCollectionInput
 * @property {Array<AttributeInput>} [attrs] - Additional data defined on the collection
 * @property {string} [description] - The description for the new itinerary-collection
 * @property {Array<CreateMediaContainerInput>} [media] - The list of MediaContainers to add to the new ItineraryCollection
 * @property {ItineraryItemPositionAfterSibling} [positionAfterSibling] - Create the item positioned after the given sibling
 * @property {ItineraryItemPositionAtEnd} [positionAtEnd] - Creates the item positioned after all its siblings
 * @property {ItineraryItemPositionAtStart} [positionAtStart] - Creates the item positioned before all its siblings
 * @property {ItineraryItemPositionBeforeSibling} [positionBeforeSibling] - Create the item positioned before the given sibling
 * @property {ItineraryItemPositionOnLastCollection} [positionOnLastCollection] - Create the item at last position of the last itinerary-collection item
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [synopsis] - The synopsis for the new itinerary-collection
 * @property {Array<string>} [tags] - The tags for the new itinerary-collection
 * @property {string} [title] - The title for the new itinerary-collection
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * The fields available after creating an itinerary collection
 * @typedef {Object} CreateItineraryCollectionPayload
 * @property {ItineraryItemCascadedChanges} cascaded - Other changes to the itinerary caused by the creation of the itinerary-collection
 * @property {ItineraryCollection} [collection] - The created itinerary collection
 * @property {Itinerary} itinerary - The modified itinerary
 */

/**
 * The input fields to creating new itinerary directions items
 * @typedef {Object} CreateItineraryDirectionsInput
 * @property {Array<AttributeInput>} [attrs] - Additional data on the new itinerary
 * @property {string} [description] - The description for the new itinerary-directions
 * @property {number} [distance] - The distance of the new itinerary-directions
 * @property {Array<ItineraryDirectionsDurationsInput>} [durations] - The duration details of the new itinerary-directions
 * @property {ElevationInput} [elevation] - The elevation details of the new itinerary-directions
 * @property {Array<CreateMediaContainerInput>} [media] - The list of MediaContainers to add to the new ItineraryDirections
 * @property {string} [originId] - The origin itinerary location item, in the form of item/XYZ
 * @property {ItineraryItemPositionAfterSibling} [positionAfterSibling] - Creates the itinerary-directions after the given sibling
 * @property {ItineraryItemPositionAtEnd} [positionAtEnd] - Creates the itinerary-directions to be after all its siblings
 * @property {ItineraryItemPositionAtStart} [positionAtStart] - Creates the itinerary-directions to be before all its siblings
 * @property {ItineraryItemPositionBeforeSibling} [positionBeforeSibling] - Creates the itinerary-directions before the given sibling
 * @property {ItineraryItemPositionOnLastCollection} [positionOnLastCollection] - Creates the itinerary-directions at the last position of the last itinerary-collection item
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {RouteInput} route - The route of this item, must include at least one route segment
 * @property {string} [synopsis] - The synopsis for the new itinerary-directions
 * @property {Array<string>} [tags] - The tags for the new itinerary-directions
 * @property {string} [title] - The title for the new itinerary-directions
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * The itinerary directions return fields available after creating the itinerary directions
 * @typedef {Object} CreateItineraryDirectionsPayload
 * @property {ItineraryItemCascadedChanges} cascaded - Other changes to the itinerary caused by the creation of the itinerary-directions
 * @property {ItineraryDirections} [directions] - The created itinerary directions item
 * @property {Itinerary} itinerary - The modified itinerary
 */

/**
 * Creates a itinerary
 * @typedef {Object} CreateItineraryInput
 * @property {Array<AttributeInput>} [attrs] - Additional data on the new itinerary
 * @property {ItineraryAutoRouteInput} [autoRoute] - Enable auto routing, or set to null to disable
 * @property {string} [defaultLocale] - The default locale of this itinerary's content
 * @property {string} [description] - The description for the new itinerary
 * @property {ElevationInput} [elevation] - Elevation data of the new itinerary
 * @property {Array<CreateIconCompositionInput>} [icons] - The list of IconCompositions to add to the new Itinerary
 * @property {Array<CreateMediaContainerInput>} [media] - The list of MediaContainers to add to the new Itinerary
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [synopsis] - The synopsis for the new itinerary
 * @property {Array<string>} [tags] - The tags for the new itinerary
 * @property {string} [title] - The title for the new itinerary
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * The fields to create an itinerary location
 * @typedef {Object} CreateItineraryLocationInput
 * @property {Array<AttributeInput>} [attrs] - Additional data defined on the collection
 * @property {BoundsInput} [bounds] - The bounds of the itinerary-location
 * @property {string} [description] - The description for the new itinerary-location
 * @property {string} [icon] - Set the optional icon, passed ID must exist in the Itinerary.icons
 * @property {Array<CreateMediaContainerInput>} [media] - The list of MediaContainers to add to the new ItineraryLocation
 * @property {boolean} [optional] - Whether this is an optional location on the itinerary
 * @property {PlaceInput} place - The place for this new itinerary-location
 * @property {PositionInput} [position] - The position of the itinerary-location
 * @property {ItineraryItemPositionAfterSibling} [positionAfterSibling] - Create the item positioned after the given sibling
 * @property {ItineraryItemPositionAtEnd} [positionAtEnd] - Creates the item positioned after all its siblings
 * @property {ItineraryItemPositionAtStart} [positionAtStart] - Creates the item positioned before all its siblings
 * @property {ItineraryItemPositionBeforeSibling} [positionBeforeSibling] - Create the item positioned before the given sibling
 * @property {ItineraryItemPositionOnLastCollection} [positionOnLastCollection] - Create the item at last position of the last itinerary-collection item
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [synopsis] - The synopsis for the new itinerary-location
 * @property {Array<string>} [tags] - The tags for the new itinerary-location
 * @property {string} [title] - The title for the new itinerary-location
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * The fields available after creating an itinerary location
 * @typedef {Object} CreateItineraryLocationPayload
 * @property {ItineraryItemCascadedChanges} cascaded - Other changes to the itinerary caused by the creation of the itinerary-location
 * @property {Itinerary} itinerary - The modified itinerary
 * @property {ItineraryLocation} [location] - The itinerary location that was created
 */

/**
 * The fields available after creating an itinerary
 * @typedef {Object} CreateItineraryPayload
 * @property {Itinerary} [itinerary] - The newly created itinerary
 */

/**
 * Create a MediaContainer in a MediaContainer list
 * @typedef {Object} CreateMediaContainerInput
 * @property {MediaContainerPositionAfter} [positionAfter] - Add the MediaContainer after another container in the list
 * @property {MediaContainerPositionAtEnd} [positionAtEnd] - Add the MediaContainer at the end of the list
 * @property {MediaContainerPositionAtStart} [positionAtStart] - Add the MediaContainer at the start of the list
 * @property {MediaContainerPositionBefore} [positionBefore] - Add the MediaContainer before another container in the list
 * @property {string} resourceId - ID to a MediaResource to contain
 */

/**
 * Input object to Mutation.createProfile
 * @typedef {Object} CreateProfileInput
 * @property {Array<AttributeInput>} [attrs] - Additional data defined on the profile
 * @property {boolean} [autoApproveFollows] - If follow requests should be automatically approved for this profile
 * @property {MediaContainerInput} [avatar] - The avatar image
 * @property {string} [bio] - A short biography
 * @property {string} name - The name of the profile
 * @property {ProfileType} type - The type of profile
 * @property {string} [websiteUrl] - The website url
 */

/**
 * Response payload to Mutation.createProfile
 * @typedef {Object} CreateProfilePayload
 * @property {Profile} [profile] - The newly created profile
 */

/**
 * Input object to Mutation.createUserAgreement
 * @typedef {Object} CreateUserAgreementInput
 * @property {string} type - The type of agreement
 */

/**
 * The return fields available after creating a user agreement
 * @typedef {Object} CreateUserAgreementPayload
 * @property {UserAgreement} [userAgreement] - The newly created user agreement
 */

/**
 * An offset in date and/or time represented as integer differences for each datetime field
 * @typedef {Object} DatetimeOffset
 * @property {number} [days] - Positive or negative difference for days
 * @property {number} [hours] - Positive or negative difference for hours
 * @property {number} [minutes] - Positive or negative difference for minutes
 * @property {number} [months] - Positive or negative difference for months
 * @property {number} [seconds] - Positive or negative difference for seconds
 * @property {number} [weeks] - Positive or negative difference for weeks
 * @property {number} [years] - Positive or negative difference for years
 */

/**
 * The fields available after deleting a collection
 * @typedef {Object} DeleteCollectionItemPayload
 * @property {string} [id] - The ID of the collection, in the form of collection/XYZ
 */

/**
 * The available payload after performing a delete collection
 * @typedef {Object} DeleteCollectionPayload
 * @property {string} [id] - The ID of the deleted collection
 */

/**
 * The available payload after performing a delete connected app
 * @typedef {Object} DeleteConnectedAppPayload
 * @property {string} [id] - The ID of the deleted connected app
 */

/**
 * The response after deleting an icon
 * @typedef {Object} DeleteIconResourcePayload
 * @property {string} [id] - The ID of the deleted icon
 */

/**
 * Deletes a itinerary item
 * @typedef {Object} DeleteItineraryItemPayload
 * @property {ItineraryItemCascadedChanges} cascaded - Other changes to the itinerary that caused by deleting the itinerary-item
 * @property {string} [id] - The itinerary item identifier, in the form of item/XYZ
 * @property {Itinerary} itinerary - The modified itinerary
 */

/**
 * The result of deleting an itinerary
 * @typedef {Object} DeleteItineraryPayload
 * @property {string} [id] - The ID of the deleted itinerary
 */

/**
 * The result of deleting a profile
 * @typedef {Object} DeleteProfilePayload
 * @property {string} [id] - The ID of the profile itinerary
 */

/**
 * Result of denying a follow request
 * @typedef {Object} DenyProfileFollowPayload
 * @property {Profile} fromProfile - The follower profile
 * @property {ProfileFollowStatus} [status] - The status of the follow request
 * @property {Profile} toProfile - The profile being followed
 */

/**
 * Distance unit
 * @typedef {("Feet"|"Kilometers"|"Meters"|"Miles")} DistanceUnit
 */

/**
 * Response to Mutation.duplicateItinerary
 * @typedef {Object} DuplicateItineraryPayload
 * @property {Itinerary} [itinerary] - The newly duplicated itinerary
 */

/**
 * Duration unit
 * @typedef {("Hours"|"Minutes"|"Seconds")} DurationUnit
 */

/**
 * Elevation data
 * @typedef {Object} Elevation
 * @property {number} [gain] - The cumulative elevation gain
 * @property {number} [loss] - The cumulative elevation loss
 * @property {number} [max] - The maximum elevation
 * @property {number} [min] - The minimum elevation
 */

/**
 * Input elevation data
 * @typedef {Object} ElevationInput
 * @property {number} [gain] - The cumulative elevation gain
 * @property {number} [loss] - The cumulative elevation loss
 * @property {number} [max] - The maximum elevation
 * @property {number} [min] - The minimum elevation
 */

/**
 * Uploads a media resource
 * @typedef {Object} FinalizeMediaUploadInput
 * @property {string} [attribution] - Text attribution for the source of the new media-resource
 * @property {Array<AttributeInput>} [attrs] - Additional data to define on the new media-resource
 * @property {string} [caption] - Text caption for the new media-resource
 * @property {string} [copyright] - Copyright details of the new media-resource
 * @property {Array<string>} [tags] - List of labels to apply to the new media-resource
 */

/**
 * Result of finalizing a media upload
 * @typedef {Object} FinalizeMediaUploadPayload
 * @property {MediaResource} [resource] - The newly created media-resource
 * @property {MediaUploadStatus} status - The status of this media upload
 */

/**
 * Result of creating a follow request
 * @typedef {Object} FollowProfilePayload
 * @property {Profile} fromProfile - The follower profile
 * @property {ProfileFollowStatus} [status] - The status of the follow request
 * @property {Profile} toProfile - The profile being followed
 */

/**
 * Different GeoJSON simplification algorithms
 * @typedef {Object} GeoJsonSimplification
 * @property {GeoJsonSimplificationRamerDouglasPeucker} ramerDouglasPeucker - The Ramer-Douglas-Peucker algorithm
 */

/**
 * The Ramer-Douglas-Peucker algorithm
 * @typedef {Object} GeoJsonSimplificationRamerDouglasPeucker
 * @property {boolean} [highQuality] - Modify the algorithm to be slower by produce higher quality results
 * @property {number} [tolerance] - The amount of application applied, higher values result in more simplification
 */

/**
 * An icon with styles for use in an Itinerary
 * @typedef {Object} IconComposition
 * @property {string} created - The date when the IconComposition was created
 * @property {string} [iconFill] - Optional fill color for the icon
 * @property {string} id - The Globally Unique ID of the object.
 * @property {string} key - A key for this IconComposition. Derived from the name
 * @property {string} modified - The date when the IconComposition was last modified
 * @property {string} name - A name for this IconComposition, should be unique across the itinerary
 * @property {IconResourceEmbedded} resource - The Icon used by this IconComposition
 * @property {string} [shieldFill] - Optional fill color for the shield
 * @property {string} [shieldKey] - Indicates which shield to use
 * @property {string} [shieldStroke] - Optional stroke color for the shield
 */

/**
 * Connection of IconCompositions
 * @typedef {Object} IconCompositionConnection
 * @property {Array<IconCompositionEdge>} edges - All the edges in this page of the connection
 * @property {Array<IconComposition>} nodes - Shortcut for edges[].node
 * @property {PageInfo} pageInfo - Details regarding the current page of the connnection
 * @property {number} totalCount - The total number of items in the connection (in all pages)
 */

/**
 * Edge containing a IconComposition
 * @typedef {Object} IconCompositionEdge
 * @property {string} cursor - The cursor string pointing to this item
 * @property {IconComposition} node - The item
 */

/**
 * An icon for use in the UI or Map
 * @typedef {Object} IconResource
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {AttributeConnection} attrs - Query multiple attributes optionally filtering by id and/or locale
 * @property {string} [created] - The date when the icon was created
 * @property {string} id - The Globally Unique ID of the object.
 * @property {string} key - The key of the icon, unique across the profile
 * @property {string} [modified] - The date when the icon was last modified
 * @property {string} name - The supplied name for this icon
 * @property {Profile} profile - The profile associated with this icon
 */

/**
 * Connection of IconResources
 * @typedef {Object} IconResourceConnection
 * @property {Array<IconResourceEdge>} edges - All the edges in this page of the connection
 * @property {Array<IconResource>} nodes - Shortcut for edges[].node
 * @property {PageInfo} pageInfo - Details regarding the current page of the connnection
 * @property {number} totalCount - The total number of items in the connection (in all pages)
 */

/**
 * Edge containing a IconResource
 * @typedef {Object} IconResourceEdge
 * @property {string} cursor - The cursor string pointing to this item
 * @property {IconResource} node - The item
 */

/**
 * A IconResource embedded in another resource
 * @typedef {(IconResourceFailedToLoad|IconSilhouette)} IconResourceEmbedded
 */

/**
 * Represents an embedded IconResource that failed to load
 * @typedef {Object} IconResourceFailedToLoad
 * @property {string} id - The Globally Unique ID of the object.
 */

/**
 * SVG path based IconResource
 * @typedef {Object} IconSilhouette
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {AttributeConnection} attrs - Query multiple attributes optionally filtering by id and/or locale
 * @property {string} [created] - The date when the icon was created
 * @property {string} id - The Globally Unique ID of the object.
 * @property {string} key - The key of the icon, unique across the profile
 * @property {string} [modified] - The date when the icon was last modified
 * @property {string} name - The supplied name for this icon
 * @property {Array<string>} paths - SVG path data for this icon, eg: "M 100 .."
 * @property {Profile} profile - The profile associated with this icon
 * @property {string} [viewBox] - Optional SVG viewBox for this icon
 */

/**
 * Isochrone for the given position with duration and vehicle
 * @typedef {Object} Isochrone
 * @property {Bounds} bounds - A bounding box around the isochrone
 * @property {Array<string>} copyrights - Copyright details of the isochrone
 * @property {number} [duration] - The duration of the isochrone
 * @property {IsochroneMode} mode - The mode of transport of the isochrone
 * @property {JSON} polygon - The isochrone as a geojson polygon
 */

/**
 * Mode of transport for an isochrone
 * @typedef {("Bike"|"Car"|"Foot")} IsochroneMode
 */

/**
 * Determine how to sort Itineraries when listing
 * @typedef {Object} ItinerariesSort
 * @property {SortDirection} [created] - Sort by the created date
 * @property {SortDirection} [modified] - Sort by the modified date
 * @property {SortDirection} [title] - Sort by the itinerary title
 */

/**
 * An itinerary type is used to structure a series of items representing a travel itinerary
 * @typedef {Object} Itinerary
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {AttributeConnection} attrs - Query multiple attributes optionally filtering by id and/or locale
 * @property {ItineraryAutoRoute} [autoRoute] - If true, itinerary-directions will be created to automatically route between itinerary-locations
 * @property {Bounds} [bounds] - Bounds for the itinerary item
 * @property {ItineraryItemConnection} children - The immediate associated children itinerary items
 * @property {string} [created] - The date when the itinerary was created
 * @property {string} [defaultLocale] - The default locale of this itinerary's content
 * @property {ItineraryItemConnection} descendants - The descending items within this itinerary item
 * @property {string} [description] - A longer text description
 * @property {Elevation} elevation - Elevation data of the itinerary
 * @property {IconCompositionConnection} icons - Icons that are used in this itinerary
 * @property {string} id - The Globally Unique ID of the object.
 * @property {ItineraryItem} [item] - Returns a single item from this itinerary by id
 * @property {string} [lastDraft] - The date when the draft version was last modified
 * @property {string} [lastPublished] - The date when the itinerary was last published
 * @property {Array<MediaContainer>} media - List of MediaContainers containing images or other media - DEPRECATED: use mediaContainers instead
 * @property {MediaContainerConnection} mediaContainers - List of MediaContainers containing images or other media
 * @property {string} [modified] - The date when the itinerary was last modified
 * @property {MediaContainer} [preferredMedia] - The preferred MediaContainer to use
 * @property {Profile} [profile] - Profile that owns this itinerary
 * @property {string} [published] - The date when this itinerary was last published. Will be null on draft versions
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [synopsis] - A short text summary
 * @property {Array<string>} tags - A series of strings applied to label this item
 * @property {string} [title] - The supplied title
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * Automatically generate ItineraryDirections that connect sibling ItineraryLocations
 * @typedef {Object} ItineraryAutoRoute
 * @property {RouteMode} defaultMode - The default mode of transport to use for the generated ItineraryDirections
 */

/**
 * Automatically generate ItineraryDirections that connect sibling ItineraryLocations
 * @typedef {Object} ItineraryAutoRouteInput
 * @property {RouteMode} [defaultMode] - The default mode of transport to use for the generated ItineraryDirections, if excluded defaults to Car
 */

/**
 * An itinerary item representing a collection of other itinerary items
 * @typedef {Object} ItineraryCollection
 * @property {ItineraryItem} [after] - The sibling item that comes after this item
 * @property {ItineraryItemConnection} ancestors - All ancestors of the itinerary-item
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {AttributeConnection} attrs - Query multiple attributes optionally filtering by id and/or locale
 * @property {ItineraryItem} [before] - The sibling item that comes before this item
 * @property {Bounds} [bounds] - Bounds for the itinerary item
 * @property {ItineraryItemConnection} children - All the direct children of the itinerary-item
 * @property {ItineraryItemConnection} descendants - All the descendants of the itinerary-item in depth-first-search order
 * @property {string} [description] - A longer text description
 * @property {string} id - Unique identifier for the itinerary-item
 * @property {Itinerary} itinerary - The itinerary this item belongs to
 * @property {Array<MediaContainer>} media - List of MediaContainers containing images or other media - DEPRECATED: use mediaContainers instead
 * @property {MediaContainerConnection} mediaContainers - List of MediaContainers containing images or other media
 * @property {ItineraryItem} [parent] - The parent item of this item
 * @property {MediaContainer} [preferredMedia] - The preferred MediaContainer to use
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {number} [siblingPositionNumber] - A number corresponding to the item's position compared to it's siblings.
 * @property {string} [synopsis] - A short text summary
 * @property {Array<string>} tags - A series of strings applied to label this item
 * @property {string} [title] - The supplied title
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes.
 * @typedef {Object} ItineraryDirections
 * @property {ItineraryItem} [after] - The sibling item that comes after this item
 * @property {ItineraryItemConnection} ancestors - All ancestors of the itinerary-item
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {AttributeConnection} attrs - Query multiple attributes optionally filtering by id and/or locale
 * @property {ItineraryItem} [before] - The sibling item that comes before this item
 * @property {Bounds} [bounds] - Bounds for the itinerary-directions and it's descendants
 * @property {ItineraryItemConnection} children - All the direct children of the itinerary-item
 * @property {ItineraryItemConnection} descendants - All the descendants of the itinerary-item in depth-first-search order
 * @property {string} [description] - A longer text description
 * @property {ItineraryLocation} [destination] - The itinerary-location that is the ending point of the directions
 * @property {number} [distance] - The estimated distance of this itinerary-directions
 * @property {number} [durationMax] - The maximum duration of this itinerary-directions
 * @property {number} [durationMin] - The minimum duration of this itinerary-directions
 * @property {Array<ItineraryDirectionsDurations>} durations - The duration of this itinerary-directions
 * @property {Elevation} elevation - The elevation details of this itinerary-directions
 * @property {string} id - Unique identifier for the itinerary-item
 * @property {Itinerary} itinerary - The itinerary this item belongs to
 * @property {Array<MediaContainer>} media - List of MediaContainers containing images or other media - DEPRECATED: use mediaContainers instead
 * @property {MediaContainerConnection} mediaContainers - List of MediaContainers containing images or other media
 * @property {ItineraryLocation} [origin] - The itinerary-location that is the starting point of the directions
 * @property {ItineraryItem} [parent] - The parent item of this item
 * @property {MediaContainer} [preferredMedia] - The preferred MediaContainer to use
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {Route} route - The route details of this directions item
 * @property {number} [siblingPositionNumber] - A number corresponding to the item's position compared to it's siblings.
 * @property {string} [synopsis] - A short text summary
 * @property {Array<string>} tags - A series of strings applied to label this item
 * @property {string} [title] - The supplied title
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * The method to determine if an ItineraryDirections is related to an ItineraryLocation
 * @typedef {("Location"|"Place")} ItineraryDirectionsAccuracy
 */

/**
 * Connection of ItineraryDirectionss
 * @typedef {Object} ItineraryDirectionsConnection
 * @property {Array<ItineraryDirectionsEdge>} edges - All the edges in this page of the connection
 * @property {Array<ItineraryDirections>} nodes - Shortcut for edges[].node
 * @property {PageInfo} pageInfo - Details regarding the current page of the connnection
 * @property {number} totalCount - The total number of items in the connection (in all pages)
 */

/**
 * Whether or not an ItineraryDirections is inbound or outbound relative to an ItineraryLocation
 * @typedef {("Inbound"|"Outbound")} ItineraryDirectionsDirection
 */

/**
 * An itinerary-directions duration value
 * @typedef {Object} ItineraryDirectionsDurations
 * @property {number} duration - The duration value
 * @property {string} id - Unique identifier for this duration
 * @property {string} [label] - Label for the duration
 */

/**
 * Input an ItineraryDirections duration value
 * @typedef {Object} ItineraryDirectionsDurationsInput
 * @property {number} duration - The duration value
 * @property {string} [label] - Label for the duration
 */

/**
 * Edge containing a ItineraryDirections
 * @typedef {Object} ItineraryDirectionsEdge
 * @property {string} cursor - The cursor string pointing to this item
 * @property {ItineraryDirectionsDirection} direction - Whether this itinerary-directions is inbound or outbound from the itinerary-location
 * @property {ItineraryDirections} node - The item
 */

/**
 * Restricts search for directions to a portion of an Itinerary
 * @typedef {("ParentDescendants")} ItineraryDirectionsRestrict
 */

/**
 * An item in an itinerary as part of the tree
 * @typedef {Object} ItineraryItem
 * @property {ItineraryItem} [after] - The sibling item that comes after this item
 * @property {ItineraryItemConnection} ancestors - All ancestors of the itinerary-item
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {AttributeConnection} attrs - Query multiple attributes optionally filtering by id and/or locale
 * @property {ItineraryItem} [before] - The sibling item that comes before this item
 * @property {Bounds} [bounds] - Bounds for the itinerary item
 * @property {ItineraryItemConnection} children - All the direct children of the itinerary-item
 * @property {ItineraryItemConnection} descendants - All the descendants of the itinerary-item in depth-first-search order
 * @property {string} [description] - A longer text description
 * @property {string} id - Unique identifier for the itinerary-item
 * @property {Itinerary} itinerary - The itinerary this item belongs to
 * @property {Array<MediaContainer>} media - List of MediaContainers containing images or other media - DEPRECATED: use mediaContainers instead
 * @property {MediaContainerConnection} mediaContainers - List of MediaContainers containing images or other media
 * @property {ItineraryItem} [parent] - The parent item of this item
 * @property {MediaContainer} [preferredMedia] - The preferred MediaContainer to use
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {number} [siblingPositionNumber] - A number corresponding to the item's position compared to it's siblings.
 * @property {string} [synopsis] - A short text summary
 * @property {Array<string>} tags - A series of strings applied to label this item
 * @property {string} [title] - The supplied title
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * Changes to an itinerary caused by a mutation
 * @typedef {Object} ItineraryItemCascadedChanges
 * @property {Array<ItineraryItem>} created - Itinerary-items that were created due to the mutation
 * @property {Array<string>} deletedIds - Itinerary-items that were deleted due to the mutation
 * @property {Array<ItineraryItem>} updated - Itinerary-items that were updated due to the mutation
 */

/**
 * Connection of ItineraryItems
 * @typedef {Object} ItineraryItemConnection
 * @property {Array<ItineraryItemEdge>} edges - All the edges in this page of the connection
 * @property {Array<ItineraryItem>} nodes - Shortcut for edges[].node
 * @property {PageInfo} pageInfo - Details regarding the current page of the connnection
 * @property {number} totalCount - The total number of items in the connection (in all pages)
 */

/**
 * Edge containing a ItineraryItem
 * @typedef {Object} ItineraryItemEdge
 * @property {string} cursor - The cursor string pointing to this item
 * @property {ItineraryDirectionsConnection} directions - List itinerary-directions connecting this node to other nodes in the connection
 * @property {number} [edgePositionNumber] - A number corresponding to the item's position in the connection.
 * @property {ItineraryItem} node - The item
 */

/**
 * Positions the item after a sibling
 * @typedef {Object} ItineraryItemPositionAfterSibling
 * @property {string} [siblingId] - The sibling itinerary item identifier, in the form of item/XYZ
 */

/**
 * Positions the item at the end position of its siblings
 * @typedef {Object} ItineraryItemPositionAtEnd
 * @property {string} [parentId] - The parent itinerary item identifier, in the form of item/XYZ
 */

/**
 * Positions the item at the start position of its siblings
 * @typedef {Object} ItineraryItemPositionAtStart
 * @property {string} [parentId] - The parent itinerary item identifier, in the form of item/XYZ
 */

/**
 * Positions the item before a sibling
 * @typedef {Object} ItineraryItemPositionBeforeSibling
 * @property {string} [siblingId] - The sibling itinerary item identifier, in the form of item/XYZ
 */

/**
 * Positions the itinerary item to the last position of the last itinerary collection item
 * @typedef {Object} ItineraryItemPositionOnLastCollection
 * @property {string} [searchUnder] - The itinerary item identifier to limit descendent searching withing
 */

/**
 * Possible types of ItineraryItem
 * @typedef {("ItineraryCollection"|"ItineraryDirections"|"ItineraryLocation")} ItineraryItemType
 */

/**
 * An itinerary item representing a location with an associated place in the itinerary
 * @typedef {Object} ItineraryLocation
 * @property {PlaceAddress} address - Address information for the itinerary location
 * @property {ItineraryItem} [after] - The sibling item that comes after this item
 * @property {ItineraryItemConnection} ancestors - All ancestors of the itinerary-item
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {AttributeConnection} attrs - Query multiple attributes optionally filtering by id and/or locale
 * @property {ItineraryItem} [before] - The sibling item that comes before this item
 * @property {Bounds} [bounds] - Bounds for the itinerary-location and it's descendants
 * @property {ItineraryItemConnection} children - All the direct children of the itinerary-item
 * @property {PlaceContact} contact - Contact information for the itinerary location
 * @property {ItineraryItemConnection} descendants - All the descendants of the itinerary-item in depth-first-search order
 * @property {string} [description] - A longer text description
 * @property {ItineraryDirectionsConnection} directions - Retrieves itinerary-directions associated with this itinerary-location
 * @property {IconComposition} [icon] - The IconComposition used by the this ItineraryLocation
 * @property {string} id - Unique identifier for the itinerary-item
 * @property {Itinerary} itinerary - The itinerary this item belongs to
 * @property {Array<MediaContainer>} media - List of MediaContainers containing images or other media - DEPRECATED: use mediaContainers instead
 * @property {MediaContainerConnection} mediaContainers - List of MediaContainers containing images or other media
 * @property {boolean} optional - Whether the location is an optional stop
 * @property {ItineraryItem} [parent] - The parent item of this item
 * @property {Place} place - The place details of this location
 * @property {Position} position - The position of the collection-location (derived from place if not overridden)
 * @property {MediaContainer} [preferredMedia] - The preferred MediaContainer to use
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {number} [siblingPositionNumber] - A number corresponding to the item's position compared to it's siblings.
 * @property {string} [synopsis] - A short text summary
 * @property {Array<string>} tags - A series of strings applied to label this item
 * @property {string} [title] - The supplied title
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * Connection of ItinerarySearchs
 * @typedef {Object} ItinerarySearchConnection
 * @property {Array<ItinerarySearchEdge>} edges - All the edges in this page of the connection
 * @property {Array<ItinerarySearchNode>} nodes - Shortcut for edges[].node
 * @property {PageInfo} pageInfo - Details regarding the current page of the connnection
 * @property {number} totalCount - The total number of items in the connection (in all pages)
 */

/**
 * Edge containing a ItinerarySearch
 * @typedef {Object} ItinerarySearchEdge
 * @property {string} cursor - The cursor string pointing to this item
 * @property {ItinerarySearchNode} node - The item
 */

/**
 * A result from an itinerary search
 * @typedef {Object} ItinerarySearchNode
 * @property {Bounds} [bounds] - Bounds for the itinerary item
 * @property {string} [created] - The date when the itinerary was created
 * @property {string} [defaultLocale] - The default locale of this itinerary's content
 * @property {string} [description] - A longer text description
 * @property {string} [externalId] - Identifier from an external source this itinerary is associated with
 * @property {string} [externalSource] - The source of this itinerary's externalId
 * @property {Array<string>} [genres] - The genres of this Itinerary
 * @property {string} id - The Globally Unique ID of the itinerary.
 * @property {Itinerary} itinerary - The full itinerary
 * @property {string} [lastDraft] - The date when the draft version was last modified
 * @property {string} [lastPublished] - The date when the itinerary was last published
 * @property {boolean} [listed] - Whether this itinerary is publically listed
 * @property {string} [modified] - The date when the itinerary was last modified
 * @property {MediaContainer} [preferredMedia] - The preferred MediaContainer to use
 * @property {Profile} [profile] - Profile that owns this itinerary
 * @property {string} [published] - The date when this itinerary was last published. Will be null on draft versions
 * @property {string} [synopsis] - A short text summary
 * @property {Array<string>} tags - A series of strings applied to label this item
 * @property {string} [title] - The supplied title
 * @property {number} totalLocations - Total number of ItineraryLocations inside this Itinerary
 * @property {string} [type] - The type of itinerary
 */

/**
 * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
 * @typedef {*} JSON
 */

/**
 * A container for a MediaResource
 * @typedef {Object} MediaContainer
 * @property {string} id - Unique identifier for this container
 * @property {MediaResourceEmbedded} resource - The MediaResource inside this container
 */

/**
 * Connection of MediaContainers
 * @typedef {Object} MediaContainerConnection
 * @property {Array<MediaContainerEdge>} edges - All the edges in this page of the connection
 * @property {Array<MediaContainer>} nodes - Shortcut for edges[].node
 * @property {PageInfo} pageInfo - Details regarding the current page of the connnection
 * @property {number} totalCount - The total number of items in the connection (in all pages)
 */

/**
 * Edge containing a MediaContainer
 * @typedef {Object} MediaContainerEdge
 * @property {string} cursor - The cursor string pointing to this item
 * @property {MediaContainer} node - The item
 */

/**
 * Set a singular MediaContainer
 * @typedef {Object} MediaContainerInput
 * @property {string} resourceId - ID to a MediaResource to contain
 */

/**
 * Positions the MediaContainer after a sibling MediaContainer
 * @typedef {Object} MediaContainerPositionAfter
 * @property {string} [id] - The sibling MediaContainer identifier, if null it means the top of the list (ie. before the first sibling)
 */

/**
 * Positions the MediaContainer at the end of the list
 * @typedef {Object} MediaContainerPositionAtEnd
 * @property {number} [_] - Ignored, required by GraphQL which does not allow empty input objects
 */

/**
 * Positions the MediaContainer at the start of the list
 * @typedef {Object} MediaContainerPositionAtStart
 * @property {number} [_] - Ignored, required by GraphQL which does not allow empty input objects
 */

/**
 * Positions the MediaContainer before a sibling MediaContainer
 * @typedef {Object} MediaContainerPositionBefore
 * @property {string} [id] - The sibling MediaContainer identifier, if null it means the bottom of the list (ie. after the last sibling)
 */

/**
 * A MediaResource representing an image
 * @typedef {Object} MediaImage
 * @property {string} [altText] - Alternative text for the media-resource
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {string} [attribution] - Text attribution for the source of the media-resource
 * @property {AttributeConnection} attrs - Query multiple attributes optionally filtering by id and/or locale
 * @property {string} [caption] - Text caption for the media-resource
 * @property {string} [copyright] - Copyright details of the media-resource
 * @property {MediaImageExif} [exif] - Look up one exif value in this media-image by id
 * @property {Array<string>} exifIds - Ids of all exif data in this media-image
 * @property {boolean} hasContent - Will be true if the resource has a caption, attribution or copyright
 * @property {string} [id] - Unique identifier for the media-resource
 * @property {Array<number>} [originalSize] - The original width and height of the image
 * @property {Profile} [profile] - The associated profile owner
 * @property {string} provider - The provider for the media
 * @property {MediaImageSource} [source] - Provides a specific source for the media, based often on different encoding or different sizing
 * @property {Array<MediaImageSource>} sources - A collection of sources for the media
 * @property {Array<string>} tags - A series of strings representing applied labels to the media
 * @property {string} [url] - Provides the URL of the media
 */

/**
 * One exif datum on a media-image
 * @typedef {Object} MediaImageExif
 * @property {string} id - Unique identifier of this exif datum
 * @property {JSON} value - The exif value
 */

/**
 * An source for a media image
 * @typedef {Object} MediaImageSource
 * @property {number} [height] - The height of the media
 * @property {string} [id] - A optional identifier for the source
 * @property {string} type - The content-type of the media source
 * @property {string} url - The URL to the media source
 * @property {number} [width] - The width of the media
 */

/**
 * Representing media such as images/photos as well as other types such as video or audio
 * @typedef {Object} MediaResource
 * @property {string} [altText] - Alternative text for the media-resource
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {string} [attribution] - Text attribution for the source of the media-resource
 * @property {AttributeConnection} attrs - Query multiple attributes optionally filtering by id and/or locale
 * @property {string} [caption] - Text caption for the media-resource
 * @property {string} [copyright] - Copyright details of the media-resource
 * @property {boolean} hasContent - Will be true if the resource has a caption, attribution or copyright
 * @property {string} [id] - Unique identifier for the media-resource
 * @property {Profile} [profile] - The associated profile owner
 * @property {string} provider - The provider for the media
 * @property {Array<string>} tags - A series of strings representing applied labels to the media
 */

/**
 * A MediaResource embedded in another resource
 * @typedef {(MediaImage|MediaResourceFailedToLoad)} MediaResourceEmbedded
 */

/**
 * Represents an embedded MediaResource that failed to load
 * @typedef {Object} MediaResourceFailedToLoad
 * @property {string} id - The Globally Unique ID of the object.
 */

/**
 * The status of a Media upload process
 * @typedef {("AwaitingUpload"|"Complete"|"Processing"|"ProcessingFailed")} MediaUploadStatus
 */

/**
 * Moves the itinerary item
 * @typedef {Object} MoveItineraryItemPayload
 * @property {ItineraryItemCascadedChanges} cascaded - Other changes to the itinerary that caused by moving the itinerary-item
 * @property {ItineraryItem} [item] - The fields for the item
 * @property {Itinerary} itinerary - The modified itinerary
 */

/**
 * Move a MediaContainer within a list, exactly one of the position arguments is required.
 * @typedef {Object} MoveMediaContainerInput
 * @property {string} id - ID to the Container to update
 * @property {MediaContainerPositionAfter} [positionAfter] - Move the MediaContainer after another container in the list
 * @property {MediaContainerPositionAtEnd} [positionAtEnd] - Move the MediaContainer at the end of the list
 * @property {MediaContainerPositionAtStart} [positionAtStart] - Move the MediaContainer at the start of the list
 * @property {MediaContainerPositionBefore} [positionBefore] - Move the MediaContainer before another container in the list
 */

/**
 * @typedef {Object} Mutation
 * @property {ApproveProfileFollowPayload} approveProfileFollow - Approve a follow request between two profiles
 * @property {CaptureMarketingInformationPayload} captureMarketingInformation - Capture marketing information against the given profile
 * @property {DuplicateItineraryPayload} changeItineraryDefaultLocale - Change the itinerary's default-locale as well the locale of attributes with the previous default-locale
 * @property {ClaimProfileHandlePayload} claimProfileHandle - Claim an unclaimed handle for the given profile
 * @property {CreateBillingCheckoutSessionOutput} createBillingCheckoutSession - Create a billing checkout session
 * @property {CreateBillingPortalSessionOutput} createBillingPortalSession - Create a billing portal session
 * @property {CreateCollectionPayload} createCollection - The return fields available after creating a collection
 * @property {CreateCollectionLocationPayload} createCollectionLocation - Create a new collection-location under the given collection
 * @property {CreateConnectedAppPayload} createConnectedApp - The return fields available after creating a connected app
 * @property {CreateIconSilhouettePayload} createIconSilhouette - Creates a new icon
 * @property {CreateItineraryPayload} createItinerary - Create a new itinerary
 * @property {CreateItineraryCollectionPayload} createItineraryCollection - Create a new ItineraryCollection item inside the given itinerary
 * @property {CreateItineraryDirectionsPayload} createItineraryDirections - Create a new ItineraryDirections item inside the given itinerary
 * @property {CreateItineraryLocationPayload} createItineraryLocation - Create a new ItineraryLocation item inside the given itinerary
 * @property {CreateProfilePayload} createProfile - Creates a new profile with the given fields. Can only be called with a bearer token.
 * @property {CreateUserAgreementPayload} createUserAgreement - The return fields available after creating a user agreement
 * @property {DeleteCollectionPayload} deleteCollection - Delete an collection
 * @property {DeleteCollectionItemPayload} deleteCollectionItem - The fields available after the collection is deleted
 * @property {DeleteConnectedAppPayload} deleteConnectedApp - Deleted a connected app
 * @property {DeleteIconResourcePayload} deleteIconResource - Delete an icon
 * @property {DeleteItineraryPayload} deleteItinerary - Delete an itinerary
 * @property {DeleteItineraryItemPayload} deleteItineraryItem - Delete an ItineraryItem
 * @property {DeleteProfilePayload} deleteProfile - Delete a profile
 * @property {DenyProfileFollowPayload} denyProfileFollow - Deny a follow request between two profiles
 * @property {DuplicateItineraryPayload} duplicateItinerary - Duplicate an itinerary, creating copy with a new id
 * @property {FinalizeMediaUploadPayload} finalizeMediaUpload - Finalize the media upload by creating a media-resource
 * @property {FollowProfilePayload} followProfile - Create a follow request between two profiles
 * @property {MoveItineraryItemPayload} moveItineraryItem - Move an ItineraryItem
 * @property {PublishItineraryPayload} publishItinerary - Publish an itinerary making it publically accessible
 * @property {PublishItineraryPayload} revertItinerary - Revert the draft version of an itinerary to last published version
 * @property {StartMediaUploadPayload} startMediaUpload - Start a media upload
 * @property {UnfollowProfilePayload} unfollowProfile - Remove the follow between two profiles
 * @property {UpdateBillingDetailsOutput} updateBillingDetails - Update the billing details associated with a profile
 * @property {UpdateCollectionPayload} updateCollection - Updates a collection
 * @property {UpdateCollectionLocationPayload} updateCollectionLocation - The fields avaialble after updating the collection location
 * @property {UpdateConnectedAppPayload} updateConnectedApp - Update a connected app
 * @property {UpdateIconSilhouettePayload} updateIconSilhouette - Updates a icon
 * @property {UpdateItineraryPayload} updateItinerary - Updates a itinerary
 * @property {UpdateItineraryCollectionPayload} updateItineraryCollection - Update an ItineraryCollection
 * @property {UpdateItineraryDirectionsPayload} updateItineraryDirections - Update an ItineraryDirections
 * @property {UpdateItineraryLocationPayload} updateItineraryLocation - Update an ItineraryLocation
 * @property {UpdateMediaResourcePayload} updateMediaResource - Update a media resource with updated properties
 * @property {UpdateProfilePayload} updateProfile - Updates the specified profile with the given fields
 */

/**
 * An object with a Globally Unique ID
 * @typedef {Object} Node
 * @property {string} id - The Globally Unique ID of the object.
 */

/**
 * Details regarding a page in a connnection
 * @typedef {Object} PageInfo
 * @property {string} [endCursor] - The cursor of the last edge in this page
 * @property {boolean} hasNextPage - True if there is a page after this one
 * @property {boolean} hasPreviousPage - True if there is a page before this one
 * @property {string} [startCursor] - The cursor of the first edge in this page
 */

/**
 * A defined location in the world
 * @typedef {Object} Place
 * @property {PlaceAddress} address - The address of the place
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {Array<PlaceAttribution>} attribution - The required attribution required when using this place information
 * @property {AttributeConnection} attrs - Query multiple attributes optionally filtering by id and/or locale
 * @property {Bounds} [bounds] - The bounding box around the place
 * @property {PlaceContact} contact - Contact information supplied for this place
 * @property {string} [contributor] - Source of the place data
 * @property {string} [description] - A longer description
 * @property {PlaceHours} [hours] - The operating hours for this place, as encoded in OpenStreetMap hours specification
 * @property {string} id - The Globally Unique ID of the object.
 * @property {Array<PlaceLayer>} layers - Layers associated to this place
 * @property {string} [maki] - The maki icon for this place
 * @property {Array<MediaContainer>} media - List of MediaContainers supplied with the place information, such as images of the places - DEPRECATED: use mediaContainers instead
 * @property {MediaContainerConnection} mediaContainers - List of MediaContainers supplied with the place information, such as images of the places
 * @property {string} [name] - The name of the place
 * @property {string} navigationUrl - A url displaying how to navigate to this place
 * @property {Position} position - The position of the place
 * @property {MediaContainer} [preferredMedia] - The preferred MediaContainer to use
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {ResolutionError} [resolutionError] - If non-null, an error occured while resolving this place and only a subset of data will be accessible
 * @property {string} [synopsis] - A short summary
 * @property {Array<string>} tags - A collection of strings used to label this place
 * @property {string} [title] - Alias for `Place.name`
 * @property {Array<PlaceTowards>} towards - Calculate distance and bearing information from the specified positions to this place
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * The address data of a place
 * @typedef {Object} PlaceAddress
 * @property {string} [addressLineOne]
 * @property {string} [addressLineThree]
 * @property {string} [addressLineTwo]
 * @property {string} [administrativeGroup]
 * @property {string} [area]
 * @property {string} [country]
 * @property {string} [countryCode]
 * @property {string} [crossStreet]
 * @property {string} [locality]
 * @property {string} [postalCode]
 * @property {string} [region]
 * @property {string} [regionCode]
 */

/**
 * Describes the attribution requirements associated with the place.
 * @typedef {Object} PlaceAttribution
 * @property {string} [license] - Specific licensing information for this place if known
 * @property {string} [link] - A link required for this place
 * @property {MediaResourceEmbedded} [mediaResource] - Any media to be used in attribution, such as watermarks
 * @property {string} [pixel] - The required tracking pixel
 * @property {string} [text] - Text Attribution required for this place
 */

/**
 * Contact information for a Place
 * @typedef {Object} PlaceContact
 * @property {string} [bookingUrl] - Booking url for this place
 * @property {string} [emailAddress] - Email address for this place
 * @property {string} [facebookUrl] - Facebook page for this place
 * @property {string} [instagramUrl] - Instagram for this place
 * @property {string} [phoneNumber] - Phone number for this place
 * @property {string} [twitterUrl] - Twitter for this place
 * @property {string} [websiteUrl] - Contact website for this place
 */

/**
 * The opening hours for a place
 * @typedef {Object} PlaceHours
 * @property {string} [comment] - Look up the place hours comment (if any) for the current time or a given datetime.
 * @property {Array<PlaceHoursForDay>} forDays - Look up the opening hours for a specific day. Days are calculated according to the local time of the place.
 * 
 * Will return a maximum of 90 days.
 * @property {PlaceHoursIntervalConnection} intervals - Look up intervals where the opening hours status/comment for the place changes
 * @property {string} osmTag - The opening hours formatted in the OpenStreetMap opening_hours tag format.
 * 
 * See: <https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification>
 * @property {PlaceHoursStatus} status - Look up the open/closed status of the place for the current time or a given datetime.
 * @property {boolean} weekStable - Whether or not the hours are the same each week.
 */

/**
 * The opening hour for a place on a specific day
 * @typedef {Object} PlaceHoursForDay
 * @property {string} date - The date of the day.
 * A full ISO 8061 formatted datetime corresponding to 12:00 am local time.
 * @property {Array<PlaceHoursInterval>} intervals - The opening hour intervals for this day.
 * @property {Array<string>} publicHolidays - The name of any public holidays on this day.
 */

/**
 * The opening hours for a place during the interval between two datetimes
 * @typedef {Object} PlaceHoursInterval
 * @property {string} [comment] - The place hours comment (if any) during this interval
 * @property {string} from - The starting datetime of this interval
 * @property {Array<PlaceHoursIntervalHoliday>} publicHolidays - The holidays that occur during this interval
 * 
 * Note: Will return holidays up to a maximum of one year from the "from" date
 * @property {PlaceHoursStatus} status - The open/closed status of the place during this interval
 * @property {string} [to] - The ending datetime of this interval, will be null if there is no following interval and the status/comment will no longer change
 */

/**
 * Connection of PlaceHoursIntervals
 * @typedef {Object} PlaceHoursIntervalConnection
 * @property {Array<PlaceHoursIntervalEdge>} edges - All the edges in this page of the connection
 * @property {Array<PlaceHoursInterval>} nodes - Shortcut for edges[].node
 * @property {PageInfo} pageInfo - Details regarding the current page of the connnection
 */

/**
 * Edge containing a PlaceHoursInterval
 * @typedef {Object} PlaceHoursIntervalEdge
 * @property {string} cursor - The cursor string pointing to this item
 * @property {PlaceHoursInterval} node - The item
 */

/**
 * A holiday that occurs during an interval
 * @typedef {Object} PlaceHoursIntervalHoliday
 * @property {string} date - The date of the holiday.
 * A full ISO 8061 formatted datetime corresponding to 12:00 am local time.
 * @property {string} name - The name of the holiday.
 */

/**
 * Whether a place is open/closed or if the status is unknown
 * @typedef {("Closed"|"Open"|"Unknown")} PlaceHoursStatus
 */

/**
 * Create a new place or refer to an existing place
 * @typedef {Object} PlaceInput
 * @property {string} [id] - Unique place identifier
 * @property {PositionInput} position - The position of the place
 */

/**
 * A layer on a Place
 * @typedef {Object} PlaceLayer
 * @property {string} id - Unique identifier for this place layer
 * @property {string} [name] - Name for this place layer
 */

/**
 * Navigation service provider
 * @typedef {("Apple"|"Google")} PlaceNavigationUrlProvider
 */

/**
 * Connection of PlaceSearchs
 * @typedef {Object} PlaceSearchConnection
 * @property {Array<PlaceSearchEdge>} edges - All the edges in this page of the connection
 * @property {Array<PlaceSearchNode>} nodes - Shortcut for edges[].node
 * @property {PageInfo} pageInfo - Details regarding the current page of the connnection
 */

/**
 * Edge containing a PlaceSearch
 * @typedef {Object} PlaceSearchEdge
 * @property {string} cursor - The cursor string pointing to this item
 * @property {TextSearchResult} main - The main line of the two line search result
 * @property {PlaceSearchNode} node - The item
 * @property {TextSearchResult} secondary - The secondary line of the two line search result
 * @property {TextSearchResult} single - The one line text search result
 */

/**
 * A result from a place search
 * @typedef {Object} PlaceSearchNode
 * @property {PlaceAddress} address - The address of the place
 * @property {string} [contributor] - Source of the place data
 * @property {string} [description] - A longer description
 * @property {string} id - The Globally Unique ID of the place.
 * @property {Array<PlaceLayer>} layers - Layers associated to this place
 * @property {string} [maki] - The maki icon for this place
 * @property {string} [name] - The name of the place
 * @property {Position} position - The position of the place
 * @property {string} [synopsis] - A short summary
 * @property {string} [title] - Alias for `Place.name`
 */

/**
 * Where to search for place information
 * @typedef {("AustralianTourismDataWarehouse"|"Facebook"|"Geonames"|"OpenAddresses"|"OpenStreetMap"|"TripAdvisor"|"WhosOnFirst"|"Yelp"|"Zomato")} PlaceSearchSource
 */

/**
 * Place bearing and distance information towards point
 * @typedef {Object} PlaceTowards
 * @property {number} bearing - The bearing angle from the place to the point
 * @property {CompassPoint} compass - Compass point towards given point
 * @property {number} distance - The distance from the place to the point
 * @property {Position} position - The point
 */

/**
 * A position on a map with a longitude and latitude
 * @typedef {Object} Position
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {AttributeConnection} attrs - Query multiple attributes optionally filtering by id and/or locale
 * @property {string} id - Identifier for the Position type useful for client-side caching
 * @property {number} lat - The position's latitude
 * @property {Array<number>} latLon - The position in the form: [latitude, longitude]
 * @property {Array<PlaceLayer>} layers - PlaceLayers associated to this position
 * @property {number} lon - The position's longitude
 * @property {Array<number>} lonLat - The position in the form: [longitude, latitude]
 */

/**
 * A position on a map with a longitude and latitude
 * @typedef {Object} PositionInput
 * @property {number} lat - The latitude
 * @property {number} lon - The longitude
 */

/**
 * Profile
 * @typedef {Object} Profile
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {AttributeConnection} attrs - Query multiple attributes optionally filtering by id and/or locale
 * @property {boolean} autoApproveFollows - Indicates if follows on this profile are automatically approved
 * @property {MediaContainer} [avatar] - The avatar
 * @property {BillingDetails} [billingDetails] - Fetch billing details associated with this profile
 * @property {BillingSubscriptionConnection} billingSubscriptions - Fetch billing subscriptions associated with a profile
 * @property {string} [bio] - A short biography
 * @property {ConnectedAppConnection} connectedApps - Fetch connected-apps associated with this profile
 * @property {ProfileFollowConnection} followers - Profiles that follow this profile
 * @property {ProfileFollowConnection} following - Profiles that this profile follows
 * @property {string} [handle] - The (optional) unique handle of the profile
 * @property {string} id - The Globally Unique ID of the object.
 * @property {string} name - The name of the profile
 * @property {ProfileType} type - The type of the profile
 * @property {string} [websiteUrl] - The Website URL
 */

/**
 * Connection of Profiles
 * @typedef {Object} ProfileConnection
 * @property {Array<ProfileEdge>} edges - All the edges in this page of the connection
 * @property {Array<Profile>} nodes - Shortcut for edges[].node
 * @property {PageInfo} pageInfo - Details regarding the current page of the connnection
 * @property {number} totalCount - The total number of items in the connection (in all pages)
 */

/**
 * Edge containing a Profile
 * @typedef {Object} ProfileEdge
 * @property {string} cursor - The cursor string pointing to this item
 * @property {Profile} node - The item
 */

/**
 * Connection of ProfileFollows
 * @typedef {Object} ProfileFollowConnection
 * @property {Array<ProfileFollowEdge>} edges - All the edges in this page of the connection
 * @property {Array<Profile>} nodes - Shortcut for edges[].node
 * @property {PageInfo} pageInfo - Details regarding the current page of the connnection
 * @property {number} totalCount - The total number of items in the connection (in all pages)
 */

/**
 * Edge containing a ProfileFollow
 * @typedef {Object} ProfileFollowEdge
 * @property {string} cursor - The cursor string pointing to this item
 * @property {Profile} node - The item
 * @property {ProfileFollowStatus} status - The status of the follow request
 */

/**
 * Profile follow status
 * @typedef {("Approved"|"Denied"|"Pending")} ProfileFollowStatus
 */

/**
 * Profile type
 * @typedef {("Individual"|"Organization")} ProfileType
 */

/**
 * Response to Mutation.publishItinerary
 * @typedef {Object} PublishItineraryPayload
 * @property {Itinerary} [itinerary] - The published itinerary
 */

/**
 * @typedef {Object} Query
 * @property {ProfileConnection} authorizedProfiles - Look up all authorised profiles
 * @property {BillingDetails} [billingDetails] - Fetch billing details associated with a profile
 * @property {BillingPriceConnection} billingPrices - List of available billing prices
 * @property {BillingSubscriptionConnection} billingSubscriptions - Fetch billing subscriptions associated with a profile
 * @property {Collection} [collection] - Retrieve a collection by id
 * @property {CollectionItem} [collectionItem] - Retrieve a collection item by id
 * @property {CollectionItemConnection} collectionItems - Retrieve multiple collection items filtered by different criteria
 * @property {CollectionConnection} collections - Retrieve multiple collections
 * @property {ConnectedApp} [connectedApp] - Obtains a connected app by a provided id
 * @property {ConnectedAppConnection} connectedApps - Search connected apps
 * @property {IconResource} [iconResource] - Obtains an IconResource with a provided id
 * @property {IconResourceConnection} iconResources - Retrieve multiple IconResources under a profile
 * @property {Array<Isochrone>} isochrone - Query for fetching isochrone
 * @property {ItinerarySearchConnection} itineraries - Query itineraries that belong to a profile
 * @property {Itinerary} [itinerary] - Get an itinerary by id
 * @property {MediaContainer} [mediaContainer] - Retrieve a MediaContainer by id
 * @property {MediaResource} [mediaResource] - Retrieve a MediaResource by id
 * @property {Node} [node] - Get a resource that implements Node by id
 * @property {Place} [place] - Get a place by id
 * @property {PlaceSearchConnection} placeAddressSearch - Search for places based on address details
 * @property {PlaceSearchConnection} placeAutocompleteSearch - Autocomplete for place search
 * @property {PlaceSearchConnection} placeReverseSearch - Search for places by location
 * @property {PlaceSearchConnection} placeSearch - Search for places
 * @property {Array<(Place|null|undefined)>} places - Get multiple places by id
 * @property {Profile} [profile] - Obtains a profile by a provided id
 * @property {Profile} [profileByHandle] - Obtains a profile with the provided handle
 * @property {ProfileConnection} profiles - Search profiles
 * @property {RouteConnection} routes - Look up routes for traveling along the given positions
 * @property {UserAgreementConnection} userAgreements - Query for fetching agreements made by this user
 */

/**
 * Error which occurred while resolving an ID
 * @typedef {Object} ResolutionError
 * @property {string} message - Human readable error message
 */

/**
 * Response to Mutation.revertItinerary
 * @typedef {Object} RevertItineraryPayload
 * @property {Itinerary} [itinerary] - The reverted itinerary
 */

/**
 * The representation of a route path taken
 * @typedef {Object} Route
 * @property {Array<RouteMode>} modes - The set of all RouteModes used by all the segments
 * @property {Array<RouteSegment>} segments - The segments of this route
 */

/**
 * Connection of Routes
 * @typedef {Object} RouteConnection
 * @property {Array<RouteEdge>} edges - All the edges in this page of the connection
 * @property {Array<Route>} nodes - Shortcut for edges[].node
 * @property {PageInfo} pageInfo - Details regarding the current page of the connnection
 */

/**
 * Edge containing a Route
 * @typedef {Object} RouteEdge
 * @property {string} cursor - The cursor string pointing to this item
 * @property {Route} node - The item
 */

/**
 * Create a Route
 * @typedef {Object} RouteInput
 * @property {Array<RouteSegmentInput>} segments - The segments of this route
 */

/**
 * Modes of transport
 * @typedef {("Abseiling"|"AdventureBike"|"AerialLift"|"AlpineSki"|"BackcountrySki"|"Barge"|"Bike"|"Boat"|"Bus"|"CableCar"|"Camel"|"Canoe"|"Car"|"Caving"|"Chairlift"|"CrossCountrySky"|"Cruise"|"Cycling"|"Dirtbike"|"Dive"|"DogSled"|"ElectricCar"|"ElectricMotorbike"|"Ferry"|"Foot"|"FourWheelDriving"|"Funicular"|"Geocaching"|"Glider"|"Golfcar"|"Gondola"|"HandGliding"|"Handcycle"|"Helicopter"|"Hike"|"Hitchhiking"|"Horse"|"HorseAndCart"|"HotAirBaloon"|"IceSkate"|"InlineSkate"|"JetBoat"|"Jetski"|"Kayak"|"Kitesurf"|"LightAircraft"|"LightRail"|"Minibus"|"Monorail"|"Motorcycle"|"MountainBike"|"Mountaineering"|"NordicSki"|"NordicWalking"|"Orienteering"|"Plane"|"Quadbike"|"Rickshaw"|"RockClimbing"|"Row"|"Rowboat"|"Run"|"Sail"|"Scooter"|"Skateboarding"|"Skydive"|"Snorkel"|"Snowboard"|"Snowshoe"|"StandUpPaddleBoard"|"Surf"|"Swim"|"TaxiOrRideshare"|"TrailRun"|"Train"|"Transit"|"Trekking"|"Tubing"|"WalkOrRide"|"WaterSki"|"WaterTaxi"|"Wheelchair"|"WhiteWaterRafting"|"Windsurf"|"ZipLine")} RouteMode
 */

/**
 * Subset of RouteModes supporting route search
 * @typedef {("Bike"|"Bus"|"Camel"|"Car"|"Cycling"|"ElectricCar"|"ElectricMotorbike"|"Foot"|"FourWheelDriving"|"Hike"|"Hitchhiking"|"Horse"|"HorseAndCart"|"InlineSkate"|"Minibus"|"Motorcycle"|"MountainBike"|"NordicWalking"|"Rickshaw"|"Run"|"Scooter"|"Snowshoe"|"TaxiOrRideshare"|"TrailRun"|"Trekking"|"WalkOrRide"|"Wheelchair")} RouteSearchableMode
 */

/**
 * One segment of a Route
 * @typedef {Object} RouteSegment
 * @property {number} [distance] - The estimated distance for this path
 * @property {number} [duration] - The estimated duration for this path
 * @property {Elevation} elevation - The estimated elevation details of this route
 * @property {JSON} [geoJson] - The representation of this path as encoded as geojson FeatureCollection type
 * @property {string} id - WARNING: this ID is unstable, modifying the route might change the ID
 * @property {RouteMode} mode - The mode of transport to be taken. eg: car, walk, kayak, etc
 * @property {string} [polyline] - The path representation as encoded as a polyline format
 * @property {Array<Position>} [positions] - The way positions along this route
 * @property {boolean} useRouteSearching - Whether this route was searched for
 */

/**
 * Create a RouteSegment
 * @typedef {Object} RouteSegmentInput
 * @property {number} [distance] - The distance for this route segment
 * @property {number} [duration] - The duration for this route segment
 * @property {RouteMode} [mode] - The mode of transport to be taken on this segment, defaults to Car
 * @property {Array<PositionInput>} [positions] - The way positions along this route
 * @property {boolean} [useRouteSearching] - Whether to plan out a route using the positions. Defaults to true if the mode is searchable and otherwise will be set to false
 */

/**
 * Determines which order a specific field will be ordered in
 * @typedef {("Asc"|"Desc")} SortDirection
 */

/**
 * Result of starting a media upload
 * @typedef {Object} StartMediaUploadPayload
 * @property {JSON} fields - Data to pass with the upload
 * @property {string} token - The upload token, required when finalising the upload
 * @property {string} url - The url to upload media to (via HTTP POST)
 */

/**
 * A text search result with a label and matches to highlight
 * @typedef {Object} TextSearchResult
 * @property {string} label - Search result label
 * @property {Array<TextSearchResultMatch>} matches - Text substring matches in the label text
 */

/**
 * A details of a single result from a text search
 * @typedef {Object} TextSearchResultMatch
 * @property {number} length - Length of the match
 * @property {number} offset - Start of the match
 */

/**
 * Result of unfollowing a profile
 * @typedef {Object} UnfollowProfilePayload
 * @property {Profile} fromProfile - The follower profile
 * @property {ProfileFollowStatus} [status] - The status of the follow request
 * @property {Profile} toProfile - The profile being followed
 */

/**
 * The fields to change when updating the billing details
 * @typedef {Object} UpdateBillingDetailsInput
 * @property {BillingAddressInput} address - The billing address
 * @property {string} emailAddress - The email address
 * @property {string} familyName - The family name
 * @property {string} givenName - The given name
 * @property {string} [organization] - The optional organization name
 */

/**
 * The output after updating the billing details
 * @typedef {Object} UpdateBillingDetailsOutput
 * @property {BillingDetails} billingDetails - The updated billing details
 */

/**
 * Updates a collection
 * @typedef {Object} UpdateCollectionInput
 * @property {Array<CreateMediaContainerInput>} [createMedia] - Add multiple Media with MediaResources
 * @property {Array<AttributeIdentifierInput>} [deleteAttrs] - Delete attributes to the collection
 * @property {Array<string>} [deleteMedia] - Delete one or move MediaContainers
 * @property {string} [description] - The description for the collection
 * @property {Array<MoveMediaContainerInput>} [moveMedia] - Move one or move MediaContainers
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [synopsis] - The synopsis for the collection
 * @property {Array<string>} [tags] - The tags for the collection
 * @property {string} [title] - The title for the collection
 * @property {Array<UpdateMediaContainerInput>} [updateMedia] - Update one or move MediaContainers
 * @property {Array<AttributeInput>} [upsertAttrs] - Insert or update attributes to the collection
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * The fields for the collection location to update
 * @typedef {Object} UpdateCollectionLocationInput
 * @property {Array<CreateMediaContainerInput>} [createMedia] - Add multiple Media with MediaResources
 * @property {Array<AttributeIdentifierInput>} [deleteAttrs] - Delete attributes to the collection
 * @property {Array<string>} [deleteMedia] - Delete one or move MediaContainers
 * @property {string} [description] - A longer description content for this item
 * @property {string} [externalId] - Identifier from an external source this item is associated with
 * @property {string} [externalSource] - The source of this item's externalId
 * @property {Array<MoveMediaContainerInput>} [moveMedia] - Move one or move MediaContainers
 * @property {PlaceInput} [place] - The associated place information for this item
 * @property {PositionInput} [position] - Override for the place's position
 * @property {string} [readMoreUrl] - Shortcut for setting the read-more attribute
 * @property {Array<string>} [sectionIds] - One or more sections for this item
 * @property {string} [synopsis] - A longer description content for this item
 * @property {Array<string>} [tags] - A collection of strings used to label this item
 * @property {string} [title] - Title for this item
 * @property {Array<UpdateMediaContainerInput>} [updateMedia] - Update one or move MediaContainers
 * @property {Array<AttributeInput>} [upsertAttrs] - Insert or update attributes to the collection
 * @property {string} [websiteUrl] - Shortcut for setting the website-url attribute
 */

/**
 * The fields available after the collection location has been updated
 * @typedef {Object} UpdateCollectionLocationPayload
 * @property {CollectionLocation} [location] - The collection location that was updated
 */

/**
 * The available fields after updating a collection
 * @typedef {Object} UpdateCollectionPayload
 * @property {Collection} [collection] - The updated collection
 */

/**
 * Updates a connected app
 * @typedef {Object} UpdateConnectedAppInput
 * @property {ConnectedAppAuthType} [authType] - The type of the connected-app
 * @property {string} [privateConfiguration] - Encrypted JSON
 * @property {string} [publicId] - 3rd party ID or account ID
 * @property {string} [scope] - Any specific scope that has been granted to the 3rd party application
 */

/**
 * The available fields after updating a connected app
 * @typedef {Object} UpdateConnectedAppPayload
 * @property {ConnectedApp} [connectedApp] - The updated connected app
 */

/**
 * Update an IconComposition
 * @typedef {Object} UpdateIconCompositionInput
 * @property {string} [iconFill] - Change the fill color for the icon, set to null to remove the fill
 * @property {string} id - ID of the IconComposition to update
 * @property {string} [name] - Change the name
 * @property {string} [resourceId] - Change the Icon used by this IconComposition
 * @property {string} [shieldFill] - Change the fill color for the shield, set to null to remove the fill
 * @property {string} [shieldKey] - Change which shield to use for the icon, set to null to clear the shieldFill and shieldStroke as well
 * @property {string} [shieldStroke] - Change the stroke color for the shield, set to null to remove the stroke
 */

/**
 * Fields for updating an IconSilhouette
 * @typedef {Object} UpdateIconSilhouetteInput
 * @property {Array<AttributeIdentifierInput>} [deleteAttrs] - Delete attributes to the icon
 * @property {string} [name] - Change the name of this icon
 * @property {Array<string>} [paths] - SVG path data for this icon, eg: "M 100 .."
 * @property {Array<AttributeInput>} [upsertAttrs] - Insert or update attributes to the icon
 * @property {string} [viewBox] - Optional SVG viewBox for this icon
 */

/**
 * The response after updating an icon
 * @typedef {Object} UpdateIconSilhouettePayload
 * @property {IconSilhouette} [icon] - The updated icon
 */

/**
 * The intinerary collection fields to update
 * @typedef {Object} UpdateItineraryCollectionInput
 * @property {Array<CreateMediaContainerInput>} [createMedia] - Add multiple Media with MediaResources
 * @property {Array<AttributeIdentifierInput>} [deleteAttrs] - Delete attributes to the itinerary-collection
 * @property {Array<string>} [deleteMedia] - Delete one or move MediaContainers
 * @property {string} [description] - The description for the itinerary-collection
 * @property {Array<MoveMediaContainerInput>} [moveMedia] - Move one or move MediaContainers
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [synopsis] - The synopsis for the itinerary-collection
 * @property {Array<string>} [tags] - The tags for the itinerary-collection
 * @property {string} [title] - The title for the itinerary-collection
 * @property {Array<UpdateMediaContainerInput>} [updateMedia] - Update one or move MediaContainers
 * @property {Array<AttributeInput>} [upsertAttrs] - Insert or update attributes to the itinerary-collection
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * The fields available after updating the itinerary collection
 * @typedef {Object} UpdateItineraryCollectionPayload
 * @property {ItineraryItemCascadedChanges} cascaded - Other changes to the itinerary that caused by deleting the itinerary-item
 * @property {ItineraryCollection} [collection] - The itinerary collection that was created
 * @property {Itinerary} itinerary - The modified itinerary
 */

/**
 * The input fields to update the itinerary directions
 * @typedef {Object} UpdateItineraryDirectionsInput
 * @property {Array<CreateMediaContainerInput>} [createMedia] - Add multiple Media with MediaResources
 * @property {Array<AttributeIdentifierInput>} [deleteAttrs] - Delete attributes to the collection
 * @property {Array<string>} [deleteMedia] - Delete one or move MediaContainers
 * @property {string} [description] - The description for the itinerary-directions
 * @property {number} [distance] - The distance of the itinerary-directions
 * @property {Array<ItineraryDirectionsDurationsInput>} [durations] - The duration details of the new itinerary-directions
 * @property {ElevationInput} [elevation] - The elevation details of the new itinerary-directions
 * @property {Array<MoveMediaContainerInput>} [moveMedia] - Move one or move MediaContainers
 * @property {string} [originId] - The origin/starting itinerary location item, in the form of item/XYZ
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {RouteInput} [route] - The route of this item, must include at least one route segment
 * @property {string} [synopsis] - The synopsis for the itinerary-directions
 * @property {Array<string>} [tags] - The tags for the itinerary-directions
 * @property {string} [title] - The title for the itinerary directions
 * @property {Array<UpdateMediaContainerInput>} [updateMedia] - Update one or move MediaContainers
 * @property {Array<AttributeInput>} [upsertAttrs] - Insert or update attributes to the collection
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * The fields available after updating the itinerary directions item
 * @typedef {Object} UpdateItineraryDirectionsPayload
 * @property {ItineraryItemCascadedChanges} cascaded - Other changes to the itinerary that caused by deleting the itinerary-item
 * @property {ItineraryDirections} [directions] - The updated itinerary directions item
 * @property {Itinerary} itinerary - The modified itinerary
 */

/**
 * Updates a itinerary
 * @typedef {Object} UpdateItineraryInput
 * @property {ItineraryAutoRouteInput} [autoRoute] - Enable auto routing, or set to null to disable
 * @property {boolean} [autoRouteRemoveExisting] - Remove any routes that were created with auto routing
 * @property {Array<CreateIconCompositionInput>} [createIcons] - Add new IconCompositions to the itinerary
 * @property {Array<CreateMediaContainerInput>} [createMedia] - Add multiple Media with MediaResources
 * @property {string} [defaultLocale] - The default locale of this itinerary's content
 * @property {Array<AttributeIdentifierInput>} [deleteAttrs] - Delete attributes to the collection
 * @property {Array<string>} [deleteIcons] - Delete one or move IconCompositions
 * @property {Array<string>} [deleteMedia] - Delete one or move MediaContainers
 * @property {string} [description] - The description for the itinerary
 * @property {ElevationInput} [elevation] - Elevation data of the new itinerary
 * @property {Array<MoveMediaContainerInput>} [moveMedia] - Move one or move MediaContainers
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [synopsis] - The synopsis for the itinerary
 * @property {Array<string>} [tags] - The tags for the itinerary
 * @property {string} [title] - The title for the itinerary
 * @property {Array<UpdateIconCompositionInput>} [updateIcons] - Update IconCompositions in the itinerary
 * @property {Array<UpdateMediaContainerInput>} [updateMedia] - Update one or move MediaContainers
 * @property {Array<AttributeInput>} [upsertAttrs] - Insert or update attributes to the collection
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * The fields to update on an itinerary location
 * @typedef {Object} UpdateItineraryLocationInput
 * @property {BoundsInput} [bounds] - The bounds of the itinerary-location
 * @property {Array<CreateMediaContainerInput>} [createMedia] - Add multiple Media with MediaResources
 * @property {Array<AttributeIdentifierInput>} [deleteAttrs] - Delete attributes to the itinerary-collection
 * @property {Array<string>} [deleteMedia] - Delete one or move MediaContainers
 * @property {string} [description] - The description for the itinerary-location
 * @property {string} [icon] - Set or remove the optional icon, passed ID must exist in the Itinerary.icons
 * @property {Array<MoveMediaContainerInput>} [moveMedia] - Move one or move MediaContainers
 * @property {boolean} [optional] - Whether the location specified is optional on the itinerary
 * @property {PlaceInput} [place] - The place for this itinerary-location
 * @property {PositionInput} [position] - The place for this itinerary-location
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [synopsis] - The synopsis for the itinerary-location
 * @property {Array<string>} [tags] - The tags for the itinerary-location
 * @property {string} [title] - The title for the itinerary-location
 * @property {Array<UpdateMediaContainerInput>} [updateMedia] - Update one or move MediaContainers
 * @property {Array<AttributeInput>} [upsertAttrs] - Insert or update attributes to the itinerary-collection
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 */

/**
 * The fields available after updating a location
 * @typedef {Object} UpdateItineraryLocationPayload
 * @property {ItineraryItemCascadedChanges} cascaded - Other changes to the itinerary that caused by deleting the itinerary-item
 * @property {Itinerary} itinerary - The modified itinerary
 * @property {ItineraryLocation} [location] - The updated itinerary location
 */

/**
 * The available fields after updating a itinerary
 * @typedef {Object} UpdateItineraryPayload
 * @property {ItineraryItemCascadedChanges} cascaded - Other changes to the itinerary that caused by updating the itinerary
 * @property {Itinerary} [itinerary] - The updated itinerary
 */

/**
 * Update a MediaContainer in a MediaContainer list
 * @typedef {Object} UpdateMediaContainerInput
 * @property {string} id - ID to the MediaContainer to update
 * @property {string} [resourceId] - ID to a MediaResource
 */

/**
 * Updates a media resource
 * @typedef {Object} UpdateMediaResourceInput
 * @property {string} [attribution] - Text attribution for the source of the media-resource
 * @property {string} [caption] - Text caption for the media-resource
 * @property {string} [copyright] - Copyright details of the media-resource
 * @property {Array<AttributeIdentifierInput>} [deleteAttrs] - Delete attributes to the media-resource
 * @property {Array<string>} [tags] - List of labels to apply to the media-resource
 * @property {Array<AttributeInput>} [upsertAttrs] - Insert or update attributes to the media-resource
 */

/**
 * Response payload to Mutation.updateMediaResource
 * @typedef {Object} UpdateMediaResourcePayload
 * @property {MediaResource} resource - The updated media-resource
 */

/**
 * Input object to Mutation.updateProfile
 * @typedef {Object} UpdateProfileInput
 * @property {boolean} [autoApproveFollows] - If follow requests should be automatically approved for this profile
 * @property {MediaContainerInput} [avatar] - The avatar image
 * @property {string} [bio] - A short biography
 * @property {Array<AttributeIdentifierInput>} [deleteAttrs] - Delete attributes to the profile
 * @property {string} [name] - The name of the profile
 * @property {ProfileType} [type] - The type of profile
 * @property {Array<AttributeInput>} [upsertAttrs] - Insert or update attributes to the profile
 * @property {string} [websiteUrl] - The website url
 */

/**
 * Response payload to Mutation.updateProfile
 * @typedef {Object} UpdateProfilePayload
 * @property {Profile} [profile] - The updated profile
 */

/**
 * An agreement made by a user
 * @typedef {Object} UserAgreement
 * @property {string} [date] - The date when the agreement was made
 * @property {string} id - The Globally Unique ID of the object.
 * @property {Profile} [profile] - Profile that associated with this agreement
 * @property {string} type - The type of agreement
 */

/**
 * Connection of UserAgreements
 * @typedef {Object} UserAgreementConnection
 * @property {Array<UserAgreementEdge>} edges - All the edges in this page of the connection
 * @property {Array<UserAgreement>} nodes - Shortcut for edges[].node
 * @property {PageInfo} pageInfo - Details regarding the current page of the connnection
 * @property {number} totalCount - The total number of items in the connection (in all pages)
 */

/**
 * Edge containing a UserAgreement
 * @typedef {Object} UserAgreementEdge
 * @property {string} cursor - The cursor string pointing to this item
 * @property {UserAgreement} node - The item
 */
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

/** Angle unit */
export enum AngleUnit {
  Degrees = 'Degrees',
  Radians = 'Radians'
}

/** Result of approving a follow request */
export type ApproveProfileFollowPayload = {
  __typename?: 'ApproveProfileFollowPayload';
  /** The follower profile */
  fromProfile: Profile;
  /** The status of the follow request */
  status?: Maybe<ProfileFollowStatus>;
  /** The profile being followed */
  toProfile: Profile;
};

/** Additional data defined on a resource */
export type Attribute = {
  __typename?: 'Attribute';
  /**
   *
   * The attribute identifier
   *
   * Has the form "{{resource_type}}/{{attribute_name}}"
   * eg: The "title" attribute on an item will have the id: "item/title"
   *
   * Custom attributes have the form "custom/{{attribute_name}}"
   *
   */
  id: Scalars['ID'];
  /** Optional string representing the locale of the attribute value */
  locale?: Maybe<Scalars['String']>;
  /** Optional attribute metadata, can be any JSON-serialisable type */
  meta?: Maybe<Scalars['JSON']>;
  /** The attribute value, can be any JSON-serialisable type */
  value?: Maybe<Scalars['JSON']>;
};

/** Connection of Attributes */
export type AttributeConnection = {
  __typename?: 'AttributeConnection';
  /** All the edges in this page of the connection */
  edges: Array<AttributeEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<Attribute>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

/** Edge containing a Attribute */
export type AttributeEdge = {
  __typename?: 'AttributeEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: Attribute;
};

/** A selector for an attribute */
export type AttributeIdentifierInput = {
  /** The attribute identifier */
  id: Scalars['ID'];
  /** The locale of the attribute */
  locale?: InputMaybe<Scalars['String']>;
};

/** Defines an attribute */
export type AttributeInput = {
  /** The attribute identifier */
  id: Scalars['ID'];
  /** Optional string representing the locale of the attribute value */
  locale?: InputMaybe<Scalars['String']>;
  /** Optional attribute metadata, can be any JSON-serialisable type */
  meta?: InputMaybe<Scalars['JSON']>;
  /** The attribute value, can be any JSON-serialisable type */
  value: Scalars['JSON'];
};

/** The address field of a BillingDetails object */
export type BillingAddress = {
  __typename?: 'BillingAddress';
  addressLineOne: Scalars['String'];
  addressLineTwo?: Maybe<Scalars['String']>;
  countryCode: Scalars['String'];
  locality: Scalars['String'];
  postalCode?: Maybe<Scalars['String']>;
  region: Scalars['String'];
};

/** Fields for update billing address field */
export type BillingAddressInput = {
  addressLineOne: Scalars['String'];
  addressLineTwo?: InputMaybe<Scalars['String']>;
  countryCode: Scalars['String'];
  locality: Scalars['String'];
  postalCode?: InputMaybe<Scalars['String']>;
  region: Scalars['String'];
};

/** Billing details associated with a profile */
export type BillingDetails = {
  __typename?: 'BillingDetails';
  /** The billing address */
  address: BillingAddress;
  /** The email address */
  emailAddress: Scalars['String'];
  /** The family name */
  familyName: Scalars['String'];
  /** The given name */
  givenName: Scalars['String'];
  /** The optional organization name */
  organization?: Maybe<Scalars['String']>;
  /** Profile that these billing details apply to */
  profile: Profile;
};

/** A billing plan */
export type BillingPlan = {
  __typename?: 'BillingPlan';
  /** The identifier for this plan */
  id: Scalars['ID'];
  /** The price of this plan */
  price?: Maybe<BillingPrice>;
  /** The quantity */
  quantity: Scalars['Int'];
};

/** A price available for a billing plan */
export type BillingPrice = {
  __typename?: 'BillingPrice';
  /** The amount of this price */
  amount: Scalars['Int'];
  /** The currency used for this price */
  currency: Scalars['String'];
  /** The unique id for this price */
  id: Scalars['ID'];
  /** The product corres */
  product: BillingProduct;
  /** Recurrence details of the price */
  recurring: BillingPriceRecurring;
};

/** Connection of BillingPrices */
export type BillingPriceConnection = {
  __typename?: 'BillingPriceConnection';
  /** All the edges in this page of the connection */
  edges: Array<BillingPriceEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<BillingPrice>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

/** Edge containing a BillingPrice */
export type BillingPriceEdge = {
  __typename?: 'BillingPriceEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: BillingPrice;
};

/** The billing price to use */
export type BillingPriceInput = {
  /** The ID of a BillingPrice */
  priceId: Scalars['String'];
  /** The quantity, defaults to 1 */
  quantity?: InputMaybe<Scalars['Int']>;
};

/** The recurrence details for a BillingPrice */
export type BillingPriceRecurring = {
  __typename?: 'BillingPriceRecurring';
  /** The number of interval per recurrence */
  count: Scalars['Int'];
  /** The interval type */
  interval: BillingPriceRecurringInterval;
};

/** The interval type */
export enum BillingPriceRecurringInterval {
  Day = 'Day',
  Month = 'Month',
  Week = 'Week',
  Year = 'Year'
}

/** A product corresponding to a price */
export type BillingProduct = {
  __typename?: 'BillingProduct';
  /** The description for this product */
  description?: Maybe<Scalars['String']>;
  /** The unique id for this product */
  id: Scalars['ID'];
  /** The name of this product */
  name: Scalars['String'];
};

/** A billing subscription */
export type BillingSubscription = {
  __typename?: 'BillingSubscription';
  /** The date when the subscription was created */
  created: Scalars['String'];
  /** The unique id for this subscription */
  id: Scalars['ID'];
  /** The date when the subscription was last modified */
  modified: Scalars['String'];
  /** The plans attached to this subscription */
  plans: Array<BillingPlan>;
  /** Profile that this billing subscription belongs to */
  profile: Profile;
  /** The current status of this subscription */
  status: BillingSubscriptionStatus;
};


/** A billing subscription */
export type BillingSubscriptionCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};


/** A billing subscription */
export type BillingSubscriptionModifiedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};

/** Connection of BillingSubscriptions */
export type BillingSubscriptionConnection = {
  __typename?: 'BillingSubscriptionConnection';
  /** All the edges in this page of the connection */
  edges: Array<BillingSubscriptionEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<BillingSubscription>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

/** Edge containing a BillingSubscription */
export type BillingSubscriptionEdge = {
  __typename?: 'BillingSubscriptionEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: BillingSubscription;
};

/** The status of a BillingSubscription */
export enum BillingSubscriptionStatus {
  Active = 'Active',
  Cancelled = 'Cancelled',
  Expired = 'Expired',
  Inactive = 'Inactive'
}

/** A bounding box on a map defined by two positions (opposite corners of the box) */
export type Bounds = {
  __typename?: 'Bounds';
  /** The east-most longitude of the bounding box */
  e: Scalars['Float'];
  /** The north-east point of the bounding box in the form: [east, north] */
  en: Array<Scalars['Float']>;
  /** The minimum and maximum points of the bounding box in the form: [minimum, maximum] */
  minMax: Array<Array<Scalars['Float']>>;
  /** The north-most latitude of the bounding box */
  n: Scalars['Float'];
  /** The south-most latitude of the bounding box */
  s: Scalars['Float'];
  /** The west-most longitude of the bounding box */
  w: Scalars['Float'];
  /** The south-west point of the bounding box in the form: [west, south] */
  ws: Array<Scalars['Float']>;
  /** The south-west and north-east points of the bounding box in the form: [west, south, east, north] */
  wsen: Array<Scalars['Float']>;
};

/** A bounding circle on a map defined by a center positions and a radius */
export type BoundsCircleInput = {
  /** The center position of the circle */
  position: PositionInput;
  /** The radius of the bounding circle */
  radius: Scalars['Float'];
};

/** A bounding box on a map defined by two positions (opposite corners of the box) */
export type BoundsInput = {
  /** The east-most longitude of the bounding box */
  e: Scalars['Float'];
  /** The north-most latitude of the bounding box */
  n: Scalars['Float'];
  /** The south-most latitude of the bounding box */
  s: Scalars['Float'];
  /** The west-most longitude of the bounding box */
  w: Scalars['Float'];
};

/** The result of Mutation.captureMarketingInformation */
export type CaptureMarketingInformationPayload = {
  __typename?: 'CaptureMarketingInformationPayload';
  /** The ID of the profile that the information is associated against */
  profileId?: Maybe<Scalars['ID']>;
};

/** Response to Mutation.changeItineraryDefaultLocale */
export type ChangeItineraryDefaultLocalePayload = {
  __typename?: 'ChangeItineraryDefaultLocalePayload';
  /** The changed itinerary */
  itinerary?: Maybe<Itinerary>;
};

/** Response of claiming a handle */
export type ClaimProfileHandlePayload = {
  __typename?: 'ClaimProfileHandlePayload';
  /** The profile that will claim the handle */
  profile?: Maybe<Profile>;
};

/** A collection type is used to group together a unordered set of items */
export type Collection = Node & {
  __typename?: 'Collection';
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes optionally filtering by id and/or locale */
  attrs: AttributeConnection;
  /** The date when the collection was created */
  created?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** A label used to differentiate types of collections */
  discriminator: Scalars['String'];
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
  /** Returns an item belonging to this collection by id */
  item?: Maybe<CollectionItemEmbedded>;
  /** Retrieve multiple collection-items belonging to this collection */
  items: CollectionItemConnection;
  /**
   * List of MediaContainers containing images or other media
   * @deprecated use mediaContainers instead
   */
  media: Array<MediaContainer>;
  /** List of MediaContainers containing images or other media */
  mediaContainers: MediaContainerConnection;
  /** The date when the collection was last modified */
  modified?: Maybe<Scalars['String']>;
  /** A single MediaContainer representing the preferred media to use */
  preferredMedia?: Maybe<MediaContainer>;
  /** Profile that owns this collection */
  profile: Profile;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** A supplied title for this collection */
  title?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
};


/** A collection type is used to group together a unordered set of items */
export type CollectionAttrArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** A collection type is used to group together a unordered set of items */
export type CollectionAttrValueArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** A collection type is used to group together a unordered set of items */
export type CollectionAttrsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  includeNoLocale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** A collection type is used to group together a unordered set of items */
export type CollectionCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};


/** A collection type is used to group together a unordered set of items */
export type CollectionItemArgs = {
  id: Scalars['ID'];
};


/** A collection type is used to group together a unordered set of items */
export type CollectionItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  bounds?: InputMaybe<BoundsInput>;
  boundsCircle?: InputMaybe<BoundsCircleInput>;
  externalIds?: InputMaybe<Array<Scalars['ID']>>;
  externalSources?: InputMaybe<Array<Scalars['ID']>>;
  first: Scalars['Int'];
  keyword?: InputMaybe<Scalars['String']>;
  resourceIds?: InputMaybe<Array<Scalars['ID']>>;
  sectionIds?: InputMaybe<Array<Scalars['ID']>>;
  sort?: InputMaybe<Array<CollectionItemsSort>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};


/** A collection type is used to group together a unordered set of items */
export type CollectionMediaArgs = {
  limit?: Scalars['Int'];
};


/** A collection type is used to group together a unordered set of items */
export type CollectionMediaContainersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


/** A collection type is used to group together a unordered set of items */
export type CollectionModifiedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};

/** Connection of Collections */
export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  /** All the edges in this page of the connection */
  edges: Array<CollectionEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<Collection>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

/** All possible collection discriminators */
export enum CollectionDiscriminator {
  Collection = 'Collection',
  Locale = 'Locale'
}

/** Edge containing a Collection */
export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: Collection;
};

/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItem = {
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes optionally filtering by id and/or locale */
  attrs: AttributeConnection;
  /** The date when the collection-item was created */
  created?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** Identifier from an external source this item is associated with */
  externalId?: Maybe<Scalars['ID']>;
  /** The source of the item's externalId */
  externalSource?: Maybe<Scalars['ID']>;
  /** The unique identifier, taking the shape of item/XYZ */
  id: Scalars['ID'];
  /**
   * List of MediaContainers containing images or other media
   * @deprecated use mediaContainers instead
   */
  media: Array<MediaContainer>;
  /** List of MediaContainers containing images or other media */
  mediaContainers: MediaContainerConnection;
  /** The date when the collection-item was last modified */
  modified?: Maybe<Scalars['String']>;
  /** The preferred MediaContainer to use */
  preferredMedia?: Maybe<MediaContainer>;
  /** The associated profile owner */
  profile: Profile;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** One or more sections this item belongs to */
  sectionIds: Array<Scalars['ID']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemAttrArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemAttrValueArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemAttrsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  includeNoLocale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemMediaArgs = {
  limit?: Scalars['Int'];
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemMediaContainersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemModifiedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};

/** Connection of CollectionItems */
export type CollectionItemConnection = {
  __typename?: 'CollectionItemConnection';
  /** All the edges in this page of the connection */
  edges: Array<CollectionItemEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<CollectionItem>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

/** Edge containing a CollectionItem */
export type CollectionItemEdge = {
  __typename?: 'CollectionItemEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: CollectionItem;
};

/** A CollectionItem that's embedded in another resource */
export type CollectionItemEmbedded = CollectionItemFailedToLoad | CollectionLocation;

/** Represents an embedded CollectionItem that failed to load */
export type CollectionItemFailedToLoad = Node & {
  __typename?: 'CollectionItemFailedToLoad';
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
};

/** Determine how to sort CollectionItems when listing */
export type CollectionItemsSort = {
  /** Sort by the created date */
  created?: InputMaybe<SortDirection>;
  /** Sort by the modified date */
  modified?: InputMaybe<SortDirection>;
  /** Sort by the collection-item title */
  title?: InputMaybe<SortDirection>;
};

/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocation = CollectionItem & Node & {
  __typename?: 'CollectionLocation';
  /** Address information for the collection location */
  address: PlaceAddress;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes optionally filtering by id and/or locale */
  attrs: AttributeConnection;
  /** The bounding box around the collection-location (derived from place if not overridden) */
  bounds?: Maybe<Bounds>;
  /** Contact information for the collection location */
  contact: PlaceContact;
  /** The date when the collection-item was created */
  created?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** Identifier from an external source this item is associated with */
  externalId?: Maybe<Scalars['ID']>;
  /** The source of the item's externalId */
  externalSource?: Maybe<Scalars['ID']>;
  /** The unique identifier, taking the shape of item/XYZ */
  id: Scalars['ID'];
  /**
   * List of MediaContainers containing images or other media
   * @deprecated use mediaContainers instead
   */
  media: Array<MediaContainer>;
  /** List of MediaContainers containing images or other media */
  mediaContainers: MediaContainerConnection;
  /** The date when the collection-item was last modified */
  modified?: Maybe<Scalars['String']>;
  /** The associated place information for this location */
  place: Place;
  /** The position of the collection-location (derived from place if not overridden) */
  position: Position;
  /** The preferred MediaContainer to use */
  preferredMedia?: Maybe<MediaContainer>;
  /** The associated profile owner */
  profile: Profile;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** One or more sections this item belongs to */
  sectionIds: Array<Scalars['ID']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationAttrArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationAttrValueArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationAttrsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  includeNoLocale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationMediaArgs = {
  limit?: Scalars['Int'];
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationMediaContainersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationModifiedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};

/** Determine how to sort Collections when listing */
export type CollectionsSort = {
  /** Sort by the created date */
  created?: InputMaybe<SortDirection>;
  /** Sort by the modified date */
  modified?: InputMaybe<SortDirection>;
  /** Sort by the collection title */
  title?: InputMaybe<SortDirection>;
};

/** Points on the compass rose */
export enum CompassPoint {
  E = 'E',
  N = 'N',
  Ne = 'NE',
  Nw = 'NW',
  S = 'S',
  Se = 'SE',
  Sw = 'SW',
  W = 'W'
}

/** Connected apps stored in the profile */
export type ConnectedApp = Node & {
  __typename?: 'ConnectedApp';
  /** Depending on the authentication method, this can highlight the authenticated application method (e.g. OAuth) */
  authType?: Maybe<ConnectedAppAuthType>;
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
  /** Private configuration information as encrypted JSON */
  privateConfiguration?: Maybe<Scalars['JSON']>;
  /** The profile associated with this connected app */
  profile?: Maybe<Profile>;
  /** A 3rd party ID or Account ID, this does not affect any of the Alpaca ID naming - for instance, if we are connecting to an Identity in OAUTH, this is the OAUTH Identity ID - This is just a place to store data */
  publicId?: Maybe<Scalars['ID']>;
  /** Any specific scope that has been granted to the 3rd party application */
  scope?: Maybe<Scalars['String']>;
  /** This is the key relating to the service - it identifies the "App" we are connecting to */
  serviceKey: ConnectedAppServiceKey;
  /** A key to describe the type of connection to the application */
  type?: Maybe<ConnectedAppType>;
};

/** Possible auth types for a ConnectedApp */
export enum ConnectedAppAuthType {
  Credentials = 'Credentials',
  Oauth = 'Oauth',
  Tokens = 'Tokens'
}

/** Connection of ConnectedApps */
export type ConnectedAppConnection = {
  __typename?: 'ConnectedAppConnection';
  /** All the edges in this page of the connection */
  edges: Array<ConnectedAppEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<ConnectedApp>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

/** Edge containing a ConnectedApp */
export type ConnectedAppEdge = {
  __typename?: 'ConnectedAppEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: ConnectedApp;
};

/** The key of the service for a ConnectedApp */
export enum ConnectedAppServiceKey {
  AlpacaLegacy = 'AlpacaLegacy',
  AustralianTourismDataWarehouse = 'AustralianTourismDataWarehouse',
  CrowdriffApi = 'CrowdriffApi',
  GoogleAnalytics4 = 'GoogleAnalytics4',
  ShopifyApi = 'ShopifyApi'
}

/** Possible types of ConnectedApp */
export enum ConnectedAppType {
  Api = 'Api',
  Configuration = 'Configuration',
  Credentials = 'Credentials'
}

/** The output after creating a billing checkout session */
export type CreateBillingCheckoutSessionOutput = {
  __typename?: 'CreateBillingCheckoutSessionOutput';
  /** The url for the checkout session */
  url: Scalars['String'];
};

/** The output after creating a billing portal session */
export type CreateBillingPortalSessionOutput = {
  __typename?: 'CreateBillingPortalSessionOutput';
  /** The url for the portal session */
  url: Scalars['String'];
};

/** Creates a collection */
export type CreateCollectionInput = {
  /** Additional data defined on the collection */
  attrs?: InputMaybe<Array<AttributeInput>>;
  /** A longer text description */
  description?: InputMaybe<Scalars['String']>;
  /** A label used to differentiate types of collections */
  discriminator?: CollectionDiscriminator;
  /** The list of MediaContainers to add to the new Collection */
  media?: InputMaybe<Array<CreateMediaContainerInput>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: InputMaybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: InputMaybe<Scalars['String']>;
  /** A series of strings applied to label the collection */
  tags?: InputMaybe<Array<Scalars['String']>>;
  /** Title of the collection */
  title?: InputMaybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** The input to create a collection location */
export type CreateCollectionLocationInput = {
  /** Additional data defined on this CollectionLocation */
  attrs?: InputMaybe<Array<AttributeInput>>;
  /** A longer description content for the new item */
  description?: InputMaybe<Scalars['String']>;
  /** Identifier from an external source this new item is associated with */
  externalId?: InputMaybe<Scalars['ID']>;
  /** The source of this item's externalId */
  externalSource?: InputMaybe<Scalars['ID']>;
  /** The list of MediaContainers to add to the new CollectionLocation */
  media?: InputMaybe<Array<CreateMediaContainerInput>>;
  /** The associated place record for this location */
  place: PlaceInput;
  /** Override for the place's position */
  position?: InputMaybe<PositionInput>;
  /** Alias for the read-more attribute */
  readMoreUrl?: InputMaybe<Scalars['String']>;
  /** One or more sections for this new item */
  sectionIds?: InputMaybe<Array<Scalars['ID']>>;
  /** A short summary text content for the new item */
  synopsis?: InputMaybe<Scalars['String']>;
  /** A collection of strings used to label the new item */
  tags?: InputMaybe<Array<Scalars['String']>>;
  /** Title for the new item */
  title?: InputMaybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** The fields available to return after creating a new collection location */
export type CreateCollectionLocationPayload = {
  __typename?: 'CreateCollectionLocationPayload';
  /** The created collection location */
  location?: Maybe<CollectionLocation>;
};

/** The return fields avaialble after creating a collection */
export type CreateCollectionPayload = {
  __typename?: 'CreateCollectionPayload';
  /** The newly created collection */
  collection?: Maybe<Collection>;
};

/** Create a new ConnectedApp */
export type CreateConnectedAppInput = {
  /** The authenticated application method */
  authType?: InputMaybe<ConnectedAppAuthType>;
  /** Encrypted JSON */
  privateConfiguration?: InputMaybe<Scalars['JSON']>;
  /** 3rd party ID or account ID */
  publicId?: InputMaybe<Scalars['ID']>;
  /** Any specific scope that has been granted to the 3rd party application */
  scope?: InputMaybe<Scalars['String']>;
  /** Identifies the service being connected to */
  serviceKey: ConnectedAppServiceKey;
  /** The type of the connected-app */
  type?: InputMaybe<ConnectedAppType>;
};

/** The return fields available after creating a connected app */
export type CreateConnectedAppPayload = {
  __typename?: 'CreateConnectedAppPayload';
  /** The newly created connected-app */
  connectedApp?: Maybe<ConnectedApp>;
};

/** Create an IconComposition */
export type CreateIconCompositionInput = {
  /** Optional fill color for the icon */
  iconFill?: InputMaybe<Scalars['String']>;
  /** A name for this IconComposition, should be unique across the itinerary */
  name: Scalars['String'];
  /** ID to the Icon used by this IconComposition */
  resourceId: Scalars['ID'];
  /** Optional fill color for the shield */
  shieldFill?: InputMaybe<Scalars['String']>;
  /** Indicates which shield to use */
  shieldKey?: InputMaybe<Scalars['String']>;
  /** Optional stroke color for the shield */
  shieldStroke?: InputMaybe<Scalars['String']>;
};

/** Fields for a new IconSilhouette */
export type CreateIconSilhouetteInput = {
  /** Additional data defined on the icon */
  attrs?: InputMaybe<Array<AttributeInput>>;
  /** The name of the icon, key will be generated from this value and so should be unique across the profile */
  name: Scalars['String'];
  /** SVG path data for this icon, eg: "M 100 .." */
  paths: Array<Scalars['String']>;
  /** Optional SVG viewBox for this icon */
  viewBox?: InputMaybe<Scalars['String']>;
};

/** The response after creating an IconSilhouette */
export type CreateIconSilhouettePayload = {
  __typename?: 'CreateIconSilhouettePayload';
  /** The newly created IconSilhouette */
  icon?: Maybe<IconSilhouette>;
};

/** Creates an itinerary item collection type */
export type CreateItineraryCollectionInput = {
  /** Additional data defined on the collection */
  attrs?: InputMaybe<Array<AttributeInput>>;
  /** The description for the new itinerary-collection */
  description?: InputMaybe<Scalars['String']>;
  /** The list of MediaContainers to add to the new ItineraryCollection */
  media?: InputMaybe<Array<CreateMediaContainerInput>>;
  /** Create the item positioned after the given sibling */
  positionAfterSibling?: InputMaybe<ItineraryItemPositionAfterSibling>;
  /** Creates the item positioned after all its siblings */
  positionAtEnd?: InputMaybe<ItineraryItemPositionAtEnd>;
  /** Creates the item positioned before all its siblings */
  positionAtStart?: InputMaybe<ItineraryItemPositionAtStart>;
  /** Create the item positioned before the given sibling */
  positionBeforeSibling?: InputMaybe<ItineraryItemPositionBeforeSibling>;
  /** Create the item at last position of the last itinerary-collection item */
  positionOnLastCollection?: InputMaybe<ItineraryItemPositionOnLastCollection>;
  /** Alias for the read-more attribute */
  readMoreUrl?: InputMaybe<Scalars['String']>;
  /** The synopsis for the new itinerary-collection */
  synopsis?: InputMaybe<Scalars['String']>;
  /** The tags for the new itinerary-collection */
  tags?: InputMaybe<Array<Scalars['String']>>;
  /** The title for the new itinerary-collection */
  title?: InputMaybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** The fields available after creating an itinerary collection */
export type CreateItineraryCollectionPayload = {
  __typename?: 'CreateItineraryCollectionPayload';
  /** Other changes to the itinerary caused by the creation of the itinerary-collection */
  cascaded: ItineraryItemCascadedChanges;
  /** The created itinerary collection */
  collection?: Maybe<ItineraryCollection>;
  /** The modified itinerary */
  itinerary: Itinerary;
};

/** The input fields to creating new itinerary directions items */
export type CreateItineraryDirectionsInput = {
  /** Additional data on the new itinerary */
  attrs?: InputMaybe<Array<AttributeInput>>;
  /** The description for the new itinerary-directions */
  description?: InputMaybe<Scalars['String']>;
  /** The distance of the new itinerary-directions */
  distance?: InputMaybe<Scalars['Float']>;
  /** The duration details of the new itinerary-directions */
  durations?: InputMaybe<Array<ItineraryDirectionsDurationsInput>>;
  /** The elevation details of the new itinerary-directions */
  elevation?: InputMaybe<ElevationInput>;
  /** The list of MediaContainers to add to the new ItineraryDirections */
  media?: InputMaybe<Array<CreateMediaContainerInput>>;
  /** The origin itinerary location item, in the form of item/XYZ */
  originId?: InputMaybe<Scalars['ID']>;
  /** Creates the itinerary-directions after the given sibling */
  positionAfterSibling?: InputMaybe<ItineraryItemPositionAfterSibling>;
  /** Creates the itinerary-directions to be after all its siblings */
  positionAtEnd?: InputMaybe<ItineraryItemPositionAtEnd>;
  /** Creates the itinerary-directions to be before all its siblings */
  positionAtStart?: InputMaybe<ItineraryItemPositionAtStart>;
  /** Creates the itinerary-directions before the given sibling */
  positionBeforeSibling?: InputMaybe<ItineraryItemPositionBeforeSibling>;
  /** Creates the itinerary-directions at the last position of the last itinerary-collection item */
  positionOnLastCollection?: InputMaybe<ItineraryItemPositionOnLastCollection>;
  /** Alias for the read-more attribute */
  readMoreUrl?: InputMaybe<Scalars['String']>;
  /** The route of this item, must include at least one route segment */
  route: RouteInput;
  /** The synopsis for the new itinerary-directions */
  synopsis?: InputMaybe<Scalars['String']>;
  /** The tags for the new itinerary-directions */
  tags?: InputMaybe<Array<Scalars['String']>>;
  /** The title for the new itinerary-directions */
  title?: InputMaybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** The itinerary directions return fields available after creating the itinerary directions */
export type CreateItineraryDirectionsPayload = {
  __typename?: 'CreateItineraryDirectionsPayload';
  /** Other changes to the itinerary caused by the creation of the itinerary-directions */
  cascaded: ItineraryItemCascadedChanges;
  /** The created itinerary directions item */
  directions?: Maybe<ItineraryDirections>;
  /** The modified itinerary */
  itinerary: Itinerary;
};

/** Creates a itinerary */
export type CreateItineraryInput = {
  /** Additional data on the new itinerary */
  attrs?: InputMaybe<Array<AttributeInput>>;
  /** Enable auto routing, or set to null to disable */
  autoRoute?: InputMaybe<ItineraryAutoRouteInput>;
  /** The default locale of this itinerary's content */
  defaultLocale?: InputMaybe<Scalars['String']>;
  /** The description for the new itinerary */
  description?: InputMaybe<Scalars['String']>;
  /** Elevation data of the new itinerary */
  elevation?: InputMaybe<ElevationInput>;
  /** The list of IconCompositions to add to the new Itinerary */
  icons?: InputMaybe<Array<CreateIconCompositionInput>>;
  /** The list of MediaContainers to add to the new Itinerary */
  media?: InputMaybe<Array<CreateMediaContainerInput>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: InputMaybe<Scalars['String']>;
  /** The synopsis for the new itinerary */
  synopsis?: InputMaybe<Scalars['String']>;
  /** The tags for the new itinerary */
  tags?: InputMaybe<Array<Scalars['String']>>;
  /** The title for the new itinerary */
  title?: InputMaybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** The fields to create an itinerary location */
export type CreateItineraryLocationInput = {
  /** Additional data defined on the collection */
  attrs?: InputMaybe<Array<AttributeInput>>;
  /** The bounds of the itinerary-location */
  bounds?: InputMaybe<BoundsInput>;
  /** The description for the new itinerary-location */
  description?: InputMaybe<Scalars['String']>;
  /** Set the optional icon, passed ID must exist in the Itinerary.icons */
  icon?: InputMaybe<Scalars['ID']>;
  /** The list of MediaContainers to add to the new ItineraryLocation */
  media?: InputMaybe<Array<CreateMediaContainerInput>>;
  /** Whether this is an optional location on the itinerary */
  optional?: InputMaybe<Scalars['Boolean']>;
  /** The place for this new itinerary-location */
  place: PlaceInput;
  /** The position of the itinerary-location */
  position?: InputMaybe<PositionInput>;
  /** Create the item positioned after the given sibling */
  positionAfterSibling?: InputMaybe<ItineraryItemPositionAfterSibling>;
  /** Creates the item positioned after all its siblings */
  positionAtEnd?: InputMaybe<ItineraryItemPositionAtEnd>;
  /** Creates the item positioned before all its siblings */
  positionAtStart?: InputMaybe<ItineraryItemPositionAtStart>;
  /** Create the item positioned before the given sibling */
  positionBeforeSibling?: InputMaybe<ItineraryItemPositionBeforeSibling>;
  /** Create the item at last position of the last itinerary-collection item */
  positionOnLastCollection?: InputMaybe<ItineraryItemPositionOnLastCollection>;
  /** Alias for the read-more attribute */
  readMoreUrl?: InputMaybe<Scalars['String']>;
  /** The synopsis for the new itinerary-location */
  synopsis?: InputMaybe<Scalars['String']>;
  /** The tags for the new itinerary-location */
  tags?: InputMaybe<Array<Scalars['String']>>;
  /** The title for the new itinerary-location */
  title?: InputMaybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** The fields available after creating an itinerary location */
export type CreateItineraryLocationPayload = {
  __typename?: 'CreateItineraryLocationPayload';
  /** Other changes to the itinerary caused by the creation of the itinerary-location */
  cascaded: ItineraryItemCascadedChanges;
  /** The modified itinerary */
  itinerary: Itinerary;
  /** The itinerary location that was created */
  location?: Maybe<ItineraryLocation>;
};

/** The fields available after creating an itinerary */
export type CreateItineraryPayload = {
  __typename?: 'CreateItineraryPayload';
  /** The newly created itinerary */
  itinerary?: Maybe<Itinerary>;
};

/** Create a MediaContainer in a MediaContainer list */
export type CreateMediaContainerInput = {
  /** Add the MediaContainer after another container in the list */
  positionAfter?: InputMaybe<MediaContainerPositionAfter>;
  /** Add the MediaContainer at the end of the list */
  positionAtEnd?: InputMaybe<MediaContainerPositionAtEnd>;
  /** Add the MediaContainer at the start of the list */
  positionAtStart?: InputMaybe<MediaContainerPositionAtStart>;
  /** Add the MediaContainer before another container in the list */
  positionBefore?: InputMaybe<MediaContainerPositionBefore>;
  /** ID to a MediaResource to contain */
  resourceId: Scalars['String'];
};

/** Input object to Mutation.createProfile */
export type CreateProfileInput = {
  /** Additional data defined on the profile */
  attrs?: InputMaybe<Array<AttributeInput>>;
  /** If follow requests should be automatically approved for this profile */
  autoApproveFollows?: InputMaybe<Scalars['Boolean']>;
  /** The avatar image */
  avatar?: InputMaybe<MediaContainerInput>;
  /** A short biography */
  bio?: InputMaybe<Scalars['String']>;
  /** The name of the profile */
  name: Scalars['String'];
  /** The type of profile */
  type: ProfileType;
  /** The website url */
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** Response payload to Mutation.createProfile */
export type CreateProfilePayload = {
  __typename?: 'CreateProfilePayload';
  /** The newly created profile */
  profile?: Maybe<Profile>;
};

/** Input object to Mutation.createUserAgreement */
export type CreateUserAgreementInput = {
  /** The type of agreement */
  type: Scalars['String'];
};

/** The return fields available after creating a user agreement */
export type CreateUserAgreementPayload = {
  __typename?: 'CreateUserAgreementPayload';
  /** The newly created user agreement */
  userAgreement?: Maybe<UserAgreement>;
};

/** An offset in date and/or time represented as integer differences for each datetime field */
export type DatetimeOffset = {
  /** Positive or negative difference for days */
  days?: InputMaybe<Scalars['Int']>;
  /** Positive or negative difference for hours */
  hours?: InputMaybe<Scalars['Int']>;
  /** Positive or negative difference for minutes */
  minutes?: InputMaybe<Scalars['Int']>;
  /** Positive or negative difference for months */
  months?: InputMaybe<Scalars['Int']>;
  /** Positive or negative difference for seconds */
  seconds?: InputMaybe<Scalars['Int']>;
  /** Positive or negative difference for weeks */
  weeks?: InputMaybe<Scalars['Int']>;
  /** Positive or negative difference for years */
  years?: InputMaybe<Scalars['Int']>;
};

/** The fields available after deleting a collection */
export type DeleteCollectionItemPayload = {
  __typename?: 'DeleteCollectionItemPayload';
  /** The ID of the collection, in the form of collection/XYZ */
  id?: Maybe<Scalars['ID']>;
};

/** The available payload after performing a delete collection */
export type DeleteCollectionPayload = {
  __typename?: 'DeleteCollectionPayload';
  /** The ID of the deleted collection */
  id?: Maybe<Scalars['ID']>;
};

/** The available payload after performing a delete connected app */
export type DeleteConnectedAppPayload = {
  __typename?: 'DeleteConnectedAppPayload';
  /** The ID of the deleted connected app */
  id?: Maybe<Scalars['ID']>;
};

/** The response after deleting an icon */
export type DeleteIconResourcePayload = {
  __typename?: 'DeleteIconResourcePayload';
  /** The ID of the deleted icon */
  id?: Maybe<Scalars['ID']>;
};

/** Deletes a itinerary item */
export type DeleteItineraryItemPayload = {
  __typename?: 'DeleteItineraryItemPayload';
  /** Other changes to the itinerary that caused by deleting the itinerary-item */
  cascaded: ItineraryItemCascadedChanges;
  /** The itinerary item identifier, in the form of item/XYZ */
  id?: Maybe<Scalars['ID']>;
  /** The modified itinerary */
  itinerary: Itinerary;
};

/** The result of deleting an itinerary */
export type DeleteItineraryPayload = {
  __typename?: 'DeleteItineraryPayload';
  /** The ID of the deleted itinerary */
  id?: Maybe<Scalars['ID']>;
};

/** The result of deleting a profile */
export type DeleteProfilePayload = {
  __typename?: 'DeleteProfilePayload';
  /** The ID of the profile itinerary */
  id?: Maybe<Scalars['ID']>;
};

/** Result of denying a follow request */
export type DenyProfileFollowPayload = {
  __typename?: 'DenyProfileFollowPayload';
  /** The follower profile */
  fromProfile: Profile;
  /** The status of the follow request */
  status?: Maybe<ProfileFollowStatus>;
  /** The profile being followed */
  toProfile: Profile;
};

/** Distance unit */
export enum DistanceUnit {
  Feet = 'Feet',
  Kilometers = 'Kilometers',
  Meters = 'Meters',
  Miles = 'Miles'
}

/** Response to Mutation.duplicateItinerary */
export type DuplicateItineraryPayload = {
  __typename?: 'DuplicateItineraryPayload';
  /** The newly duplicated itinerary */
  itinerary?: Maybe<Itinerary>;
};

/** Duration unit */
export enum DurationUnit {
  Hours = 'Hours',
  Minutes = 'Minutes',
  Seconds = 'Seconds'
}

/** Elevation data */
export type Elevation = {
  __typename?: 'Elevation';
  /** The cumulative elevation gain */
  gain?: Maybe<Scalars['Float']>;
  /** The cumulative elevation loss */
  loss?: Maybe<Scalars['Float']>;
  /** The maximum elevation */
  max?: Maybe<Scalars['Float']>;
  /** The minimum elevation */
  min?: Maybe<Scalars['Float']>;
};


/** Elevation data */
export type ElevationGainArgs = {
  unit?: DistanceUnit;
};


/** Elevation data */
export type ElevationLossArgs = {
  unit?: DistanceUnit;
};


/** Elevation data */
export type ElevationMaxArgs = {
  unit?: DistanceUnit;
};


/** Elevation data */
export type ElevationMinArgs = {
  unit?: DistanceUnit;
};

/** Input elevation data */
export type ElevationInput = {
  /** The cumulative elevation gain */
  gain?: InputMaybe<Scalars['Float']>;
  /** The cumulative elevation loss */
  loss?: InputMaybe<Scalars['Float']>;
  /** The maximum elevation */
  max?: InputMaybe<Scalars['Float']>;
  /** The minimum elevation */
  min?: InputMaybe<Scalars['Float']>;
};

/** Uploads a media resource */
export type FinalizeMediaUploadInput = {
  /** Text attribution for the source of the new media-resource */
  attribution?: InputMaybe<Scalars['String']>;
  /** Additional data to define on the new media-resource */
  attrs?: InputMaybe<Array<AttributeInput>>;
  /** Text caption for the new media-resource */
  caption?: InputMaybe<Scalars['String']>;
  /** Copyright details of the new media-resource */
  copyright?: InputMaybe<Scalars['String']>;
  /** List of labels to apply to the new media-resource */
  tags?: InputMaybe<Array<Scalars['String']>>;
};

/** Result of finalizing a media upload */
export type FinalizeMediaUploadPayload = {
  __typename?: 'FinalizeMediaUploadPayload';
  /** The newly created media-resource */
  resource?: Maybe<MediaResource>;
  /** The status of this media upload */
  status: MediaUploadStatus;
};

/** Result of creating a follow request */
export type FollowProfilePayload = {
  __typename?: 'FollowProfilePayload';
  /** The follower profile */
  fromProfile: Profile;
  /** The status of the follow request */
  status?: Maybe<ProfileFollowStatus>;
  /** The profile being followed */
  toProfile: Profile;
};

/** Different GeoJSON simplification algorithms */
export type GeoJsonSimplification = {
  /** The Ramer-Douglas-Peucker algorithm */
  ramerDouglasPeucker: GeoJsonSimplificationRamerDouglasPeucker;
};

/** The Ramer-Douglas-Peucker algorithm */
export type GeoJsonSimplificationRamerDouglasPeucker = {
  /** Modify the algorithm to be slower by produce higher quality results */
  highQuality?: InputMaybe<Scalars['Boolean']>;
  /** The amount of application applied, higher values result in more simplification */
  tolerance?: InputMaybe<Scalars['Float']>;
};

/** An icon with styles for use in an Itinerary */
export type IconComposition = Node & {
  __typename?: 'IconComposition';
  /** The date when the IconComposition was created */
  created: Scalars['String'];
  /** Optional fill color for the icon */
  iconFill?: Maybe<Scalars['String']>;
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
  /** A key for this IconComposition. Derived from the name */
  key: Scalars['String'];
  /** The date when the IconComposition was last modified */
  modified: Scalars['String'];
  /** A name for this IconComposition, should be unique across the itinerary */
  name: Scalars['String'];
  /** The Icon used by this IconComposition */
  resource: IconResourceEmbedded;
  /** Optional fill color for the shield */
  shieldFill?: Maybe<Scalars['String']>;
  /** Indicates which shield to use */
  shieldKey?: Maybe<Scalars['String']>;
  /** Optional stroke color for the shield */
  shieldStroke?: Maybe<Scalars['String']>;
};


/** An icon with styles for use in an Itinerary */
export type IconCompositionCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};


/** An icon with styles for use in an Itinerary */
export type IconCompositionModifiedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};

/** Connection of IconCompositions */
export type IconCompositionConnection = {
  __typename?: 'IconCompositionConnection';
  /** All the edges in this page of the connection */
  edges: Array<IconCompositionEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<IconComposition>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

/** Edge containing a IconComposition */
export type IconCompositionEdge = {
  __typename?: 'IconCompositionEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: IconComposition;
};

/** An icon for use in the UI or Map */
export type IconResource = {
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes optionally filtering by id and/or locale */
  attrs: AttributeConnection;
  /** The date when the icon was created */
  created?: Maybe<Scalars['String']>;
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
  /** The key of the icon, unique across the profile */
  key: Scalars['String'];
  /** The date when the icon was last modified */
  modified?: Maybe<Scalars['String']>;
  /** The supplied name for this icon */
  name: Scalars['String'];
  /** The profile associated with this icon */
  profile: Profile;
};


/** An icon for use in the UI or Map */
export type IconResourceAttrArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** An icon for use in the UI or Map */
export type IconResourceAttrValueArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** An icon for use in the UI or Map */
export type IconResourceAttrsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  includeNoLocale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** An icon for use in the UI or Map */
export type IconResourceCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};


/** An icon for use in the UI or Map */
export type IconResourceModifiedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};

/** Connection of IconResources */
export type IconResourceConnection = {
  __typename?: 'IconResourceConnection';
  /** All the edges in this page of the connection */
  edges: Array<IconResourceEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<IconResource>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

/** Edge containing a IconResource */
export type IconResourceEdge = {
  __typename?: 'IconResourceEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: IconResource;
};

/** A IconResource embedded in another resource */
export type IconResourceEmbedded = IconResourceFailedToLoad | IconSilhouette;

/** Represents an embedded IconResource that failed to load */
export type IconResourceFailedToLoad = Node & {
  __typename?: 'IconResourceFailedToLoad';
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
};

/** SVG path based IconResource */
export type IconSilhouette = IconResource & Node & {
  __typename?: 'IconSilhouette';
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes optionally filtering by id and/or locale */
  attrs: AttributeConnection;
  /** The date when the icon was created */
  created?: Maybe<Scalars['String']>;
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
  /** The key of the icon, unique across the profile */
  key: Scalars['String'];
  /** The date when the icon was last modified */
  modified?: Maybe<Scalars['String']>;
  /** The supplied name for this icon */
  name: Scalars['String'];
  /** SVG path data for this icon, eg: "M 100 .." */
  paths: Array<Scalars['String']>;
  /** The profile associated with this icon */
  profile: Profile;
  /** Optional SVG viewBox for this icon */
  viewBox?: Maybe<Scalars['String']>;
};


/** SVG path based IconResource */
export type IconSilhouetteAttrArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** SVG path based IconResource */
export type IconSilhouetteAttrValueArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** SVG path based IconResource */
export type IconSilhouetteAttrsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  includeNoLocale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** SVG path based IconResource */
export type IconSilhouetteCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};


/** SVG path based IconResource */
export type IconSilhouetteModifiedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};

/** Isochrone for the given position with duration and vehicle */
export type Isochrone = {
  __typename?: 'Isochrone';
  /** A bounding box around the isochrone */
  bounds: Bounds;
  /** Copyright details of the isochrone */
  copyrights: Array<Scalars['String']>;
  /** The duration of the isochrone */
  duration?: Maybe<Scalars['Float']>;
  /** The mode of transport of the isochrone */
  mode: IsochroneMode;
  /** The isochrone as a geojson polygon */
  polygon: Scalars['JSON'];
};


/** Isochrone for the given position with duration and vehicle */
export type IsochroneDurationArgs = {
  unit?: DurationUnit;
};


/** Isochrone for the given position with duration and vehicle */
export type IsochronePolygonArgs = {
  simplify?: InputMaybe<GeoJsonSimplification>;
};

/** Mode of transport for an isochrone */
export enum IsochroneMode {
  Bike = 'Bike',
  Car = 'Car',
  Foot = 'Foot'
}

/** Determine how to sort Itineraries when listing */
export type ItinerariesSort = {
  /** Sort by the created date */
  created?: InputMaybe<SortDirection>;
  /** Sort by the modified date */
  modified?: InputMaybe<SortDirection>;
  /** Sort by the itinerary title */
  title?: InputMaybe<SortDirection>;
};

/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type Itinerary = Node & {
  __typename?: 'Itinerary';
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes optionally filtering by id and/or locale */
  attrs: AttributeConnection;
  /** If true, itinerary-directions will be created to automatically route between itinerary-locations */
  autoRoute?: Maybe<ItineraryAutoRoute>;
  /** Bounds for the itinerary item */
  bounds?: Maybe<Bounds>;
  /** The immediate associated children itinerary items */
  children: ItineraryItemConnection;
  /** The date when the itinerary was created */
  created?: Maybe<Scalars['String']>;
  /** The default locale of this itinerary's content */
  defaultLocale?: Maybe<Scalars['String']>;
  /** The descending items within this itinerary item */
  descendants: ItineraryItemConnection;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** Elevation data of the itinerary */
  elevation: Elevation;
  /** Icons that are used in this itinerary */
  icons: IconCompositionConnection;
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
  /** Returns a single item from this itinerary by id */
  item?: Maybe<ItineraryItem>;
  /** The date when the draft version was last modified */
  lastDraft?: Maybe<Scalars['String']>;
  /** The date when the itinerary was last published */
  lastPublished?: Maybe<Scalars['String']>;
  /**
   * List of MediaContainers containing images or other media
   * @deprecated use mediaContainers instead
   */
  media: Array<MediaContainer>;
  /** List of MediaContainers containing images or other media */
  mediaContainers: MediaContainerConnection;
  /** The date when the itinerary was last modified */
  modified?: Maybe<Scalars['String']>;
  /** The preferred MediaContainer to use */
  preferredMedia?: Maybe<MediaContainer>;
  /** Profile that owns this itinerary */
  profile?: Maybe<Profile>;
  /** The date when this itinerary was last published. Will be null on draft versions */
  published?: Maybe<Scalars['String']>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryAttrArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryAttrValueArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryAttrsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  includeNoLocale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  depthMax?: InputMaybe<Scalars['Int']>;
  depthMin?: InputMaybe<Scalars['Int']>;
  first: Scalars['Int'];
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryIconsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryItemArgs = {
  id: Scalars['ID'];
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryLastDraftArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryLastPublishedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryMediaArgs = {
  limit?: Scalars['Int'];
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryMediaContainersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryModifiedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryPublishedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};

/** Automatically generate ItineraryDirections that connect sibling ItineraryLocations */
export type ItineraryAutoRoute = {
  __typename?: 'ItineraryAutoRoute';
  /** The default mode of transport to use for the generated ItineraryDirections */
  defaultMode: RouteMode;
};

/** Automatically generate ItineraryDirections that connect sibling ItineraryLocations */
export type ItineraryAutoRouteInput = {
  /** The default mode of transport to use for the generated ItineraryDirections, if excluded defaults to Car */
  defaultMode?: InputMaybe<RouteMode>;
};

/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollection = ItineraryItem & Node & {
  __typename?: 'ItineraryCollection';
  /** The sibling item that comes after this item */
  after?: Maybe<ItineraryItem>;
  /** All ancestors of the itinerary-item */
  ancestors: ItineraryItemConnection;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes optionally filtering by id and/or locale */
  attrs: AttributeConnection;
  /** The sibling item that comes before this item */
  before?: Maybe<ItineraryItem>;
  /** Bounds for the itinerary item */
  bounds?: Maybe<Bounds>;
  /** All the direct children of the itinerary-item */
  children: ItineraryItemConnection;
  /** All the descendants of the itinerary-item in depth-first-search order */
  descendants: ItineraryItemConnection;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** Unique identifier for the itinerary-item */
  id: Scalars['ID'];
  /** The itinerary this item belongs to */
  itinerary: Itinerary;
  /**
   * List of MediaContainers containing images or other media
   * @deprecated use mediaContainers instead
   */
  media: Array<MediaContainer>;
  /** List of MediaContainers containing images or other media */
  mediaContainers: MediaContainerConnection;
  /** The parent item of this item */
  parent?: Maybe<ItineraryItem>;
  /** The preferred MediaContainer to use */
  preferredMedia?: Maybe<MediaContainer>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** A number corresponding to the item's position compared to it's siblings. */
  siblingPositionNumber?: Maybe<Scalars['Float']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionAfterArgs = {
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionAttrArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionAttrValueArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionAttrsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  includeNoLocale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionBeforeArgs = {
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  depthMax?: InputMaybe<Scalars['Int']>;
  depthMin?: InputMaybe<Scalars['Int']>;
  first: Scalars['Int'];
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionMediaArgs = {
  limit?: Scalars['Int'];
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionMediaContainersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionParentArgs = {
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionSiblingPositionNumberArgs = {
  skipOmitList?: Scalars['Boolean'];
  skipOptional?: Scalars['Boolean'];
  type?: InputMaybe<ItineraryItemType>;
};

/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirections = ItineraryItem & Node & {
  __typename?: 'ItineraryDirections';
  /** The sibling item that comes after this item */
  after?: Maybe<ItineraryItem>;
  /** All ancestors of the itinerary-item */
  ancestors: ItineraryItemConnection;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes optionally filtering by id and/or locale */
  attrs: AttributeConnection;
  /** The sibling item that comes before this item */
  before?: Maybe<ItineraryItem>;
  /** Bounds for the itinerary-directions and it's descendants */
  bounds?: Maybe<Bounds>;
  /** All the direct children of the itinerary-item */
  children: ItineraryItemConnection;
  /** All the descendants of the itinerary-item in depth-first-search order */
  descendants: ItineraryItemConnection;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** The itinerary-location that is the ending point of the directions */
  destination?: Maybe<ItineraryLocation>;
  /** The estimated distance of this itinerary-directions */
  distance?: Maybe<Scalars['Float']>;
  /** The maximum duration of this itinerary-directions */
  durationMax?: Maybe<Scalars['Float']>;
  /** The minimum duration of this itinerary-directions */
  durationMin?: Maybe<Scalars['Float']>;
  /** The duration of this itinerary-directions */
  durations: Array<ItineraryDirectionsDurations>;
  /** The elevation details of this itinerary-directions */
  elevation: Elevation;
  /** Unique identifier for the itinerary-item */
  id: Scalars['ID'];
  /** The itinerary this item belongs to */
  itinerary: Itinerary;
  /**
   * List of MediaContainers containing images or other media
   * @deprecated use mediaContainers instead
   */
  media: Array<MediaContainer>;
  /** List of MediaContainers containing images or other media */
  mediaContainers: MediaContainerConnection;
  /** The itinerary-location that is the starting point of the directions */
  origin?: Maybe<ItineraryLocation>;
  /** The parent item of this item */
  parent?: Maybe<ItineraryItem>;
  /** The preferred MediaContainer to use */
  preferredMedia?: Maybe<MediaContainer>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** The route details of this directions item */
  route: Route;
  /** A number corresponding to the item's position compared to it's siblings. */
  siblingPositionNumber?: Maybe<Scalars['Float']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsAfterArgs = {
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsAttrArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsAttrValueArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsAttrsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  includeNoLocale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsBeforeArgs = {
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  depthMax?: InputMaybe<Scalars['Int']>;
  depthMin?: InputMaybe<Scalars['Int']>;
  first: Scalars['Int'];
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsDistanceArgs = {
  unit?: DistanceUnit;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsDurationMaxArgs = {
  unit?: DurationUnit;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsDurationMinArgs = {
  unit?: DurationUnit;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsMediaArgs = {
  limit?: Scalars['Int'];
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsMediaContainersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsParentArgs = {
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsSiblingPositionNumberArgs = {
  skipOmitList?: Scalars['Boolean'];
  skipOptional?: Scalars['Boolean'];
  type?: InputMaybe<ItineraryItemType>;
};

/** The method to determine if an ItineraryDirections is related to an ItineraryLocation */
export enum ItineraryDirectionsAccuracy {
  /** Consider itinerary-directions related if the itinerary-location matches */
  Location = 'Location',
  /** Consider itinerary-directions related if the place inside the itinerary-location matches */
  Place = 'Place'
}

/** Connection of ItineraryDirectionss */
export type ItineraryDirectionsConnection = {
  __typename?: 'ItineraryDirectionsConnection';
  /** All the edges in this page of the connection */
  edges: Array<ItineraryDirectionsEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<ItineraryDirections>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

/** Whether or not an ItineraryDirections is inbound or outbound relative to an ItineraryLocation */
export enum ItineraryDirectionsDirection {
  Inbound = 'Inbound',
  Outbound = 'Outbound'
}

/** An itinerary-directions duration value */
export type ItineraryDirectionsDurations = {
  __typename?: 'ItineraryDirectionsDurations';
  /** The duration value */
  duration: Scalars['Float'];
  /** Unique identifier for this duration */
  id: Scalars['ID'];
  /** Label for the duration */
  label?: Maybe<Scalars['String']>;
};


/** An itinerary-directions duration value */
export type ItineraryDirectionsDurationsDurationArgs = {
  unit?: DurationUnit;
};

/** Input an ItineraryDirections duration value */
export type ItineraryDirectionsDurationsInput = {
  /** The duration value */
  duration: Scalars['Float'];
  /** Label for the duration */
  label?: InputMaybe<Scalars['String']>;
};

/** Edge containing a ItineraryDirections */
export type ItineraryDirectionsEdge = {
  __typename?: 'ItineraryDirectionsEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** Whether this itinerary-directions is inbound or outbound from the itinerary-location */
  direction: ItineraryDirectionsDirection;
  /** The item */
  node: ItineraryDirections;
};

/** Restricts search for directions to a portion of an Itinerary */
export enum ItineraryDirectionsRestrict {
  /** Restrict results to include directions that are descendants of the parent item */
  ParentDescendants = 'ParentDescendants'
}

/** An item in an itinerary as part of the tree */
export type ItineraryItem = {
  /** The sibling item that comes after this item */
  after?: Maybe<ItineraryItem>;
  /** All ancestors of the itinerary-item */
  ancestors: ItineraryItemConnection;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes optionally filtering by id and/or locale */
  attrs: AttributeConnection;
  /** The sibling item that comes before this item */
  before?: Maybe<ItineraryItem>;
  /** Bounds for the itinerary item */
  bounds?: Maybe<Bounds>;
  /** All the direct children of the itinerary-item */
  children: ItineraryItemConnection;
  /** All the descendants of the itinerary-item in depth-first-search order */
  descendants: ItineraryItemConnection;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** Unique identifier for the itinerary-item */
  id: Scalars['ID'];
  /** The itinerary this item belongs to */
  itinerary: Itinerary;
  /**
   * List of MediaContainers containing images or other media
   * @deprecated use mediaContainers instead
   */
  media: Array<MediaContainer>;
  /** List of MediaContainers containing images or other media */
  mediaContainers: MediaContainerConnection;
  /** The parent item of this item */
  parent?: Maybe<ItineraryItem>;
  /** The preferred MediaContainer to use */
  preferredMedia?: Maybe<MediaContainer>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** A number corresponding to the item's position compared to it's siblings. */
  siblingPositionNumber?: Maybe<Scalars['Float']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemAfterArgs = {
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemAttrArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemAttrValueArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemAttrsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  includeNoLocale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemBeforeArgs = {
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  depthMax?: InputMaybe<Scalars['Int']>;
  depthMin?: InputMaybe<Scalars['Int']>;
  first: Scalars['Int'];
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemMediaArgs = {
  limit?: Scalars['Int'];
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemMediaContainersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemParentArgs = {
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemSiblingPositionNumberArgs = {
  skipOmitList?: Scalars['Boolean'];
  skipOptional?: Scalars['Boolean'];
  type?: InputMaybe<ItineraryItemType>;
};

/** Changes to an itinerary caused by a mutation */
export type ItineraryItemCascadedChanges = {
  __typename?: 'ItineraryItemCascadedChanges';
  /** Itinerary-items that were created due to the mutation */
  created: Array<ItineraryItem>;
  /** Itinerary-items that were deleted due to the mutation */
  deletedIds: Array<Scalars['ID']>;
  /** Itinerary-items that were updated due to the mutation */
  updated: Array<ItineraryItem>;
};

/** Connection of ItineraryItems */
export type ItineraryItemConnection = {
  __typename?: 'ItineraryItemConnection';
  /** All the edges in this page of the connection */
  edges: Array<ItineraryItemEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<ItineraryItem>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

/** Edge containing a ItineraryItem */
export type ItineraryItemEdge = {
  __typename?: 'ItineraryItemEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** List itinerary-directions connecting this node to other nodes in the connection */
  directions: ItineraryDirectionsConnection;
  /** A number corresponding to the item's position in the connection. */
  edgePositionNumber?: Maybe<Scalars['Float']>;
  /** The item */
  node: ItineraryItem;
};


/** Edge containing a ItineraryItem */
export type ItineraryItemEdgeDirectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  direction?: InputMaybe<ItineraryDirectionsDirection>;
  first: Scalars['Int'];
  limitImmediate?: Scalars['Boolean'];
  skipOptional?: Scalars['Boolean'];
};


/** Edge containing a ItineraryItem */
export type ItineraryItemEdgeEdgePositionNumberArgs = {
  skipOmitList?: Scalars['Boolean'];
  skipOptional?: Scalars['Boolean'];
  type?: InputMaybe<ItineraryItemType>;
};

/** Positions the item after a sibling */
export type ItineraryItemPositionAfterSibling = {
  /** The sibling itinerary item identifier, in the form of item/XYZ */
  siblingId?: InputMaybe<Scalars['ID']>;
};

/** Positions the item at the end position of its siblings */
export type ItineraryItemPositionAtEnd = {
  /** The parent itinerary item identifier, in the form of item/XYZ */
  parentId?: InputMaybe<Scalars['ID']>;
};

/** Positions the item at the start position of its siblings */
export type ItineraryItemPositionAtStart = {
  /** The parent itinerary item identifier, in the form of item/XYZ */
  parentId?: InputMaybe<Scalars['ID']>;
};

/** Positions the item before a sibling */
export type ItineraryItemPositionBeforeSibling = {
  /** The sibling itinerary item identifier, in the form of item/XYZ */
  siblingId?: InputMaybe<Scalars['ID']>;
};

/** Positions the itinerary item to the last position of the last itinerary collection item */
export type ItineraryItemPositionOnLastCollection = {
  /** The itinerary item identifier to limit descendent searching withing */
  searchUnder?: InputMaybe<Scalars['ID']>;
};

/** Possible types of ItineraryItem */
export enum ItineraryItemType {
  ItineraryCollection = 'ItineraryCollection',
  ItineraryDirections = 'ItineraryDirections',
  ItineraryLocation = 'ItineraryLocation'
}

/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocation = ItineraryItem & Node & {
  __typename?: 'ItineraryLocation';
  /** Address information for the itinerary location */
  address: PlaceAddress;
  /** The sibling item that comes after this item */
  after?: Maybe<ItineraryItem>;
  /** All ancestors of the itinerary-item */
  ancestors: ItineraryItemConnection;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes optionally filtering by id and/or locale */
  attrs: AttributeConnection;
  /** The sibling item that comes before this item */
  before?: Maybe<ItineraryItem>;
  /** Bounds for the itinerary-location and it's descendants */
  bounds?: Maybe<Bounds>;
  /** All the direct children of the itinerary-item */
  children: ItineraryItemConnection;
  /** Contact information for the itinerary location */
  contact: PlaceContact;
  /** All the descendants of the itinerary-item in depth-first-search order */
  descendants: ItineraryItemConnection;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** Retrieves itinerary-directions associated with this itinerary-location */
  directions: ItineraryDirectionsConnection;
  /** The IconComposition used by the this ItineraryLocation */
  icon?: Maybe<IconComposition>;
  /** Unique identifier for the itinerary-item */
  id: Scalars['ID'];
  /** The itinerary this item belongs to */
  itinerary: Itinerary;
  /**
   * List of MediaContainers containing images or other media
   * @deprecated use mediaContainers instead
   */
  media: Array<MediaContainer>;
  /** List of MediaContainers containing images or other media */
  mediaContainers: MediaContainerConnection;
  /** Whether the location is an optional stop */
  optional: Scalars['Boolean'];
  /** The parent item of this item */
  parent?: Maybe<ItineraryItem>;
  /** The place details of this location */
  place: Place;
  /** The position of the collection-location (derived from place if not overridden) */
  position: Position;
  /** The preferred MediaContainer to use */
  preferredMedia?: Maybe<MediaContainer>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** A number corresponding to the item's position compared to it's siblings. */
  siblingPositionNumber?: Maybe<Scalars['Float']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationAfterArgs = {
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationAttrArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationAttrValueArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationAttrsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  includeNoLocale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationBeforeArgs = {
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationBoundsArgs = {
  raw?: Scalars['Boolean'];
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  depthMax?: InputMaybe<Scalars['Int']>;
  depthMin?: InputMaybe<Scalars['Int']>;
  first: Scalars['Int'];
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationDirectionsArgs = {
  accuracy?: InputMaybe<ItineraryDirectionsAccuracy>;
  after?: InputMaybe<Scalars['String']>;
  direction?: InputMaybe<ItineraryDirectionsDirection>;
  first: Scalars['Int'];
  restrict?: InputMaybe<ItineraryDirectionsRestrict>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationMediaArgs = {
  limit?: Scalars['Int'];
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationMediaContainersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationParentArgs = {
  parentType?: InputMaybe<ItineraryItemType>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  segmentIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ItineraryItemType>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationSiblingPositionNumberArgs = {
  skipOmitList?: Scalars['Boolean'];
  skipOptional?: Scalars['Boolean'];
  type?: InputMaybe<ItineraryItemType>;
};

/** Connection of ItinerarySearchs */
export type ItinerarySearchConnection = {
  __typename?: 'ItinerarySearchConnection';
  /** All the edges in this page of the connection */
  edges: Array<ItinerarySearchEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<ItinerarySearchNode>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

/** Edge containing a ItinerarySearch */
export type ItinerarySearchEdge = {
  __typename?: 'ItinerarySearchEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: ItinerarySearchNode;
};

/** A result from an itinerary search */
export type ItinerarySearchNode = {
  __typename?: 'ItinerarySearchNode';
  /** Bounds for the itinerary item */
  bounds?: Maybe<Bounds>;
  /** The date when the itinerary was created */
  created?: Maybe<Scalars['String']>;
  /** The default locale of this itinerary's content */
  defaultLocale?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** Identifier from an external source this itinerary is associated with */
  externalId?: Maybe<Scalars['ID']>;
  /** The source of this itinerary's externalId */
  externalSource?: Maybe<Scalars['ID']>;
  /** The genres of this Itinerary */
  genres?: Maybe<Array<Scalars['String']>>;
  /** The Globally Unique ID of the itinerary. */
  id: Scalars['ID'];
  /** The full itinerary */
  itinerary: Itinerary;
  /** The date when the draft version was last modified */
  lastDraft?: Maybe<Scalars['String']>;
  /** The date when the itinerary was last published */
  lastPublished?: Maybe<Scalars['String']>;
  /** Whether this itinerary is publically listed */
  listed?: Maybe<Scalars['Boolean']>;
  /** The date when the itinerary was last modified */
  modified?: Maybe<Scalars['String']>;
  /** The preferred MediaContainer to use */
  preferredMedia?: Maybe<MediaContainer>;
  /** Profile that owns this itinerary */
  profile?: Maybe<Profile>;
  /** The date when this itinerary was last published. Will be null on draft versions */
  published?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** Total number of ItineraryLocations inside this Itinerary */
  totalLocations: Scalars['Int'];
  /** The type of itinerary */
  type?: Maybe<Scalars['String']>;
};


/** A result from an itinerary search */
export type ItinerarySearchNodeCreatedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};


/** A result from an itinerary search */
export type ItinerarySearchNodeLastDraftArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};


/** A result from an itinerary search */
export type ItinerarySearchNodeLastPublishedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};


/** A result from an itinerary search */
export type ItinerarySearchNodeModifiedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};


/** A result from an itinerary search */
export type ItinerarySearchNodePublishedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};

/** A container for a MediaResource */
export type MediaContainer = {
  __typename?: 'MediaContainer';
  /** Unique identifier for this container */
  id: Scalars['ID'];
  /** The MediaResource inside this container */
  resource: MediaResourceEmbedded;
};

/** Connection of MediaContainers */
export type MediaContainerConnection = {
  __typename?: 'MediaContainerConnection';
  /** All the edges in this page of the connection */
  edges: Array<MediaContainerEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<MediaContainer>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

/** Edge containing a MediaContainer */
export type MediaContainerEdge = {
  __typename?: 'MediaContainerEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: MediaContainer;
};

/** Set a singular MediaContainer */
export type MediaContainerInput = {
  /** ID to a MediaResource to contain */
  resourceId: Scalars['String'];
};

/** Positions the MediaContainer after a sibling MediaContainer */
export type MediaContainerPositionAfter = {
  /** The sibling MediaContainer identifier, if null it means the top of the list (ie. before the first sibling) */
  id?: InputMaybe<Scalars['ID']>;
};

/** Positions the MediaContainer at the end of the list */
export type MediaContainerPositionAtEnd = {
  /** Ignored, required by GraphQL which does not allow empty input objects */
  _?: InputMaybe<Scalars['Int']>;
};

/** Positions the MediaContainer at the start of the list */
export type MediaContainerPositionAtStart = {
  /** Ignored, required by GraphQL which does not allow empty input objects */
  _?: InputMaybe<Scalars['Int']>;
};

/** Positions the MediaContainer before a sibling MediaContainer */
export type MediaContainerPositionBefore = {
  /** The sibling MediaContainer identifier, if null it means the bottom of the list (ie. after the last sibling) */
  id?: InputMaybe<Scalars['ID']>;
};

/** A MediaResource representing an image */
export type MediaImage = MediaResource & {
  __typename?: 'MediaImage';
  /** Alternative text for the media-resource */
  altText?: Maybe<Scalars['String']>;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Text attribution for the source of the media-resource */
  attribution?: Maybe<Scalars['String']>;
  /** Query multiple attributes optionally filtering by id and/or locale */
  attrs: AttributeConnection;
  /** Text caption for the media-resource */
  caption?: Maybe<Scalars['String']>;
  /** Copyright details of the media-resource */
  copyright?: Maybe<Scalars['String']>;
  /** Look up one exif value in this media-image by id */
  exif?: Maybe<MediaImageExif>;
  /** Ids of all exif data in this media-image */
  exifIds: Array<Scalars['ID']>;
  /** Will be true if the resource has a caption, attribution or copyright */
  hasContent: Scalars['Boolean'];
  /** Unique identifier for the media-resource */
  id?: Maybe<Scalars['ID']>;
  /** The original width and height of the image */
  originalSize?: Maybe<Array<Scalars['Int']>>;
  /** The associated profile owner */
  profile?: Maybe<Profile>;
  /** The provider for the media */
  provider: Scalars['String'];
  /** Provides a specific source for the media, based often on different encoding or different sizing */
  source?: Maybe<MediaImageSource>;
  /** A collection of sources for the media */
  sources: Array<MediaImageSource>;
  /** A series of strings representing applied labels to the media */
  tags: Array<Scalars['String']>;
  /** Provides the URL of the media */
  url?: Maybe<Scalars['String']>;
};


/** A MediaResource representing an image */
export type MediaImageAttrArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** A MediaResource representing an image */
export type MediaImageAttrValueArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** A MediaResource representing an image */
export type MediaImageAttrsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  includeNoLocale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** A MediaResource representing an image */
export type MediaImageExifArgs = {
  id: Scalars['ID'];
};


/** A MediaResource representing an image */
export type MediaImageSourceArgs = {
  bestFit?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['String']>;
};


/** A MediaResource representing an image */
export type MediaImageUrlArgs = {
  bestFit?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['String']>;
};

/** One exif datum on a media-image */
export type MediaImageExif = {
  __typename?: 'MediaImageExif';
  /** Unique identifier of this exif datum */
  id: Scalars['ID'];
  /** The exif value */
  value: Scalars['JSON'];
};

/** An source for a media image */
export type MediaImageSource = {
  __typename?: 'MediaImageSource';
  /** The height of the media */
  height?: Maybe<Scalars['Int']>;
  /** A optional identifier for the source */
  id?: Maybe<Scalars['String']>;
  /** The content-type of the media source */
  type: Scalars['String'];
  /** The URL to the media source */
  url: Scalars['String'];
  /** The width of the media */
  width?: Maybe<Scalars['Int']>;
};

/** Representing media such as images/photos as well as other types such as video or audio */
export type MediaResource = {
  /** Alternative text for the media-resource */
  altText?: Maybe<Scalars['String']>;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Text attribution for the source of the media-resource */
  attribution?: Maybe<Scalars['String']>;
  /** Query multiple attributes optionally filtering by id and/or locale */
  attrs: AttributeConnection;
  /** Text caption for the media-resource */
  caption?: Maybe<Scalars['String']>;
  /** Copyright details of the media-resource */
  copyright?: Maybe<Scalars['String']>;
  /** Will be true if the resource has a caption, attribution or copyright */
  hasContent: Scalars['Boolean'];
  /** Unique identifier for the media-resource */
  id?: Maybe<Scalars['ID']>;
  /** The associated profile owner */
  profile?: Maybe<Profile>;
  /** The provider for the media */
  provider: Scalars['String'];
  /** A series of strings representing applied labels to the media */
  tags: Array<Scalars['String']>;
};


/** Representing media such as images/photos as well as other types such as video or audio */
export type MediaResourceAttrArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** Representing media such as images/photos as well as other types such as video or audio */
export type MediaResourceAttrValueArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** Representing media such as images/photos as well as other types such as video or audio */
export type MediaResourceAttrsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  includeNoLocale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** A MediaResource embedded in another resource */
export type MediaResourceEmbedded = MediaImage | MediaResourceFailedToLoad;

/** Represents an embedded MediaResource that failed to load */
export type MediaResourceFailedToLoad = Node & {
  __typename?: 'MediaResourceFailedToLoad';
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
};

/** The status of a Media upload process */
export enum MediaUploadStatus {
  AwaitingUpload = 'AwaitingUpload',
  Complete = 'Complete',
  Processing = 'Processing',
  ProcessingFailed = 'ProcessingFailed'
}

/** Moves the itinerary item */
export type MoveItineraryItemPayload = {
  __typename?: 'MoveItineraryItemPayload';
  /** Other changes to the itinerary that caused by moving the itinerary-item */
  cascaded: ItineraryItemCascadedChanges;
  /** The fields for the item */
  item?: Maybe<ItineraryItem>;
  /** The modified itinerary */
  itinerary: Itinerary;
};

/** Move a MediaContainer within a list, exactly one of the position arguments is required. */
export type MoveMediaContainerInput = {
  /** ID to the Container to update */
  id: Scalars['String'];
  /** Move the MediaContainer after another container in the list */
  positionAfter?: InputMaybe<MediaContainerPositionAfter>;
  /** Move the MediaContainer at the end of the list */
  positionAtEnd?: InputMaybe<MediaContainerPositionAtEnd>;
  /** Move the MediaContainer at the start of the list */
  positionAtStart?: InputMaybe<MediaContainerPositionAtStart>;
  /** Move the MediaContainer before another container in the list */
  positionBefore?: InputMaybe<MediaContainerPositionBefore>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Approve a follow request between two profiles */
  approveProfileFollow: ApproveProfileFollowPayload;
  /** Capture marketing information against the given profile */
  captureMarketingInformation: CaptureMarketingInformationPayload;
  /** Change the itinerary's default-locale as well the locale of attributes with the previous default-locale */
  changeItineraryDefaultLocale: DuplicateItineraryPayload;
  /** Claim an unclaimed handle for the given profile */
  claimProfileHandle: ClaimProfileHandlePayload;
  /** Create a billing checkout session */
  createBillingCheckoutSession: CreateBillingCheckoutSessionOutput;
  /** Create a billing portal session */
  createBillingPortalSession: CreateBillingPortalSessionOutput;
  /** The return fields available after creating a collection */
  createCollection: CreateCollectionPayload;
  /** Create a new collection-location under the given collection */
  createCollectionLocation: CreateCollectionLocationPayload;
  /** The return fields available after creating a connected app */
  createConnectedApp: CreateConnectedAppPayload;
  /** Creates a new icon */
  createIconSilhouette: CreateIconSilhouettePayload;
  /** Create a new itinerary */
  createItinerary: CreateItineraryPayload;
  /** Create a new ItineraryCollection item inside the given itinerary */
  createItineraryCollection: CreateItineraryCollectionPayload;
  /** Create a new ItineraryDirections item inside the given itinerary */
  createItineraryDirections: CreateItineraryDirectionsPayload;
  /** Create a new ItineraryLocation item inside the given itinerary */
  createItineraryLocation: CreateItineraryLocationPayload;
  /** Creates a new profile with the given fields. Can only be called with a bearer token. */
  createProfile: CreateProfilePayload;
  /** The return fields available after creating a user agreement */
  createUserAgreement: CreateUserAgreementPayload;
  /** Delete an collection */
  deleteCollection: DeleteCollectionPayload;
  /** The fields available after the collection is deleted */
  deleteCollectionItem: DeleteCollectionItemPayload;
  /** Deleted a connected app */
  deleteConnectedApp: DeleteConnectedAppPayload;
  /** Delete an icon */
  deleteIconResource: DeleteIconResourcePayload;
  /** Delete an itinerary */
  deleteItinerary: DeleteItineraryPayload;
  /** Delete an ItineraryItem */
  deleteItineraryItem: DeleteItineraryItemPayload;
  /** Delete a profile */
  deleteProfile: DeleteProfilePayload;
  /** Deny a follow request between two profiles */
  denyProfileFollow: DenyProfileFollowPayload;
  /** Duplicate an itinerary, creating copy with a new id */
  duplicateItinerary: DuplicateItineraryPayload;
  /** Finalize the media upload by creating a media-resource */
  finalizeMediaUpload: FinalizeMediaUploadPayload;
  /** Create a follow request between two profiles */
  followProfile: FollowProfilePayload;
  /** Move an ItineraryItem */
  moveItineraryItem: MoveItineraryItemPayload;
  /** Publish an itinerary making it publically accessible */
  publishItinerary: PublishItineraryPayload;
  /** Revert the draft version of an itinerary to last published version */
  revertItinerary: PublishItineraryPayload;
  /** Start a media upload */
  startMediaUpload: StartMediaUploadPayload;
  /** Remove the follow between two profiles */
  unfollowProfile: UnfollowProfilePayload;
  /** Update the billing details associated with a profile */
  updateBillingDetails: UpdateBillingDetailsOutput;
  /** Updates a collection */
  updateCollection: UpdateCollectionPayload;
  /** The fields avaialble after updating the collection location */
  updateCollectionLocation: UpdateCollectionLocationPayload;
  /** Update a connected app */
  updateConnectedApp: UpdateConnectedAppPayload;
  /** Updates a icon */
  updateIconSilhouette: UpdateIconSilhouettePayload;
  /** Updates a itinerary */
  updateItinerary: UpdateItineraryPayload;
  /** Update an ItineraryCollection */
  updateItineraryCollection: UpdateItineraryCollectionPayload;
  /** Update an ItineraryDirections */
  updateItineraryDirections: UpdateItineraryDirectionsPayload;
  /** Update an ItineraryLocation */
  updateItineraryLocation: UpdateItineraryLocationPayload;
  /** Update a media resource with updated properties */
  updateMediaResource: UpdateMediaResourcePayload;
  /** Updates the specified profile with the given fields */
  updateProfile: UpdateProfilePayload;
};


export type MutationApproveProfileFollowArgs = {
  fromProfileId: Scalars['ID'];
  toProfileId: Scalars['ID'];
};


export type MutationCaptureMarketingInformationArgs = {
  intendedUses?: InputMaybe<Scalars['String']>;
  leadSource?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizationType?: InputMaybe<Scalars['String']>;
  profileId: Scalars['ID'];
};


export type MutationChangeItineraryDefaultLocaleArgs = {
  defaultLocale: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationClaimProfileHandleArgs = {
  handle: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationCreateBillingCheckoutSessionArgs = {
  cancelUrl: Scalars['String'];
  prices: Array<BillingPriceInput>;
  profileId: Scalars['ID'];
  successUrl: Scalars['String'];
};


export type MutationCreateBillingPortalSessionArgs = {
  profileId: Scalars['ID'];
  returnUrl: Scalars['String'];
};


export type MutationCreateCollectionArgs = {
  collection: CreateCollectionInput;
  profileId: Scalars['ID'];
};


export type MutationCreateCollectionLocationArgs = {
  collectionId: Scalars['ID'];
  location: CreateCollectionLocationInput;
};


export type MutationCreateConnectedAppArgs = {
  connectedApp: CreateConnectedAppInput;
  profileId: Scalars['ID'];
};


export type MutationCreateIconSilhouetteArgs = {
  icon: CreateIconSilhouetteInput;
  profileId: Scalars['ID'];
};


export type MutationCreateItineraryArgs = {
  itinerary: CreateItineraryInput;
  profileId?: InputMaybe<Scalars['ID']>;
  publish?: Scalars['Boolean'];
};


export type MutationCreateItineraryCollectionArgs = {
  collection: CreateItineraryCollectionInput;
  itineraryId: Scalars['ID'];
  publish?: Scalars['Boolean'];
};


export type MutationCreateItineraryDirectionsArgs = {
  directions: CreateItineraryDirectionsInput;
  itineraryId: Scalars['ID'];
  publish?: Scalars['Boolean'];
};


export type MutationCreateItineraryLocationArgs = {
  autoRoute?: InputMaybe<RouteSegmentInput>;
  itineraryId: Scalars['ID'];
  location: CreateItineraryLocationInput;
  publish?: Scalars['Boolean'];
};


export type MutationCreateProfileArgs = {
  profile: CreateProfileInput;
};


export type MutationCreateUserAgreementArgs = {
  profileId?: InputMaybe<Scalars['ID']>;
  userAgreement: CreateUserAgreementInput;
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCollectionItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteConnectedAppArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteIconResourceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteItineraryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteItineraryItemArgs = {
  id: Scalars['ID'];
  publish?: Scalars['Boolean'];
};


export type MutationDeleteProfileArgs = {
  id: Scalars['ID'];
};


export type MutationDenyProfileFollowArgs = {
  fromProfileId: Scalars['ID'];
  toProfileId: Scalars['ID'];
};


export type MutationDuplicateItineraryArgs = {
  id: Scalars['ID'];
};


export type MutationFinalizeMediaUploadArgs = {
  profileId?: InputMaybe<Scalars['ID']>;
  resource?: InputMaybe<FinalizeMediaUploadInput>;
  token: Scalars['String'];
};


export type MutationFollowProfileArgs = {
  fromProfileId: Scalars['ID'];
  toProfileId: Scalars['ID'];
};


export type MutationMoveItineraryItemArgs = {
  id: Scalars['ID'];
  positionAfterSibling?: InputMaybe<ItineraryItemPositionAfterSibling>;
  positionAtEnd?: InputMaybe<ItineraryItemPositionAtEnd>;
  positionAtStart?: InputMaybe<ItineraryItemPositionAtStart>;
  positionBeforeSibling?: InputMaybe<ItineraryItemPositionBeforeSibling>;
  positionOnLastCollection?: InputMaybe<ItineraryItemPositionOnLastCollection>;
  publish?: Scalars['Boolean'];
};


export type MutationPublishItineraryArgs = {
  id: Scalars['ID'];
};


export type MutationRevertItineraryArgs = {
  id: Scalars['ID'];
};


export type MutationStartMediaUploadArgs = {
  contentType?: InputMaybe<Scalars['String']>;
  filename: Scalars['String'];
};


export type MutationUnfollowProfileArgs = {
  fromProfileId: Scalars['ID'];
  toProfileId: Scalars['ID'];
};


export type MutationUpdateBillingDetailsArgs = {
  billingDetails: UpdateBillingDetailsInput;
  profileId: Scalars['ID'];
};


export type MutationUpdateCollectionArgs = {
  collection: UpdateCollectionInput;
  id: Scalars['ID'];
};


export type MutationUpdateCollectionLocationArgs = {
  id: Scalars['ID'];
  location: UpdateCollectionLocationInput;
};


export type MutationUpdateConnectedAppArgs = {
  connectedApp: UpdateConnectedAppInput;
  id: Scalars['ID'];
};


export type MutationUpdateIconSilhouetteArgs = {
  icon: UpdateIconSilhouetteInput;
  id: Scalars['ID'];
};


export type MutationUpdateItineraryArgs = {
  id: Scalars['ID'];
  itinerary: UpdateItineraryInput;
  publish?: Scalars['Boolean'];
};


export type MutationUpdateItineraryCollectionArgs = {
  collection: UpdateItineraryCollectionInput;
  id: Scalars['ID'];
  publish?: Scalars['Boolean'];
};


export type MutationUpdateItineraryDirectionsArgs = {
  directions: UpdateItineraryDirectionsInput;
  id: Scalars['ID'];
  publish?: Scalars['Boolean'];
};


export type MutationUpdateItineraryLocationArgs = {
  id: Scalars['ID'];
  location: UpdateItineraryLocationInput;
  publish?: Scalars['Boolean'];
};


export type MutationUpdateMediaResourceArgs = {
  id: Scalars['ID'];
  resource: UpdateMediaResourceInput;
};


export type MutationUpdateProfileArgs = {
  id: Scalars['ID'];
  profile: UpdateProfileInput;
};

/** An object with a Globally Unique ID */
export type Node = {
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
};

/** Details regarding a page in a connnection */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor of the last edge in this page */
  endCursor?: Maybe<Scalars['String']>;
  /** True if there is a page after this one */
  hasNextPage: Scalars['Boolean'];
  /** True if there is a page before this one */
  hasPreviousPage: Scalars['Boolean'];
  /** The cursor of the first edge in this page */
  startCursor?: Maybe<Scalars['String']>;
};

/** A defined location in the world */
export type Place = Node & {
  __typename?: 'Place';
  /** The address of the place */
  address: PlaceAddress;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** The required attribution required when using this place information */
  attribution: Array<PlaceAttribution>;
  /** Query multiple attributes optionally filtering by id and/or locale */
  attrs: AttributeConnection;
  /** The bounding box around the place */
  bounds?: Maybe<Bounds>;
  /** Contact information supplied for this place */
  contact: PlaceContact;
  /** Source of the place data */
  contributor?: Maybe<Scalars['String']>;
  /** A longer description */
  description?: Maybe<Scalars['String']>;
  /** The operating hours for this place, as encoded in OpenStreetMap hours specification */
  hours?: Maybe<PlaceHours>;
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
  /** Layers associated to this place */
  layers: Array<PlaceLayer>;
  /** The maki icon for this place */
  maki?: Maybe<Scalars['String']>;
  /**
   * List of MediaContainers supplied with the place information, such as images of the places
   * @deprecated use mediaContainers instead
   */
  media: Array<MediaContainer>;
  /** List of MediaContainers supplied with the place information, such as images of the places */
  mediaContainers: MediaContainerConnection;
  /** The name of the place */
  name?: Maybe<Scalars['String']>;
  /** A url displaying how to navigate to this place */
  navigationUrl: Scalars['String'];
  /** The position of the place */
  position: Position;
  /** The preferred MediaContainer to use */
  preferredMedia?: Maybe<MediaContainer>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** If non-null, an error occured while resolving this place and only a subset of data will be accessible */
  resolutionError?: Maybe<ResolutionError>;
  /** A short summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A collection of strings used to label this place */
  tags: Array<Scalars['String']>;
  /** Alias for `Place.name` */
  title?: Maybe<Scalars['String']>;
  /** Calculate distance and bearing information from the specified positions to this place */
  towards: Array<PlaceTowards>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
};


/** A defined location in the world */
export type PlaceAttrArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** A defined location in the world */
export type PlaceAttrValueArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** A defined location in the world */
export type PlaceAttrsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  includeNoLocale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** A defined location in the world */
export type PlaceMediaArgs = {
  limit?: Scalars['Int'];
};


/** A defined location in the world */
export type PlaceMediaContainersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


/** A defined location in the world */
export type PlaceNavigationUrlArgs = {
  provider: PlaceNavigationUrlProvider;
};


/** A defined location in the world */
export type PlaceTowardsArgs = {
  positions: Array<PositionInput>;
};

/** The address data of a place */
export type PlaceAddress = {
  __typename?: 'PlaceAddress';
  addressLineOne?: Maybe<Scalars['String']>;
  addressLineThree?: Maybe<Scalars['String']>;
  addressLineTwo?: Maybe<Scalars['String']>;
  administrativeGroup?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  crossStreet?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  regionCode?: Maybe<Scalars['String']>;
};

/** Describes the attribution requirements associated with the place. */
export type PlaceAttribution = {
  __typename?: 'PlaceAttribution';
  /** Specific licensing information for this place if known */
  license?: Maybe<Scalars['String']>;
  /** A link required for this place */
  link?: Maybe<Scalars['String']>;
  /** Any media to be used in attribution, such as watermarks */
  mediaResource?: Maybe<MediaResourceEmbedded>;
  /** The required tracking pixel */
  pixel?: Maybe<Scalars['String']>;
  /** Text Attribution required for this place */
  text?: Maybe<Scalars['String']>;
};

/** Contact information for a Place */
export type PlaceContact = {
  __typename?: 'PlaceContact';
  /** Booking url for this place */
  bookingUrl?: Maybe<Scalars['String']>;
  /** Email address for this place */
  emailAddress?: Maybe<Scalars['String']>;
  /** Facebook page for this place */
  facebookUrl?: Maybe<Scalars['String']>;
  /** Instagram for this place */
  instagramUrl?: Maybe<Scalars['String']>;
  /** Phone number for this place */
  phoneNumber?: Maybe<Scalars['String']>;
  /** Twitter for this place */
  twitterUrl?: Maybe<Scalars['String']>;
  /** Contact website for this place */
  websiteUrl?: Maybe<Scalars['String']>;
};

/** The opening hours for a place */
export type PlaceHours = {
  __typename?: 'PlaceHours';
  /** Look up the place hours comment (if any) for the current time or a given datetime. */
  comment?: Maybe<Scalars['String']>;
  /**
   * Look up the opening hours for a specific day. Days are calculated according to the local time of the place.
   *
   * Will return a maximum of 90 days.
   */
  forDays: Array<PlaceHoursForDay>;
  /** Look up intervals where the opening hours status/comment for the place changes */
  intervals: PlaceHoursIntervalConnection;
  /**
   * The opening hours formatted in the OpenStreetMap opening_hours tag format.
   *
   * See: <https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification>
   */
  osmTag: Scalars['String'];
  /** Look up the open/closed status of the place for the current time or a given datetime. */
  status: PlaceHoursStatus;
  /** Whether or not the hours are the same each week. */
  weekStable: Scalars['Boolean'];
};


/** The opening hours for a place */
export type PlaceHoursCommentArgs = {
  datetime?: InputMaybe<Scalars['String']>;
};


/** The opening hours for a place */
export type PlaceHoursForDaysArgs = {
  days?: InputMaybe<Array<Scalars['String']>>;
  from?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<DatetimeOffset>;
  to?: InputMaybe<Scalars['String']>;
};


/** The opening hours for a place */
export type PlaceHoursIntervalsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  from?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<DatetimeOffset>;
  status?: InputMaybe<PlaceHoursStatus>;
  to?: InputMaybe<Scalars['String']>;
};


/** The opening hours for a place */
export type PlaceHoursStatusArgs = {
  datetime?: InputMaybe<Scalars['String']>;
};

/** The opening hour for a place on a specific day */
export type PlaceHoursForDay = {
  __typename?: 'PlaceHoursForDay';
  /**
   * The date of the day.
   * A full ISO 8061 formatted datetime corresponding to 12:00 am local time.
   */
  date: Scalars['String'];
  /** The opening hour intervals for this day. */
  intervals: Array<PlaceHoursInterval>;
  /** The name of any public holidays on this day. */
  publicHolidays: Array<Scalars['String']>;
};


/** The opening hour for a place on a specific day */
export type PlaceHoursForDayDateArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};


/** The opening hour for a place on a specific day */
export type PlaceHoursForDayIntervalsArgs = {
  status?: InputMaybe<PlaceHoursStatus>;
};

/** The opening hours for a place during the interval between two datetimes */
export type PlaceHoursInterval = {
  __typename?: 'PlaceHoursInterval';
  /** The place hours comment (if any) during this interval */
  comment?: Maybe<Scalars['String']>;
  /** The starting datetime of this interval */
  from: Scalars['String'];
  /**
   * The holidays that occur during this interval
   *
   * Note: Will return holidays up to a maximum of one year from the "from" date
   */
  publicHolidays: Array<PlaceHoursIntervalHoliday>;
  /** The open/closed status of the place during this interval */
  status: PlaceHoursStatus;
  /** The ending datetime of this interval, will be null if there is no following interval and the status/comment will no longer change */
  to?: Maybe<Scalars['String']>;
};


/** The opening hours for a place during the interval between two datetimes */
export type PlaceHoursIntervalFromArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};


/** The opening hours for a place during the interval between two datetimes */
export type PlaceHoursIntervalToArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};

/** Connection of PlaceHoursIntervals */
export type PlaceHoursIntervalConnection = {
  __typename?: 'PlaceHoursIntervalConnection';
  /** All the edges in this page of the connection */
  edges: Array<PlaceHoursIntervalEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<PlaceHoursInterval>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
};

/** Edge containing a PlaceHoursInterval */
export type PlaceHoursIntervalEdge = {
  __typename?: 'PlaceHoursIntervalEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: PlaceHoursInterval;
};

/** A holiday that occurs during an interval */
export type PlaceHoursIntervalHoliday = {
  __typename?: 'PlaceHoursIntervalHoliday';
  /**
   * The date of the holiday.
   * A full ISO 8061 formatted datetime corresponding to 12:00 am local time.
   */
  date: Scalars['String'];
  /** The name of the holiday. */
  name: Scalars['String'];
};


/** A holiday that occurs during an interval */
export type PlaceHoursIntervalHolidayDateArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};

/** Whether a place is open/closed or if the status is unknown */
export enum PlaceHoursStatus {
  Closed = 'Closed',
  Open = 'Open',
  Unknown = 'Unknown'
}

/** Create a new place or refer to an existing place */
export type PlaceInput = {
  /** Unique place identifier */
  id?: InputMaybe<Scalars['ID']>;
  /** The position of the place */
  position: PositionInput;
};

/** A layer on a Place */
export type PlaceLayer = {
  __typename?: 'PlaceLayer';
  /** Unique identifier for this place layer */
  id: Scalars['ID'];
  /** Name for this place layer */
  name?: Maybe<Scalars['String']>;
};

/** Navigation service provider */
export enum PlaceNavigationUrlProvider {
  Apple = 'Apple',
  Google = 'Google'
}

/** Connection of PlaceSearchs */
export type PlaceSearchConnection = {
  __typename?: 'PlaceSearchConnection';
  /** All the edges in this page of the connection */
  edges: Array<PlaceSearchEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<PlaceSearchNode>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
};

/** Edge containing a PlaceSearch */
export type PlaceSearchEdge = {
  __typename?: 'PlaceSearchEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The main line of the two line search result */
  main: TextSearchResult;
  /** The item */
  node: PlaceSearchNode;
  /** The secondary line of the two line search result */
  secondary: TextSearchResult;
  /** The one line text search result */
  single: TextSearchResult;
};

/** A result from a place search */
export type PlaceSearchNode = {
  __typename?: 'PlaceSearchNode';
  /** The address of the place */
  address: PlaceAddress;
  /** Source of the place data */
  contributor?: Maybe<Scalars['String']>;
  /** A longer description */
  description?: Maybe<Scalars['String']>;
  /** The Globally Unique ID of the place. */
  id: Scalars['ID'];
  /** Layers associated to this place */
  layers: Array<PlaceLayer>;
  /** The maki icon for this place */
  maki?: Maybe<Scalars['String']>;
  /** The name of the place */
  name?: Maybe<Scalars['String']>;
  /** The position of the place */
  position: Position;
  /** A short summary */
  synopsis?: Maybe<Scalars['String']>;
  /** Alias for `Place.name` */
  title?: Maybe<Scalars['String']>;
};

/** Where to search for place information */
export enum PlaceSearchSource {
  AustralianTourismDataWarehouse = 'AustralianTourismDataWarehouse',
  Facebook = 'Facebook',
  Geonames = 'Geonames',
  OpenAddresses = 'OpenAddresses',
  OpenStreetMap = 'OpenStreetMap',
  TripAdvisor = 'TripAdvisor',
  WhosOnFirst = 'WhosOnFirst',
  Yelp = 'Yelp',
  Zomato = 'Zomato'
}

/** Place bearing and distance information towards point */
export type PlaceTowards = {
  __typename?: 'PlaceTowards';
  /** The bearing angle from the place to the point */
  bearing: Scalars['Float'];
  /** Compass point towards given point */
  compass: CompassPoint;
  /** The distance from the place to the point */
  distance: Scalars['Float'];
  /** The point */
  position: Position;
};


/** Place bearing and distance information towards point */
export type PlaceTowardsBearingArgs = {
  unit?: AngleUnit;
};


/** Place bearing and distance information towards point */
export type PlaceTowardsDistanceArgs = {
  unit?: DistanceUnit;
};

/** A position on a map with a longitude and latitude */
export type Position = {
  __typename?: 'Position';
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes optionally filtering by id and/or locale */
  attrs: AttributeConnection;
  /** Identifier for the Position type useful for client-side caching */
  id: Scalars['ID'];
  /** The position's latitude */
  lat: Scalars['Float'];
  /** The position in the form: [latitude, longitude] */
  latLon: Array<Scalars['Float']>;
  /** PlaceLayers associated to this position */
  layers: Array<PlaceLayer>;
  /** The position's longitude */
  lon: Scalars['Float'];
  /** The position in the form: [longitude, latitude] */
  lonLat: Array<Scalars['Float']>;
};


/** A position on a map with a longitude and latitude */
export type PositionAttrArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** A position on a map with a longitude and latitude */
export type PositionAttrValueArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** A position on a map with a longitude and latitude */
export type PositionAttrsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  includeNoLocale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** A position on a map with a longitude and latitude */
export type PositionInput = {
  /** The latitude */
  lat: Scalars['Float'];
  /** The longitude */
  lon: Scalars['Float'];
};

/** Profile */
export type Profile = Node & {
  __typename?: 'Profile';
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes optionally filtering by id and/or locale */
  attrs: AttributeConnection;
  /** Indicates if follows on this profile are automatically approved */
  autoApproveFollows: Scalars['Boolean'];
  /** The avatar */
  avatar?: Maybe<MediaContainer>;
  /** Fetch billing details associated with this profile */
  billingDetails?: Maybe<BillingDetails>;
  /** Fetch billing subscriptions associated with a profile */
  billingSubscriptions: BillingSubscriptionConnection;
  /** A short biography */
  bio?: Maybe<Scalars['String']>;
  /** Fetch connected-apps associated with this profile */
  connectedApps: ConnectedAppConnection;
  /** Profiles that follow this profile */
  followers: ProfileFollowConnection;
  /** Profiles that this profile follows */
  following: ProfileFollowConnection;
  /** The (optional) unique handle of the profile */
  handle?: Maybe<Scalars['String']>;
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
  /** The name of the profile */
  name: Scalars['String'];
  /** The type of the profile */
  type: ProfileType;
  /** The Website URL */
  websiteUrl?: Maybe<Scalars['String']>;
};


/** Profile */
export type ProfileAttrArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** Profile */
export type ProfileAttrValueArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


/** Profile */
export type ProfileAttrsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  includeNoLocale?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** Profile */
export type ProfileBillingSubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


/** Profile */
export type ProfileConnectedAppsArgs = {
  after?: InputMaybe<Scalars['String']>;
  authType?: InputMaybe<ConnectedAppAuthType>;
  deleted?: InputMaybe<Scalars['Boolean']>;
  expired?: InputMaybe<Scalars['Boolean']>;
  first: Scalars['Int'];
  serviceKey?: InputMaybe<ConnectedAppServiceKey>;
  type?: InputMaybe<ConnectedAppType>;
};


/** Profile */
export type ProfileFollowersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  handle?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ProfileFollowStatus>;
};


/** Profile */
export type ProfileFollowingArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  handle?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ProfileFollowStatus>;
};

/** Connection of Profiles */
export type ProfileConnection = {
  __typename?: 'ProfileConnection';
  /** All the edges in this page of the connection */
  edges: Array<ProfileEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<Profile>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

/** Edge containing a Profile */
export type ProfileEdge = {
  __typename?: 'ProfileEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: Profile;
};

/** Connection of ProfileFollows */
export type ProfileFollowConnection = {
  __typename?: 'ProfileFollowConnection';
  /** All the edges in this page of the connection */
  edges: Array<ProfileFollowEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<Profile>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

/** Edge containing a ProfileFollow */
export type ProfileFollowEdge = {
  __typename?: 'ProfileFollowEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: Profile;
  /** The status of the follow request */
  status: ProfileFollowStatus;
};

/** Profile follow status */
export enum ProfileFollowStatus {
  Approved = 'Approved',
  Denied = 'Denied',
  Pending = 'Pending'
}

/** Profile type */
export enum ProfileType {
  Individual = 'Individual',
  Organization = 'Organization'
}

/** Response to Mutation.publishItinerary */
export type PublishItineraryPayload = {
  __typename?: 'PublishItineraryPayload';
  /** The published itinerary */
  itinerary?: Maybe<Itinerary>;
};

export type Query = {
  __typename?: 'Query';
  /** Look up all authorised profiles */
  authorizedProfiles: ProfileConnection;
  /** Fetch billing details associated with a profile */
  billingDetails?: Maybe<BillingDetails>;
  /** List of available billing prices */
  billingPrices: BillingPriceConnection;
  /** Fetch billing subscriptions associated with a profile */
  billingSubscriptions: BillingSubscriptionConnection;
  /** Retrieve a collection by id */
  collection?: Maybe<Collection>;
  /** Retrieve a collection item by id */
  collectionItem?: Maybe<CollectionItem>;
  /** Retrieve multiple collection items filtered by different criteria */
  collectionItems: CollectionItemConnection;
  /** Retrieve multiple collections */
  collections: CollectionConnection;
  /** Obtains a connected app by a provided id */
  connectedApp?: Maybe<ConnectedApp>;
  /** Search connected apps */
  connectedApps: ConnectedAppConnection;
  /** Obtains an IconResource with a provided id */
  iconResource?: Maybe<IconResource>;
  /** Retrieve multiple IconResources under a profile */
  iconResources: IconResourceConnection;
  /** Query for fetching isochrone */
  isochrone: Array<Isochrone>;
  /** Query itineraries that belong to a profile */
  itineraries: ItinerarySearchConnection;
  /** Get an itinerary by id */
  itinerary?: Maybe<Itinerary>;
  /** Retrieve a MediaContainer by id */
  mediaContainer?: Maybe<MediaContainer>;
  /** Retrieve a MediaResource by id */
  mediaResource?: Maybe<MediaResource>;
  /** Get a resource that implements Node by id */
  node?: Maybe<Node>;
  /** Get a place by id */
  place?: Maybe<Place>;
  /** Search for places based on address details */
  placeAddressSearch: PlaceSearchConnection;
  /** Autocomplete for place search */
  placeAutocompleteSearch: PlaceSearchConnection;
  /** Search for places by location */
  placeReverseSearch: PlaceSearchConnection;
  /** Search for places */
  placeSearch: PlaceSearchConnection;
  /** Get multiple places by id */
  places: Array<Maybe<Place>>;
  /** Obtains a profile by a provided id */
  profile?: Maybe<Profile>;
  /** Obtains a profile with the provided handle */
  profileByHandle?: Maybe<Profile>;
  /** Search profiles */
  profiles: ProfileConnection;
  /** Look up routes for traveling along the given positions */
  routes: RouteConnection;
  /** Query for fetching agreements made by this user */
  userAgreements: UserAgreementConnection;
};


export type QueryAuthorizedProfilesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


export type QueryBillingDetailsArgs = {
  profileId: Scalars['ID'];
};


export type QueryBillingPricesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
};


export type QueryBillingSubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  profileId: Scalars['ID'];
};


export type QueryCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryCollectionItemArgs = {
  id: Scalars['ID'];
};


export type QueryCollectionItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  bounds?: InputMaybe<BoundsInput>;
  boundsCircle?: InputMaybe<BoundsCircleInput>;
  collectionIds?: InputMaybe<Array<Scalars['ID']>>;
  externalIds?: InputMaybe<Array<Scalars['ID']>>;
  externalSources?: InputMaybe<Array<Scalars['ID']>>;
  first: Scalars['Int'];
  keyword?: InputMaybe<Scalars['String']>;
  placeIds?: InputMaybe<Array<Scalars['ID']>>;
  profileId?: InputMaybe<Scalars['ID']>;
  resourceIds?: InputMaybe<Array<Scalars['ID']>>;
  sectionIds?: InputMaybe<Array<Scalars['ID']>>;
  sort?: InputMaybe<Array<CollectionItemsSort>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  discriminator?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  profileId: Scalars['ID'];
  sort?: InputMaybe<Array<CollectionsSort>>;
};


export type QueryConnectedAppArgs = {
  id: Scalars['ID'];
};


export type QueryConnectedAppsArgs = {
  after?: InputMaybe<Scalars['String']>;
  authType?: InputMaybe<ConnectedAppAuthType>;
  deleted?: InputMaybe<Scalars['Boolean']>;
  expired?: InputMaybe<Scalars['Boolean']>;
  first: Scalars['Int'];
  profileId: Scalars['ID'];
  serviceKey?: InputMaybe<ConnectedAppServiceKey>;
  type?: InputMaybe<ConnectedAppType>;
};


export type QueryIconResourceArgs = {
  id: Scalars['ID'];
};


export type QueryIconResourcesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  profileId: Scalars['ID'];
};


export type QueryIsochroneArgs = {
  center: PositionInput;
  duration: Scalars['Int'];
  mode: IsochroneMode;
};


export type QueryItinerariesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  keyword?: InputMaybe<Scalars['String']>;
  profileId: Scalars['ID'];
  sort?: InputMaybe<Array<ItinerariesSort>>;
};


export type QueryItineraryArgs = {
  id: Scalars['ID'];
};


export type QueryMediaContainerArgs = {
  id: Scalars['ID'];
};


export type QueryMediaResourceArgs = {
  id: Scalars['ID'];
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryPlaceArgs = {
  id: Scalars['ID'];
};


export type QueryPlaceAddressSearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  borough?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  county?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  layers?: InputMaybe<Array<Scalars['String']>>;
  locality?: InputMaybe<Scalars['String']>;
  maxLabelLength?: InputMaybe<Scalars['Int']>;
  neighbourhood?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  sources?: InputMaybe<Array<PlaceSearchSource>>;
  streetAddress?: InputMaybe<Scalars['String']>;
  thirdPartyQuery?: InputMaybe<Scalars['JSON']>;
};


export type QueryPlaceAutocompleteSearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  bounds?: InputMaybe<BoundsInput>;
  first: Scalars['Int'];
  focus?: InputMaybe<PositionInput>;
  layers?: InputMaybe<Array<Scalars['String']>>;
  maxLabelLength?: InputMaybe<Scalars['Int']>;
  sources?: InputMaybe<Array<PlaceSearchSource>>;
  text: Scalars['String'];
  thirdPartyQuery?: InputMaybe<Scalars['JSON']>;
};


export type QueryPlaceReverseSearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  focus: PositionInput;
  layers?: InputMaybe<Array<Scalars['String']>>;
  maxLabelLength?: InputMaybe<Scalars['Int']>;
  sources?: InputMaybe<Array<PlaceSearchSource>>;
  thirdPartyQuery?: InputMaybe<Scalars['JSON']>;
};


export type QueryPlaceSearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  bounds?: InputMaybe<BoundsInput>;
  first: Scalars['Int'];
  focus?: InputMaybe<PositionInput>;
  layers?: InputMaybe<Array<Scalars['String']>>;
  maxLabelLength?: InputMaybe<Scalars['Int']>;
  sources?: InputMaybe<Array<PlaceSearchSource>>;
  text?: InputMaybe<Scalars['String']>;
  thirdPartyQuery?: InputMaybe<Scalars['JSON']>;
};


export type QueryPlacesArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryProfileArgs = {
  id: Scalars['ID'];
};


export type QueryProfileByHandleArgs = {
  handle: Scalars['String'];
};


export type QueryProfilesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  handle: Scalars['String'];
};


export type QueryRoutesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  mode?: RouteSearchableMode;
  positions: Array<PositionInput>;
};


export type QueryUserAgreementsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  profileId?: InputMaybe<Scalars['ID']>;
};

/** Error which occurred while resolving an ID */
export type ResolutionError = {
  __typename?: 'ResolutionError';
  /** Human readable error message */
  message: Scalars['String'];
};

/** Response to Mutation.revertItinerary */
export type RevertItineraryPayload = {
  __typename?: 'RevertItineraryPayload';
  /** The reverted itinerary */
  itinerary?: Maybe<Itinerary>;
};

/** The representation of a route path taken */
export type Route = {
  __typename?: 'Route';
  /** The set of all RouteModes used by all the segments */
  modes: Array<RouteMode>;
  /** The segments of this route */
  segments: Array<RouteSegment>;
};

/** Connection of Routes */
export type RouteConnection = {
  __typename?: 'RouteConnection';
  /** All the edges in this page of the connection */
  edges: Array<RouteEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<Route>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
};

/** Edge containing a Route */
export type RouteEdge = {
  __typename?: 'RouteEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: Route;
};

/** Create a Route */
export type RouteInput = {
  /** The segments of this route */
  segments: Array<RouteSegmentInput>;
};

/** Modes of transport */
export enum RouteMode {
  Abseiling = 'Abseiling',
  AdventureBike = 'AdventureBike',
  AerialLift = 'AerialLift',
  AlpineSki = 'AlpineSki',
  BackcountrySki = 'BackcountrySki',
  Barge = 'Barge',
  Bike = 'Bike',
  Boat = 'Boat',
  Bus = 'Bus',
  CableCar = 'CableCar',
  Camel = 'Camel',
  Canoe = 'Canoe',
  Car = 'Car',
  Caving = 'Caving',
  Chairlift = 'Chairlift',
  CrossCountrySky = 'CrossCountrySky',
  Cruise = 'Cruise',
  Cycling = 'Cycling',
  Dirtbike = 'Dirtbike',
  Dive = 'Dive',
  DogSled = 'DogSled',
  ElectricCar = 'ElectricCar',
  ElectricMotorbike = 'ElectricMotorbike',
  Ferry = 'Ferry',
  Foot = 'Foot',
  FourWheelDriving = 'FourWheelDriving',
  Funicular = 'Funicular',
  Geocaching = 'Geocaching',
  Glider = 'Glider',
  Golfcar = 'Golfcar',
  Gondola = 'Gondola',
  HandGliding = 'HandGliding',
  Handcycle = 'Handcycle',
  Helicopter = 'Helicopter',
  Hike = 'Hike',
  Hitchhiking = 'Hitchhiking',
  Horse = 'Horse',
  HorseAndCart = 'HorseAndCart',
  HotAirBaloon = 'HotAirBaloon',
  IceSkate = 'IceSkate',
  InlineSkate = 'InlineSkate',
  JetBoat = 'JetBoat',
  Jetski = 'Jetski',
  Kayak = 'Kayak',
  Kitesurf = 'Kitesurf',
  LightAircraft = 'LightAircraft',
  LightRail = 'LightRail',
  Minibus = 'Minibus',
  Monorail = 'Monorail',
  Motorcycle = 'Motorcycle',
  MountainBike = 'MountainBike',
  Mountaineering = 'Mountaineering',
  NordicSki = 'NordicSki',
  NordicWalking = 'NordicWalking',
  Orienteering = 'Orienteering',
  Plane = 'Plane',
  Quadbike = 'Quadbike',
  Rickshaw = 'Rickshaw',
  RockClimbing = 'RockClimbing',
  Row = 'Row',
  Rowboat = 'Rowboat',
  Run = 'Run',
  Sail = 'Sail',
  Scooter = 'Scooter',
  Skateboarding = 'Skateboarding',
  Skydive = 'Skydive',
  Snorkel = 'Snorkel',
  Snowboard = 'Snowboard',
  Snowshoe = 'Snowshoe',
  StandUpPaddleBoard = 'StandUpPaddleBoard',
  Surf = 'Surf',
  Swim = 'Swim',
  TaxiOrRideshare = 'TaxiOrRideshare',
  TrailRun = 'TrailRun',
  Train = 'Train',
  Transit = 'Transit',
  Trekking = 'Trekking',
  Tubing = 'Tubing',
  WalkOrRide = 'WalkOrRide',
  WaterSki = 'WaterSki',
  WaterTaxi = 'WaterTaxi',
  Wheelchair = 'Wheelchair',
  WhiteWaterRafting = 'WhiteWaterRafting',
  Windsurf = 'Windsurf',
  ZipLine = 'ZipLine'
}

/** Subset of RouteModes supporting route search */
export enum RouteSearchableMode {
  Bike = 'Bike',
  Bus = 'Bus',
  Camel = 'Camel',
  Car = 'Car',
  Cycling = 'Cycling',
  ElectricCar = 'ElectricCar',
  ElectricMotorbike = 'ElectricMotorbike',
  Foot = 'Foot',
  FourWheelDriving = 'FourWheelDriving',
  Hike = 'Hike',
  Hitchhiking = 'Hitchhiking',
  Horse = 'Horse',
  HorseAndCart = 'HorseAndCart',
  InlineSkate = 'InlineSkate',
  Minibus = 'Minibus',
  Motorcycle = 'Motorcycle',
  MountainBike = 'MountainBike',
  NordicWalking = 'NordicWalking',
  Rickshaw = 'Rickshaw',
  Run = 'Run',
  Scooter = 'Scooter',
  Snowshoe = 'Snowshoe',
  TaxiOrRideshare = 'TaxiOrRideshare',
  TrailRun = 'TrailRun',
  Trekking = 'Trekking',
  WalkOrRide = 'WalkOrRide',
  Wheelchair = 'Wheelchair'
}

/** One segment of a Route */
export type RouteSegment = {
  __typename?: 'RouteSegment';
  /** The estimated distance for this path */
  distance?: Maybe<Scalars['Float']>;
  /** The estimated duration for this path */
  duration?: Maybe<Scalars['Float']>;
  /** The estimated elevation details of this route */
  elevation: Elevation;
  /** The representation of this path as encoded as geojson FeatureCollection type */
  geoJson?: Maybe<Scalars['JSON']>;
  /** WARNING: this ID is unstable, modifying the route might change the ID */
  id: Scalars['ID'];
  /** The mode of transport to be taken. eg: car, walk, kayak, etc */
  mode: RouteMode;
  /** The path representation as encoded as a polyline format */
  polyline?: Maybe<Scalars['String']>;
  /** The way positions along this route */
  positions?: Maybe<Array<Position>>;
  /** Whether this route was searched for */
  useRouteSearching: Scalars['Boolean'];
};


/** One segment of a Route */
export type RouteSegmentDistanceArgs = {
  unit?: DistanceUnit;
};


/** One segment of a Route */
export type RouteSegmentDurationArgs = {
  unit?: DurationUnit;
};


/** One segment of a Route */
export type RouteSegmentGeoJsonArgs = {
  simplify?: InputMaybe<GeoJsonSimplification>;
};


/** One segment of a Route */
export type RouteSegmentPolylineArgs = {
  simplify?: InputMaybe<GeoJsonSimplification>;
};

/** Create a RouteSegment */
export type RouteSegmentInput = {
  /** The distance for this route segment */
  distance?: InputMaybe<Scalars['Float']>;
  /** The duration for this route segment */
  duration?: InputMaybe<Scalars['Float']>;
  /** The mode of transport to be taken on this segment, defaults to Car */
  mode?: InputMaybe<RouteMode>;
  /** The way positions along this route */
  positions?: InputMaybe<Array<PositionInput>>;
  /** Whether to plan out a route using the positions. Defaults to true if the mode is searchable and otherwise will be set to false */
  useRouteSearching?: InputMaybe<Scalars['Boolean']>;
};

/** Determines which order a specific field will be ordered in */
export enum SortDirection {
  /** Sort in ascending order */
  Asc = 'Asc',
  /** Sort in descending order */
  Desc = 'Desc'
}

/** Result of starting a media upload */
export type StartMediaUploadPayload = {
  __typename?: 'StartMediaUploadPayload';
  /** Data to pass with the upload */
  fields: Scalars['JSON'];
  /** The upload token, required when finalising the upload */
  token: Scalars['String'];
  /** The url to upload media to (via HTTP POST) */
  url: Scalars['String'];
};

/** A text search result with a label and matches to highlight */
export type TextSearchResult = {
  __typename?: 'TextSearchResult';
  /** Search result label */
  label: Scalars['String'];
  /** Text substring matches in the label text */
  matches: Array<TextSearchResultMatch>;
};

/** A details of a single result from a text search */
export type TextSearchResultMatch = {
  __typename?: 'TextSearchResultMatch';
  /** Length of the match */
  length: Scalars['Int'];
  /** Start of the match */
  offset: Scalars['Int'];
};

/** Result of unfollowing a profile */
export type UnfollowProfilePayload = {
  __typename?: 'UnfollowProfilePayload';
  /** The follower profile */
  fromProfile: Profile;
  /** The status of the follow request */
  status?: Maybe<ProfileFollowStatus>;
  /** The profile being followed */
  toProfile: Profile;
};

/** The fields to change when updating the billing details */
export type UpdateBillingDetailsInput = {
  /** The billing address */
  address: BillingAddressInput;
  /** The email address */
  emailAddress: Scalars['String'];
  /** The family name */
  familyName: Scalars['String'];
  /** The given name */
  givenName: Scalars['String'];
  /** The optional organization name */
  organization?: InputMaybe<Scalars['String']>;
};

/** The output after updating the billing details */
export type UpdateBillingDetailsOutput = {
  __typename?: 'UpdateBillingDetailsOutput';
  /** The updated billing details */
  billingDetails: BillingDetails;
};

/** Updates a collection */
export type UpdateCollectionInput = {
  /** Add multiple Media with MediaResources */
  createMedia?: InputMaybe<Array<CreateMediaContainerInput>>;
  /** Delete attributes to the collection */
  deleteAttrs?: InputMaybe<Array<AttributeIdentifierInput>>;
  /** Delete one or move MediaContainers */
  deleteMedia?: InputMaybe<Array<Scalars['ID']>>;
  /** The description for the collection */
  description?: InputMaybe<Scalars['String']>;
  /** Move one or move MediaContainers */
  moveMedia?: InputMaybe<Array<MoveMediaContainerInput>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: InputMaybe<Scalars['String']>;
  /** The synopsis for the collection */
  synopsis?: InputMaybe<Scalars['String']>;
  /** The tags for the collection */
  tags?: InputMaybe<Array<Scalars['String']>>;
  /** The title for the collection */
  title?: InputMaybe<Scalars['String']>;
  /** Update one or move MediaContainers */
  updateMedia?: InputMaybe<Array<UpdateMediaContainerInput>>;
  /** Insert or update attributes to the collection */
  upsertAttrs?: InputMaybe<Array<AttributeInput>>;
  /** Alias for the website-url attribute */
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** The fields for the collection location to update */
export type UpdateCollectionLocationInput = {
  /** Add multiple Media with MediaResources */
  createMedia?: InputMaybe<Array<CreateMediaContainerInput>>;
  /** Delete attributes to the collection */
  deleteAttrs?: InputMaybe<Array<AttributeIdentifierInput>>;
  /** Delete one or move MediaContainers */
  deleteMedia?: InputMaybe<Array<Scalars['ID']>>;
  /** A longer description content for this item */
  description?: InputMaybe<Scalars['String']>;
  /** Identifier from an external source this item is associated with */
  externalId?: InputMaybe<Scalars['ID']>;
  /** The source of this item's externalId */
  externalSource?: InputMaybe<Scalars['ID']>;
  /** Move one or move MediaContainers */
  moveMedia?: InputMaybe<Array<MoveMediaContainerInput>>;
  /** The associated place information for this item */
  place?: InputMaybe<PlaceInput>;
  /** Override for the place's position */
  position?: InputMaybe<PositionInput>;
  /** Shortcut for setting the read-more attribute */
  readMoreUrl?: InputMaybe<Scalars['String']>;
  /** One or more sections for this item */
  sectionIds?: InputMaybe<Array<Scalars['ID']>>;
  /** A longer description content for this item */
  synopsis?: InputMaybe<Scalars['String']>;
  /** A collection of strings used to label this item */
  tags?: InputMaybe<Array<Scalars['String']>>;
  /** Title for this item */
  title?: InputMaybe<Scalars['String']>;
  /** Update one or move MediaContainers */
  updateMedia?: InputMaybe<Array<UpdateMediaContainerInput>>;
  /** Insert or update attributes to the collection */
  upsertAttrs?: InputMaybe<Array<AttributeInput>>;
  /** Shortcut for setting the website-url attribute */
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** The fields available after the collection location has been updated */
export type UpdateCollectionLocationPayload = {
  __typename?: 'UpdateCollectionLocationPayload';
  /** The collection location that was updated */
  location?: Maybe<CollectionLocation>;
};

/** The available fields after updating a collection */
export type UpdateCollectionPayload = {
  __typename?: 'UpdateCollectionPayload';
  /** The updated collection */
  collection?: Maybe<Collection>;
};

/** Updates a connected app */
export type UpdateConnectedAppInput = {
  /** The type of the connected-app */
  authType?: InputMaybe<ConnectedAppAuthType>;
  /** Encrypted JSON */
  privateConfiguration?: InputMaybe<Scalars['String']>;
  /** 3rd party ID or account ID */
  publicId?: InputMaybe<Scalars['ID']>;
  /** Any specific scope that has been granted to the 3rd party application */
  scope?: InputMaybe<Scalars['String']>;
};

/** The available fields after updating a connected app */
export type UpdateConnectedAppPayload = {
  __typename?: 'UpdateConnectedAppPayload';
  /** The updated connected app */
  connectedApp?: Maybe<ConnectedApp>;
};

/** Update an IconComposition */
export type UpdateIconCompositionInput = {
  /** Change the fill color for the icon, set to null to remove the fill */
  iconFill?: InputMaybe<Scalars['String']>;
  /** ID of the IconComposition to update */
  id: Scalars['String'];
  /** Change the name */
  name?: InputMaybe<Scalars['String']>;
  /** Change the Icon used by this IconComposition */
  resourceId?: InputMaybe<Scalars['ID']>;
  /** Change the fill color for the shield, set to null to remove the fill */
  shieldFill?: InputMaybe<Scalars['String']>;
  /** Change which shield to use for the icon, set to null to clear the shieldFill and shieldStroke as well */
  shieldKey?: InputMaybe<Scalars['String']>;
  /** Change the stroke color for the shield, set to null to remove the stroke */
  shieldStroke?: InputMaybe<Scalars['String']>;
};

/** Fields for updating an IconSilhouette */
export type UpdateIconSilhouetteInput = {
  /** Delete attributes to the icon */
  deleteAttrs?: InputMaybe<Array<AttributeIdentifierInput>>;
  /** Change the name of this icon */
  name?: InputMaybe<Scalars['String']>;
  /** SVG path data for this icon, eg: "M 100 .." */
  paths?: InputMaybe<Array<Scalars['String']>>;
  /** Insert or update attributes to the icon */
  upsertAttrs?: InputMaybe<Array<AttributeInput>>;
  /** Optional SVG viewBox for this icon */
  viewBox?: InputMaybe<Scalars['String']>;
};

/** The response after updating an icon */
export type UpdateIconSilhouettePayload = {
  __typename?: 'UpdateIconSilhouettePayload';
  /** The updated icon */
  icon?: Maybe<IconSilhouette>;
};

/** The intinerary collection fields to update */
export type UpdateItineraryCollectionInput = {
  /** Add multiple Media with MediaResources */
  createMedia?: InputMaybe<Array<CreateMediaContainerInput>>;
  /** Delete attributes to the itinerary-collection */
  deleteAttrs?: InputMaybe<Array<AttributeIdentifierInput>>;
  /** Delete one or move MediaContainers */
  deleteMedia?: InputMaybe<Array<Scalars['ID']>>;
  /** The description for the itinerary-collection */
  description?: InputMaybe<Scalars['String']>;
  /** Move one or move MediaContainers */
  moveMedia?: InputMaybe<Array<MoveMediaContainerInput>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: InputMaybe<Scalars['String']>;
  /** The synopsis for the itinerary-collection */
  synopsis?: InputMaybe<Scalars['String']>;
  /** The tags for the itinerary-collection */
  tags?: InputMaybe<Array<Scalars['String']>>;
  /** The title for the itinerary-collection */
  title?: InputMaybe<Scalars['String']>;
  /** Update one or move MediaContainers */
  updateMedia?: InputMaybe<Array<UpdateMediaContainerInput>>;
  /** Insert or update attributes to the itinerary-collection */
  upsertAttrs?: InputMaybe<Array<AttributeInput>>;
  /** Alias for the website-url attribute */
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** The fields available after updating the itinerary collection */
export type UpdateItineraryCollectionPayload = {
  __typename?: 'UpdateItineraryCollectionPayload';
  /** Other changes to the itinerary that caused by deleting the itinerary-item */
  cascaded: ItineraryItemCascadedChanges;
  /** The itinerary collection that was created */
  collection?: Maybe<ItineraryCollection>;
  /** The modified itinerary */
  itinerary: Itinerary;
};

/** The input fields to update the itinerary directions */
export type UpdateItineraryDirectionsInput = {
  /** Add multiple Media with MediaResources */
  createMedia?: InputMaybe<Array<CreateMediaContainerInput>>;
  /** Delete attributes to the collection */
  deleteAttrs?: InputMaybe<Array<AttributeIdentifierInput>>;
  /** Delete one or move MediaContainers */
  deleteMedia?: InputMaybe<Array<Scalars['ID']>>;
  /** The description for the itinerary-directions */
  description?: InputMaybe<Scalars['String']>;
  /** The distance of the itinerary-directions */
  distance?: InputMaybe<Scalars['Float']>;
  /** The duration details of the new itinerary-directions */
  durations?: InputMaybe<Array<ItineraryDirectionsDurationsInput>>;
  /** The elevation details of the new itinerary-directions */
  elevation?: InputMaybe<ElevationInput>;
  /** Move one or move MediaContainers */
  moveMedia?: InputMaybe<Array<MoveMediaContainerInput>>;
  /** The origin/starting itinerary location item, in the form of item/XYZ */
  originId?: InputMaybe<Scalars['ID']>;
  /** Alias for the read-more attribute */
  readMoreUrl?: InputMaybe<Scalars['String']>;
  /** The route of this item, must include at least one route segment */
  route?: InputMaybe<RouteInput>;
  /** The synopsis for the itinerary-directions */
  synopsis?: InputMaybe<Scalars['String']>;
  /** The tags for the itinerary-directions */
  tags?: InputMaybe<Array<Scalars['String']>>;
  /** The title for the itinerary directions */
  title?: InputMaybe<Scalars['String']>;
  /** Update one or move MediaContainers */
  updateMedia?: InputMaybe<Array<UpdateMediaContainerInput>>;
  /** Insert or update attributes to the collection */
  upsertAttrs?: InputMaybe<Array<AttributeInput>>;
  /** Alias for the website-url attribute */
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** The fields available after updating the itinerary directions item */
export type UpdateItineraryDirectionsPayload = {
  __typename?: 'UpdateItineraryDirectionsPayload';
  /** Other changes to the itinerary that caused by deleting the itinerary-item */
  cascaded: ItineraryItemCascadedChanges;
  /** The updated itinerary directions item */
  directions?: Maybe<ItineraryDirections>;
  /** The modified itinerary */
  itinerary: Itinerary;
};

/** Updates a itinerary */
export type UpdateItineraryInput = {
  /** Enable auto routing, or set to null to disable */
  autoRoute?: InputMaybe<ItineraryAutoRouteInput>;
  /** Remove any routes that were created with auto routing */
  autoRouteRemoveExisting?: InputMaybe<Scalars['Boolean']>;
  /** Add new IconCompositions to the itinerary */
  createIcons?: InputMaybe<Array<CreateIconCompositionInput>>;
  /** Add multiple Media with MediaResources */
  createMedia?: InputMaybe<Array<CreateMediaContainerInput>>;
  /** The default locale of this itinerary's content */
  defaultLocale?: InputMaybe<Scalars['String']>;
  /** Delete attributes to the collection */
  deleteAttrs?: InputMaybe<Array<AttributeIdentifierInput>>;
  /** Delete one or move IconCompositions */
  deleteIcons?: InputMaybe<Array<Scalars['ID']>>;
  /** Delete one or move MediaContainers */
  deleteMedia?: InputMaybe<Array<Scalars['ID']>>;
  /** The description for the itinerary */
  description?: InputMaybe<Scalars['String']>;
  /** Elevation data of the new itinerary */
  elevation?: InputMaybe<ElevationInput>;
  /** Move one or move MediaContainers */
  moveMedia?: InputMaybe<Array<MoveMediaContainerInput>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: InputMaybe<Scalars['String']>;
  /** The synopsis for the itinerary */
  synopsis?: InputMaybe<Scalars['String']>;
  /** The tags for the itinerary */
  tags?: InputMaybe<Array<Scalars['String']>>;
  /** The title for the itinerary */
  title?: InputMaybe<Scalars['String']>;
  /** Update IconCompositions in the itinerary */
  updateIcons?: InputMaybe<Array<UpdateIconCompositionInput>>;
  /** Update one or move MediaContainers */
  updateMedia?: InputMaybe<Array<UpdateMediaContainerInput>>;
  /** Insert or update attributes to the collection */
  upsertAttrs?: InputMaybe<Array<AttributeInput>>;
  /** Alias for the website-url attribute */
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** The fields to update on an itinerary location */
export type UpdateItineraryLocationInput = {
  /** The bounds of the itinerary-location */
  bounds?: InputMaybe<BoundsInput>;
  /** Add multiple Media with MediaResources */
  createMedia?: InputMaybe<Array<CreateMediaContainerInput>>;
  /** Delete attributes to the itinerary-collection */
  deleteAttrs?: InputMaybe<Array<AttributeIdentifierInput>>;
  /** Delete one or move MediaContainers */
  deleteMedia?: InputMaybe<Array<Scalars['ID']>>;
  /** The description for the itinerary-location */
  description?: InputMaybe<Scalars['String']>;
  /** Set or remove the optional icon, passed ID must exist in the Itinerary.icons */
  icon?: InputMaybe<Scalars['ID']>;
  /** Move one or move MediaContainers */
  moveMedia?: InputMaybe<Array<MoveMediaContainerInput>>;
  /** Whether the location specified is optional on the itinerary */
  optional?: InputMaybe<Scalars['Boolean']>;
  /** The place for this itinerary-location */
  place?: InputMaybe<PlaceInput>;
  /** The place for this itinerary-location */
  position?: InputMaybe<PositionInput>;
  /** Alias for the read-more attribute */
  readMoreUrl?: InputMaybe<Scalars['String']>;
  /** The synopsis for the itinerary-location */
  synopsis?: InputMaybe<Scalars['String']>;
  /** The tags for the itinerary-location */
  tags?: InputMaybe<Array<Scalars['String']>>;
  /** The title for the itinerary-location */
  title?: InputMaybe<Scalars['String']>;
  /** Update one or move MediaContainers */
  updateMedia?: InputMaybe<Array<UpdateMediaContainerInput>>;
  /** Insert or update attributes to the itinerary-collection */
  upsertAttrs?: InputMaybe<Array<AttributeInput>>;
  /** Alias for the website-url attribute */
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** The fields available after updating a location */
export type UpdateItineraryLocationPayload = {
  __typename?: 'UpdateItineraryLocationPayload';
  /** Other changes to the itinerary that caused by deleting the itinerary-item */
  cascaded: ItineraryItemCascadedChanges;
  /** The modified itinerary */
  itinerary: Itinerary;
  /** The updated itinerary location */
  location?: Maybe<ItineraryLocation>;
};

/** The available fields after updating a itinerary */
export type UpdateItineraryPayload = {
  __typename?: 'UpdateItineraryPayload';
  /** Other changes to the itinerary that caused by updating the itinerary */
  cascaded: ItineraryItemCascadedChanges;
  /** The updated itinerary */
  itinerary?: Maybe<Itinerary>;
};

/** Update a MediaContainer in a MediaContainer list */
export type UpdateMediaContainerInput = {
  /** ID to the MediaContainer to update */
  id: Scalars['String'];
  /** ID to a MediaResource */
  resourceId?: InputMaybe<Scalars['String']>;
};

/** Updates a media resource */
export type UpdateMediaResourceInput = {
  /** Text attribution for the source of the media-resource */
  attribution?: InputMaybe<Scalars['String']>;
  /** Text caption for the media-resource */
  caption?: InputMaybe<Scalars['String']>;
  /** Copyright details of the media-resource */
  copyright?: InputMaybe<Scalars['String']>;
  /** Delete attributes to the media-resource */
  deleteAttrs?: InputMaybe<Array<AttributeIdentifierInput>>;
  /** List of labels to apply to the media-resource */
  tags?: InputMaybe<Array<Scalars['String']>>;
  /** Insert or update attributes to the media-resource */
  upsertAttrs?: InputMaybe<Array<AttributeInput>>;
};

/** Response payload to Mutation.updateMediaResource */
export type UpdateMediaResourcePayload = {
  __typename?: 'UpdateMediaResourcePayload';
  /** The updated media-resource */
  resource: MediaResource;
};

/** Input object to Mutation.updateProfile */
export type UpdateProfileInput = {
  /** If follow requests should be automatically approved for this profile */
  autoApproveFollows?: InputMaybe<Scalars['Boolean']>;
  /** The avatar image */
  avatar?: InputMaybe<MediaContainerInput>;
  /** A short biography */
  bio?: InputMaybe<Scalars['String']>;
  /** Delete attributes to the profile */
  deleteAttrs?: InputMaybe<Array<AttributeIdentifierInput>>;
  /** The name of the profile */
  name?: InputMaybe<Scalars['String']>;
  /** The type of profile */
  type?: InputMaybe<ProfileType>;
  /** Insert or update attributes to the profile */
  upsertAttrs?: InputMaybe<Array<AttributeInput>>;
  /** The website url */
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** Response payload to Mutation.updateProfile */
export type UpdateProfilePayload = {
  __typename?: 'UpdateProfilePayload';
  /** The updated profile */
  profile?: Maybe<Profile>;
};

/** An agreement made by a user */
export type UserAgreement = Node & {
  __typename?: 'UserAgreement';
  /** The date when the agreement was made */
  date?: Maybe<Scalars['String']>;
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
  /** Profile that associated with this agreement */
  profile?: Maybe<Profile>;
  /** The type of agreement */
  type: Scalars['String'];
};


/** An agreement made by a user */
export type UserAgreementDateArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  relativeTo?: InputMaybe<Scalars['String']>;
  timeZone?: InputMaybe<Scalars['String']>;
};

/** Connection of UserAgreements */
export type UserAgreementConnection = {
  __typename?: 'UserAgreementConnection';
  /** All the edges in this page of the connection */
  edges: Array<UserAgreementEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<UserAgreement>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

/** Edge containing a UserAgreement */
export type UserAgreementEdge = {
  __typename?: 'UserAgreementEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: UserAgreement;
};

export type CreateCollectionLocationMutationVariables = Exact<{
  collectionId: Scalars['ID'];
  location: CreateCollectionLocationInput;
}>;


export type CreateCollectionLocationMutation = { __typename?: 'Mutation', createCollectionLocation: { __typename: 'CreateCollectionLocationPayload', location?: { __typename: 'CollectionLocation', id: string, title?: string | null, synopsis?: string | null, description?: string | null, tags: Array<string>, readMoreUrl?: string | null, websiteUrl?: string | null, place: { __typename: 'Place', id: string, name?: string | null, synopsis?: string | null, maki?: string | null, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: string | null, addressLineTwo?: string | null, addressLineThree?: string | null, locality?: string | null, region?: string | null, regionCode?: string | null, country?: string | null, countryCode?: string | null }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: string | null }> }, position: { __typename?: 'Position', lon: number, lat: number } } | null } };

export type DeleteCollectionLocationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteCollectionLocationMutation = { __typename?: 'Mutation', deleteCollectionItem: { __typename: 'DeleteCollectionItemPayload' } };

export type FindCollectionLocationIdsByExternalQueryVariables = Exact<{
  collectionId?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
  externalIds?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
  externalSources?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type FindCollectionLocationIdsByExternalQuery = { __typename?: 'Query', collectionItems: { __typename: 'CollectionItemConnection', totalCount: number, edges: Array<{ __typename?: 'CollectionItemEdge', cursor: string, node: { __typename: 'CollectionLocation', id: string, place: { __typename: 'Place', id: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type FindCollectionLocationIdsByTagQueryVariables = Exact<{
  collectionId?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
  tags?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type FindCollectionLocationIdsByTagQuery = { __typename?: 'Query', collectionItems: { __typename: 'CollectionItemConnection', totalCount: number, edges: Array<{ __typename?: 'CollectionItemEdge', cursor: string, node: { __typename: 'CollectionLocation', id: string, place: { __typename: 'Place', id: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type FindCollectionLocationsByExternalQueryVariables = Exact<{
  collectionId?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
  externalIds?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
  externalSources?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type FindCollectionLocationsByExternalQuery = { __typename?: 'Query', collectionItems: { __typename: 'CollectionItemConnection', totalCount: number, edges: Array<{ __typename?: 'CollectionItemEdge', cursor: string, node: { __typename: 'CollectionLocation', id: string, title?: string | null, synopsis?: string | null, tags: Array<string>, readMoreUrl?: string | null, place: { __typename: 'Place', id: string, name?: string | null, synopsis?: string | null, maki?: string | null, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: string | null, addressLineTwo?: string | null, addressLineThree?: string | null, locality?: string | null, region?: string | null, regionCode?: string | null, country?: string | null, countryCode?: string | null }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: string | null }> }, position: { __typename?: 'Position', lon: number, lat: number }, externalId?: { __typename?: 'Attribute', value?: any | null } | null, externalSource?: { __typename?: 'Attribute', value?: any | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type FindCollectionLocationsByTagQueryVariables = Exact<{
  collectionId?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
  tags?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type FindCollectionLocationsByTagQuery = { __typename?: 'Query', collectionItems: { __typename: 'CollectionItemConnection', totalCount: number, edges: Array<{ __typename?: 'CollectionItemEdge', cursor: string, node: { __typename: 'CollectionLocation', id: string, title?: string | null, synopsis?: string | null, tags: Array<string>, readMoreUrl?: string | null, place: { __typename: 'Place', id: string, name?: string | null, synopsis?: string | null, maki?: string | null, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: string | null, addressLineTwo?: string | null, addressLineThree?: string | null, locality?: string | null, region?: string | null, regionCode?: string | null, country?: string | null, countryCode?: string | null }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: string | null }> }, position: { __typename?: 'Position', lon: number, lat: number }, externalId?: { __typename?: 'Attribute', value?: any | null } | null, externalSource?: { __typename?: 'Attribute', value?: any | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type CollectionContentFragment = { __typename?: 'Collection', title?: string | null, synopsis?: string | null, description?: string | null, discriminator: string, readMoreUrl?: string | null };

export type CollectionItemsCountFragment = { __typename?: 'Collection', items: { __typename?: 'CollectionItemConnection', totalCount: number } };

export type CollectionLocationContentFragment = { __typename?: 'CollectionLocation', title?: string | null, synopsis?: string | null, description?: string | null, tags: Array<string>, readMoreUrl?: string | null, websiteUrl?: string | null, position: { __typename?: 'Position', lon: number, lat: number } };

export type CollectionLocationExternalRefsFragment = { __typename?: 'CollectionLocation', externalId?: { __typename?: 'Attribute', value?: any | null } | null, externalSource?: { __typename?: 'Attribute', value?: any | null } | null };

export type CollectionLocationPartialContentFragment = { __typename?: 'CollectionLocation', title?: string | null, synopsis?: string | null, tags: Array<string>, readMoreUrl?: string | null, position: { __typename?: 'Position', lon: number, lat: number } };

export type CollectionPartialContentFragment = { __typename?: 'Collection', title?: string | null, synopsis?: string | null, readMoreUrl?: string | null };

export type GetCollectionLocationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCollectionLocationQuery = { __typename?: 'Query', collectionItem?: { __typename: 'CollectionLocation', id: string, title?: string | null, synopsis?: string | null, description?: string | null, tags: Array<string>, readMoreUrl?: string | null, websiteUrl?: string | null, place: { __typename: 'Place', id: string, name?: string | null, synopsis?: string | null, maki?: string | null, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: string | null, addressLineTwo?: string | null, addressLineThree?: string | null, locality?: string | null, region?: string | null, regionCode?: string | null, country?: string | null, countryCode?: string | null }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: string | null }> }, position: { __typename?: 'Position', lon: number, lat: number } } | null };

export type GetCollectionQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCollectionQuery = { __typename?: 'Query', collection?: { __typename: 'Collection', id: string, title?: string | null, synopsis?: string | null, description?: string | null, discriminator: string, readMoreUrl?: string | null, items: { __typename?: 'CollectionItemConnection', totalCount: number } } | null };

export type ListCollectionsQueryVariables = Exact<{
  profileId: Scalars['ID'];
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
  discriminator?: InputMaybe<Scalars['String']>;
}>;


export type ListCollectionsQuery = { __typename?: 'Query', collections: { __typename: 'CollectionConnection', totalCount: number, edges: Array<{ __typename?: 'CollectionEdge', node: { __typename: 'Collection', id: string, title?: string | null, synopsis?: string | null, readMoreUrl?: string | null, items: { __typename?: 'CollectionItemConnection', totalCount: number } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type UpdateCollectionLocationMutationVariables = Exact<{
  id: Scalars['ID'];
  location: UpdateCollectionLocationInput;
}>;


export type UpdateCollectionLocationMutation = { __typename?: 'Mutation', updateCollectionLocation: { __typename: 'UpdateCollectionLocationPayload', location?: { __typename: 'CollectionLocation', id: string, title?: string | null, synopsis?: string | null, description?: string | null, tags: Array<string>, readMoreUrl?: string | null, websiteUrl?: string | null, position: { __typename?: 'Position', lon: number, lat: number } } | null } };

export type CreateItineraryDirectionsMutationVariables = Exact<{
  itineraryId: Scalars['ID'];
  directions: CreateItineraryDirectionsInput;
}>;


export type CreateItineraryDirectionsMutation = { __typename?: 'Mutation', createItineraryDirections: { __typename: 'CreateItineraryDirectionsPayload', directions?: { __typename: 'ItineraryDirections', id: string, durationMin?: number | null, distance?: number | null } | null, cascaded: { __typename?: 'ItineraryItemCascadedChanges', deletedIds: Array<string>, created: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }>, updated: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }> } } };

export type CreateItineraryLocationMutationVariables = Exact<{
  itineraryId: Scalars['ID'];
  location: CreateItineraryLocationInput;
}>;


export type CreateItineraryLocationMutation = { __typename?: 'Mutation', createItineraryLocation: { __typename: 'CreateItineraryLocationPayload', location?: { __typename: 'ItineraryLocation', id: string, title?: string | null, synopsis?: string | null, description?: string | null, tags: Array<string>, optional: boolean, readMoreUrl?: string | null, itinerary: { __typename: 'Itinerary', id: string, locations: { __typename?: 'ItineraryItemConnection', totalCount: number } }, place: { __typename: 'Place', id: string, name?: string | null, synopsis?: string | null, maki?: string | null, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: string | null, addressLineTwo?: string | null, addressLineThree?: string | null, locality?: string | null, region?: string | null, regionCode?: string | null, country?: string | null, countryCode?: string | null }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: string | null }> }, position: { __typename?: 'Position', lon: number, lat: number } } | null, cascaded: { __typename?: 'ItineraryItemCascadedChanges', deletedIds: Array<string>, created: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }>, updated: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }> } } };

export type CreateItineraryMutationVariables = Exact<{
  itinerary: CreateItineraryInput;
  profileId?: InputMaybe<Scalars['ID']>;
}>;


export type CreateItineraryMutation = { __typename?: 'Mutation', createItinerary: { __typename: 'CreateItineraryPayload', itinerary?: { __typename: 'Itinerary', id: string, title?: string | null, synopsis?: string | null, description?: string | null, tags: Array<string>, created?: string | null, modified?: string | null, published?: string | null, autoRoute?: { __typename?: 'ItineraryAutoRoute', defaultMode: RouteMode } | null, locations: { __typename?: 'ItineraryItemConnection', totalCount: number } } | null } };

export type DeleteItineraryLocationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteItineraryLocationMutation = { __typename?: 'Mutation', deleteItineraryItem: { __typename: 'DeleteItineraryItemPayload', itinerary: { __typename: 'Itinerary', id: string, locations: { __typename?: 'ItineraryItemConnection', totalCount: number } }, cascaded: { __typename?: 'ItineraryItemCascadedChanges', deletedIds: Array<string>, created: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }>, updated: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }> } } };

export type DeleteItineraryMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteItineraryMutation = { __typename?: 'Mutation', deleteItinerary: { __typename: 'DeleteItineraryPayload' } };

export type DisableItineraryAutoRouteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DisableItineraryAutoRouteMutation = { __typename?: 'Mutation', updateItinerary: { __typename: 'UpdateItineraryPayload', itinerary?: { __typename: 'Itinerary', id: string, autoRoute?: { __typename?: 'ItineraryAutoRoute', defaultMode: RouteMode } | null } | null, cascaded: { __typename?: 'ItineraryItemCascadedChanges', deletedIds: Array<string>, created: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }>, updated: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }> } } };

export type EnableItineraryAutoRouteMutationVariables = Exact<{
  id: Scalars['ID'];
  defaultMode: RouteMode;
}>;


export type EnableItineraryAutoRouteMutation = { __typename?: 'Mutation', updateItinerary: { __typename: 'UpdateItineraryPayload', itinerary?: { __typename: 'Itinerary', id: string, autoRoute?: { __typename?: 'ItineraryAutoRoute', defaultMode: RouteMode } | null } | null, cascaded: { __typename?: 'ItineraryItemCascadedChanges', deletedIds: Array<string>, created: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }>, updated: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }> } } };

export type FindItineraryLocationIdsByPlaceIdQueryVariables = Exact<{
  itineraryId: Scalars['ID'];
  placeId: Scalars['ID'];
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type FindItineraryLocationIdsByPlaceIdQuery = { __typename?: 'Query', itinerary?: { __typename?: 'Itinerary', descendants: { __typename: 'ItineraryItemConnection', totalCount: number, edges: Array<{ __typename?: 'ItineraryItemEdge', node: { __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string, place: { __typename: 'Place', id: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };

export type FindItineraryLocationsByPlaceIdQueryVariables = Exact<{
  itineraryId: Scalars['ID'];
  placeId: Scalars['ID'];
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type FindItineraryLocationsByPlaceIdQuery = { __typename?: 'Query', itinerary?: { __typename?: 'Itinerary', descendants: { __typename: 'ItineraryItemConnection', totalCount: number, edges: Array<{ __typename?: 'ItineraryItemEdge', node: { __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string, title?: string | null, synopsis?: string | null, tags: Array<string>, optional: boolean, readMoreUrl?: string | null, place: { __typename: 'Place', id: string, name?: string | null, synopsis?: string | null, maki?: string | null, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: string | null, addressLineTwo?: string | null, addressLineThree?: string | null, locality?: string | null, region?: string | null, regionCode?: string | null, country?: string | null, countryCode?: string | null }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: string | null }> }, position: { __typename?: 'Position', lon: number, lat: number } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };

export type ItineraryCascadedChangesFragment = { __typename?: 'ItineraryItemCascadedChanges', deletedIds: Array<string>, created: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }>, updated: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }> };

export type ItineraryContentFragment = { __typename?: 'Itinerary', title?: string | null, synopsis?: string | null, description?: string | null, tags: Array<string>, created?: string | null, modified?: string | null, published?: string | null, autoRoute?: { __typename?: 'ItineraryAutoRoute', defaultMode: RouteMode } | null };

export type ItineraryDirectionsContentFragment = { __typename?: 'ItineraryDirections', durationMin?: number | null, distance?: number | null };

export type ItineraryDirectionsPartialContentFragment = { __typename?: 'ItineraryDirections', durationMin?: number | null, distance?: number | null };

export type ItineraryLocationContentFragment = { __typename?: 'ItineraryLocation', title?: string | null, synopsis?: string | null, description?: string | null, tags: Array<string>, optional: boolean, readMoreUrl?: string | null, position: { __typename?: 'Position', lon: number, lat: number } };

export type ItineraryLocationPartialContentFragment = { __typename?: 'ItineraryLocation', title?: string | null, synopsis?: string | null, tags: Array<string>, optional: boolean, readMoreUrl?: string | null, position: { __typename?: 'Position', lon: number, lat: number } };

export type ItineraryLocationsCountFragment = { __typename?: 'Itinerary', locations: { __typename?: 'ItineraryItemConnection', totalCount: number } };

export type ItineraryPartialContentFragment = { __typename?: 'Itinerary', title?: string | null, synopsis?: string | null, tags: Array<string>, created?: string | null, modified?: string | null, published?: string | null };

export type ItinerarySearchPartialContentFragment = { __typename?: 'ItinerarySearchNode', title?: string | null, synopsis?: string | null, tags: Array<string>, created?: string | null, published?: string | null };

export type GetItineraryDirectionsQueryVariables = Exact<{
  id: Scalars['ID'];
  includeRoutePolyline: Scalars['Boolean'];
}>;


export type GetItineraryDirectionsQuery = { __typename?: 'Query', node?: { __typename: 'Collection', id: string } | { __typename: 'CollectionItemFailedToLoad', id: string } | { __typename: 'CollectionLocation', id: string } | { __typename: 'ConnectedApp', id: string } | { __typename: 'IconComposition', id: string } | { __typename: 'IconResourceFailedToLoad', id: string } | { __typename: 'IconSilhouette', id: string } | { __typename: 'Itinerary', id: string } | { __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string, durationMin?: number | null, distance?: number | null, route: { __typename?: 'Route', segments: Array<{ __typename: 'RouteSegment', id: string, mode: RouteMode, polyline?: string | null }> } } | { __typename: 'ItineraryLocation', id: string } | { __typename: 'MediaResourceFailedToLoad', id: string } | { __typename: 'Place', id: string } | { __typename: 'Profile', id: string } | { __typename: 'UserAgreement', id: string } | null };

export type GetItineraryLocationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetItineraryLocationQuery = { __typename?: 'Query', node?: { __typename: 'Collection', id: string } | { __typename: 'CollectionItemFailedToLoad', id: string } | { __typename: 'CollectionLocation', id: string } | { __typename: 'ConnectedApp', id: string } | { __typename: 'IconComposition', id: string } | { __typename: 'IconResourceFailedToLoad', id: string } | { __typename: 'IconSilhouette', id: string } | { __typename: 'Itinerary', id: string } | { __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string, title?: string | null, synopsis?: string | null, description?: string | null, tags: Array<string>, optional: boolean, readMoreUrl?: string | null, place: { __typename: 'Place', id: string, name?: string | null, synopsis?: string | null, description?: string | null, maki?: string | null, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: string | null, addressLineTwo?: string | null, addressLineThree?: string | null, locality?: string | null, region?: string | null, regionCode?: string | null, country?: string | null, countryCode?: string | null }, contact: { __typename?: 'PlaceContact', phoneNumber?: string | null, emailAddress?: string | null, websiteUrl?: string | null, bookingUrl?: string | null, facebookUrl?: string | null, instagramUrl?: string | null, twitterUrl?: string | null }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: string | null }> }, position: { __typename?: 'Position', lon: number, lat: number } } | { __typename: 'MediaResourceFailedToLoad', id: string } | { __typename: 'Place', id: string } | { __typename: 'Profile', id: string } | { __typename: 'UserAgreement', id: string } | null };

export type GetItineraryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetItineraryQuery = { __typename?: 'Query', itinerary?: { __typename: 'Itinerary', id: string, title?: string | null, synopsis?: string | null, description?: string | null, tags: Array<string>, created?: string | null, modified?: string | null, published?: string | null, profile?: { __typename: 'Profile', id: string, name: string, handle?: string | null } | null, autoRoute?: { __typename?: 'ItineraryAutoRoute', defaultMode: RouteMode } | null, locations: { __typename?: 'ItineraryItemConnection', totalCount: number } } | null };

export type ListItinerariesQueryVariables = Exact<{
  profileId: Scalars['ID'];
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type ListItinerariesQuery = { __typename?: 'Query', itineraries: { __typename: 'ItinerarySearchConnection', totalCount: number, edges: Array<{ __typename?: 'ItinerarySearchEdge', node: { __typename: 'ItinerarySearchNode', id: string, title?: string | null, synopsis?: string | null, tags: Array<string>, created?: string | null, published?: string | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type ListItineraryLocationsQueryVariables = Exact<{
  id: Scalars['ID'];
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
  includeRoutePolyline: Scalars['Boolean'];
}>;


export type ListItineraryLocationsQuery = { __typename?: 'Query', itinerary?: { __typename: 'Itinerary', id: string, locations: { __typename?: 'ItineraryItemConnection', totalCount: number, edges: Array<{ __typename?: 'ItineraryItemEdge', location: { __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string, title?: string | null, synopsis?: string | null, tags: Array<string>, optional: boolean, readMoreUrl?: string | null, place: { __typename: 'Place', id: string, name?: string | null, synopsis?: string | null, maki?: string | null, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: string | null, addressLineTwo?: string | null, addressLineThree?: string | null, locality?: string | null, region?: string | null, regionCode?: string | null, country?: string | null, countryCode?: string | null }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: string | null }> }, position: { __typename?: 'Position', lon: number, lat: number } }, arrival: { __typename?: 'ItineraryDirectionsConnection', totalCount: number, directions: Array<{ __typename: 'ItineraryDirections', id: string, durationMin?: number | null, distance?: number | null, route: { __typename?: 'Route', segments: Array<{ __typename: 'RouteSegment', id: string, mode: RouteMode, polyline?: string | null }> } }> } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };

export type MoveItineraryLocationAfterMutationVariables = Exact<{
  id: Scalars['ID'];
  siblingId: Scalars['ID'];
}>;


export type MoveItineraryLocationAfterMutation = { __typename?: 'Mutation', moveItineraryItem: { __typename: 'MoveItineraryItemPayload', cascaded: { __typename?: 'ItineraryItemCascadedChanges', deletedIds: Array<string>, created: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }>, updated: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }> } } };

export type MoveItineraryLocationToStartMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MoveItineraryLocationToStartMutation = { __typename?: 'Mutation', moveItineraryItem: { __typename: 'MoveItineraryItemPayload', cascaded: { __typename?: 'ItineraryItemCascadedChanges', deletedIds: Array<string>, created: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }>, updated: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }> } } };

export type UpdateItineraryLocationIsOptionalMutationVariables = Exact<{
  id: Scalars['ID'];
  optional: Scalars['Boolean'];
}>;


export type UpdateItineraryLocationIsOptionalMutation = { __typename?: 'Mutation', updateItineraryLocation: { __typename: 'UpdateItineraryLocationPayload', location?: { __typename: 'ItineraryLocation', id: string, optional: boolean } | null, cascaded: { __typename?: 'ItineraryItemCascadedChanges', deletedIds: Array<string>, created: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }>, updated: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }> } } };

export type UpdateItineraryLocationMutationVariables = Exact<{
  id: Scalars['ID'];
  location: UpdateItineraryLocationInput;
}>;


export type UpdateItineraryLocationMutation = { __typename?: 'Mutation', updateItineraryLocation: { __typename: 'UpdateItineraryLocationPayload', location?: { __typename: 'ItineraryLocation', id: string, title?: string | null, synopsis?: string | null, description?: string | null, tags: Array<string>, optional: boolean, readMoreUrl?: string | null, position: { __typename?: 'Position', lon: number, lat: number } } | null, cascaded: { __typename?: 'ItineraryItemCascadedChanges', deletedIds: Array<string>, created: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }>, updated: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }> } } };

export type UpdateItineraryMutationVariables = Exact<{
  id: Scalars['ID'];
  itinerary: UpdateItineraryInput;
}>;


export type UpdateItineraryMutation = { __typename?: 'Mutation', updateItinerary: { __typename: 'UpdateItineraryPayload', itinerary?: { __typename: 'Itinerary', id: string, title?: string | null, synopsis?: string | null, description?: string | null, tags: Array<string>, created?: string | null, modified?: string | null, published?: string | null, autoRoute?: { __typename?: 'ItineraryAutoRoute', defaultMode: RouteMode } | null } | null, cascaded: { __typename?: 'ItineraryItemCascadedChanges', deletedIds: Array<string>, created: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }>, updated: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }> } } };

export type MediaImageContentFragment = { __typename?: 'MediaImage', provider: string, copyright?: string | null, altText?: string | null, attribution?: string | null, caption?: string | null };

export type MediaImagePartialContentFragment = { __typename?: 'MediaImage', provider: string, hasContent: boolean };

export type GetMediaImageQueryVariables = Exact<{
  id: Scalars['ID'];
  smallBestFit?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
  mediumBestFit?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
  largeBestFit?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type GetMediaImageQuery = { __typename?: 'Query', mediaResource?: { __typename: 'MediaImage', id?: string | null, provider: string, copyright?: string | null, altText?: string | null, attribution?: string | null, caption?: string | null, small?: { __typename?: 'MediaImageSource', url: string } | null, medium?: { __typename?: 'MediaImageSource', url: string } | null, large?: { __typename?: 'MediaImageSource', url: string } | null } | null };

export type AutocompleteSearchPlaceQueryVariables = Exact<{
  text: Scalars['String'];
  source: PlaceSearchSource;
}>;


export type AutocompleteSearchPlaceQuery = { __typename?: 'Query', placeAutocompleteSearch: { __typename: 'PlaceSearchConnection', edges: Array<{ __typename?: 'PlaceSearchEdge', node: { __typename: 'PlaceSearchNode', id: string, name?: string | null, maki?: string | null, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: string | null, addressLineTwo?: string | null, addressLineThree?: string | null, locality?: string | null, region?: string | null, regionCode?: string | null, country?: string | null, countryCode?: string | null }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: string | null }> }, main: { __typename?: 'TextSearchResult', label: string, matches: Array<{ __typename?: 'TextSearchResultMatch', offset: number, length: number }> }, secondary: { __typename?: 'TextSearchResult', label: string, matches: Array<{ __typename?: 'TextSearchResultMatch', offset: number, length: number }> } }> } };

export type PlaceContentFragment = { __typename?: 'Place', name?: string | null, synopsis?: string | null, description?: string | null, maki?: string | null, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: string | null, addressLineTwo?: string | null, addressLineThree?: string | null, locality?: string | null, region?: string | null, regionCode?: string | null, country?: string | null, countryCode?: string | null }, contact: { __typename?: 'PlaceContact', phoneNumber?: string | null, emailAddress?: string | null, websiteUrl?: string | null, bookingUrl?: string | null, facebookUrl?: string | null, instagramUrl?: string | null, twitterUrl?: string | null }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: string | null }> };

export type PlacePartialContentFragment = { __typename?: 'Place', name?: string | null, synopsis?: string | null, maki?: string | null, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: string | null, addressLineTwo?: string | null, addressLineThree?: string | null, locality?: string | null, region?: string | null, regionCode?: string | null, country?: string | null, countryCode?: string | null }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: string | null }> };

export type PlaceSearchContentFragment = { __typename?: 'PlaceSearchNode', name?: string | null, maki?: string | null, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: string | null, addressLineTwo?: string | null, addressLineThree?: string | null, locality?: string | null, region?: string | null, regionCode?: string | null, country?: string | null, countryCode?: string | null }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: string | null }> };

export type GetPlaceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPlaceQuery = { __typename?: 'Query', place?: { __typename: 'Place', id: string, name?: string | null, synopsis?: string | null, description?: string | null, maki?: string | null, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: string | null, addressLineTwo?: string | null, addressLineThree?: string | null, locality?: string | null, region?: string | null, regionCode?: string | null, country?: string | null, countryCode?: string | null }, contact: { __typename?: 'PlaceContact', phoneNumber?: string | null, emailAddress?: string | null, websiteUrl?: string | null, bookingUrl?: string | null, facebookUrl?: string | null, instagramUrl?: string | null, twitterUrl?: string | null }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: string | null }> } | null };

export type ReverseSearchPlaceByPositionQueryVariables = Exact<{
  focus: PositionInput;
  sources: Array<PlaceSearchSource> | PlaceSearchSource;
  first: Scalars['Int'];
}>;


export type ReverseSearchPlaceByPositionQuery = { __typename?: 'Query', placeReverseSearch: { __typename: 'PlaceSearchConnection', places: Array<{ __typename: 'PlaceSearchNode', id: string, name?: string | null, maki?: string | null, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: string | null, addressLineTwo?: string | null, addressLineThree?: string | null, locality?: string | null, region?: string | null, regionCode?: string | null, country?: string | null, countryCode?: string | null }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: string | null }> }> } };

export type ProfileContentFragment = { __typename?: 'Profile', name: string, handle?: string | null, bio?: string | null, websiteUrl?: string | null };

export type ProfilePartialContentFragment = { __typename?: 'Profile', name: string, handle?: string | null };

export type GetProfileQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProfileQuery = { __typename?: 'Query', profile?: { __typename: 'Profile', id: string, name: string, handle?: string | null, bio?: string | null, websiteUrl?: string | null } | null };

export type ListAuthorizedProfilesQueryVariables = Exact<{
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type ListAuthorizedProfilesQuery = { __typename?: 'Query', authorizedProfiles: { __typename: 'ProfileConnection', totalCount: number, profiles: Array<{ __typename: 'Profile', id: string, name: string, handle?: string | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type SearchRoutesBetweenPositionsQueryVariables = Exact<{
  mode: RouteSearchableMode;
  positions: Array<PositionInput> | PositionInput;
  first: Scalars['Int'];
  includeRoutePolyline: Scalars['Boolean'];
}>;


export type SearchRoutesBetweenPositionsQuery = { __typename?: 'Query', routes: { __typename: 'RouteConnection', routes: Array<{ __typename?: 'Route', segments: Array<{ __typename?: 'RouteSegment', distance?: number | null, duration?: number | null, polyline?: string | null }> }> } };


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "CollectionItem": [
      "CollectionLocation"
    ],
    "CollectionItemEmbedded": [
      "CollectionItemFailedToLoad",
      "CollectionLocation"
    ],
    "IconResource": [
      "IconSilhouette"
    ],
    "IconResourceEmbedded": [
      "IconResourceFailedToLoad",
      "IconSilhouette"
    ],
    "ItineraryItem": [
      "ItineraryCollection",
      "ItineraryDirections",
      "ItineraryLocation"
    ],
    "MediaResource": [
      "MediaImage"
    ],
    "MediaResourceEmbedded": [
      "MediaImage",
      "MediaResourceFailedToLoad"
    ],
    "Node": [
      "Collection",
      "CollectionItemFailedToLoad",
      "CollectionLocation",
      "ConnectedApp",
      "IconComposition",
      "IconResourceFailedToLoad",
      "IconSilhouette",
      "Itinerary",
      "ItineraryCollection",
      "ItineraryDirections",
      "ItineraryLocation",
      "MediaResourceFailedToLoad",
      "Place",
      "Profile",
      "UserAgreement"
    ]
  }
};
      export default result;
    
export const CollectionContentFragmentDoc = gql`
    fragment CollectionContent on Collection {
  title
  synopsis
  description
  discriminator
  readMoreUrl
}
    `;
export const CollectionItemsCountFragmentDoc = gql`
    fragment CollectionItemsCount on Collection {
  items(first: 0) @connection(key: "collection-items-count") {
    totalCount
  }
}
    `;
export const CollectionLocationContentFragmentDoc = gql`
    fragment CollectionLocationContent on CollectionLocation {
  title
  synopsis
  description
  tags
  readMoreUrl
  websiteUrl
  position {
    lon
    lat
  }
}
    `;
export const CollectionLocationExternalRefsFragmentDoc = gql`
    fragment CollectionLocationExternalRefs on CollectionLocation {
  externalId: attr(id: "custom/external-ref") {
    value
  }
  externalSource: attr(id: "custom/external-source") {
    value
  }
}
    `;
export const CollectionLocationPartialContentFragmentDoc = gql`
    fragment CollectionLocationPartialContent on CollectionLocation {
  title
  synopsis
  tags
  position {
    lon
    lat
  }
  readMoreUrl
}
    `;
export const CollectionPartialContentFragmentDoc = gql`
    fragment CollectionPartialContent on Collection {
  title
  synopsis
  readMoreUrl
}
    `;
export const ItineraryCascadedChangesFragmentDoc = gql`
    fragment ItineraryCascadedChanges on ItineraryItemCascadedChanges {
  created {
    __typename
    id
  }
  updated {
    __typename
    id
  }
  deletedIds
}
    `;
export const ItineraryContentFragmentDoc = gql`
    fragment ItineraryContent on Itinerary {
  title
  synopsis
  description
  tags
  created
  modified
  published
  autoRoute {
    defaultMode
  }
}
    `;
export const ItineraryDirectionsContentFragmentDoc = gql`
    fragment ItineraryDirectionsContent on ItineraryDirections {
  durationMin
  distance
}
    `;
export const ItineraryDirectionsPartialContentFragmentDoc = gql`
    fragment ItineraryDirectionsPartialContent on ItineraryDirections {
  durationMin
  distance
}
    `;
export const ItineraryLocationContentFragmentDoc = gql`
    fragment ItineraryLocationContent on ItineraryLocation {
  title
  synopsis
  description
  tags
  optional
  readMoreUrl
  position {
    lon
    lat
  }
}
    `;
export const ItineraryLocationPartialContentFragmentDoc = gql`
    fragment ItineraryLocationPartialContent on ItineraryLocation {
  title
  synopsis
  tags
  optional
  readMoreUrl
  position {
    lon
    lat
  }
}
    `;
export const ItineraryLocationsCountFragmentDoc = gql`
    fragment ItineraryLocationsCount on Itinerary {
  locations: descendants(first: 0, type: ItineraryLocation) @connection(key: "itinerary-locations-count") {
    totalCount
  }
}
    `;
export const ItineraryPartialContentFragmentDoc = gql`
    fragment ItineraryPartialContent on Itinerary {
  title
  synopsis
  tags
  created
  modified
  published
}
    `;
export const ItinerarySearchPartialContentFragmentDoc = gql`
    fragment ItinerarySearchPartialContent on ItinerarySearchNode {
  title
  synopsis
  tags
  created
  published
}
    `;
export const MediaImageContentFragmentDoc = gql`
    fragment MediaImageContent on MediaImage {
  provider
  copyright
  altText
  attribution
  caption
}
    `;
export const MediaImagePartialContentFragmentDoc = gql`
    fragment MediaImagePartialContent on MediaImage {
  provider
  hasContent
}
    `;
export const PlaceContentFragmentDoc = gql`
    fragment PlaceContent on Place {
  name
  synopsis
  description
  position {
    lon
    lat
  }
  maki
  address {
    addressLineOne
    addressLineTwo
    addressLineThree
    locality
    region
    regionCode
    country
    countryCode
  }
  contact {
    phoneNumber
    emailAddress
    websiteUrl
    bookingUrl
    facebookUrl
    instagramUrl
    twitterUrl
  }
  layers {
    id
    __typename
    name
  }
}
    `;
export const PlacePartialContentFragmentDoc = gql`
    fragment PlacePartialContent on Place {
  name
  synopsis
  position {
    lon
    lat
  }
  maki
  address {
    addressLineOne
    addressLineTwo
    addressLineThree
    locality
    region
    regionCode
    country
    countryCode
  }
  layers {
    id
    __typename
    name
  }
}
    `;
export const PlaceSearchContentFragmentDoc = gql`
    fragment PlaceSearchContent on PlaceSearchNode {
  name
  position {
    lon
    lat
  }
  address {
    addressLineOne
    addressLineTwo
    addressLineThree
    locality
    region
    regionCode
    country
    countryCode
  }
  maki
  layers {
    id
    __typename
    name
  }
}
    `;
export const ProfileContentFragmentDoc = gql`
    fragment ProfileContent on Profile {
  name
  handle
  bio
  websiteUrl
}
    `;
export const ProfilePartialContentFragmentDoc = gql`
    fragment ProfilePartialContent on Profile {
  name
  handle
}
    `;
export const CreateCollectionLocationDocument = gql`
    mutation createCollectionLocation($collectionId: ID!, $location: CreateCollectionLocationInput!) {
  createCollectionLocation(collectionId: $collectionId, location: $location) {
    __typename
    location {
      id
      __typename
      ...CollectionLocationContent
      place {
        id
        __typename
        ...PlacePartialContent
      }
    }
  }
}
    ${CollectionLocationContentFragmentDoc}
${PlacePartialContentFragmentDoc}`;
export type CreateCollectionLocationMutationFn = Apollo.MutationFunction<CreateCollectionLocationMutation, CreateCollectionLocationMutationVariables>;

/**
 * __useCreateCollectionLocationMutation__
 *
 * To run a mutation, you first call `useCreateCollectionLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollectionLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollectionLocationMutation, { data, loading, error }] = useCreateCollectionLocationMutation({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      location: // value for 'location'
 *   },
 * });
 */
export function useCreateCollectionLocationMutation(baseOptions?: Apollo.MutationHookOptions<CreateCollectionLocationMutation, CreateCollectionLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCollectionLocationMutation, CreateCollectionLocationMutationVariables>(CreateCollectionLocationDocument, options);
      }
export type CreateCollectionLocationMutationHookResult = ReturnType<typeof useCreateCollectionLocationMutation>;
export type CreateCollectionLocationMutationResult = Apollo.MutationResult<CreateCollectionLocationMutation>;
export type CreateCollectionLocationMutationOptions = Apollo.BaseMutationOptions<CreateCollectionLocationMutation, CreateCollectionLocationMutationVariables>;
export const DeleteCollectionLocationDocument = gql`
    mutation deleteCollectionLocation($id: ID!) {
  deleteCollectionItem(id: $id) {
    __typename
  }
}
    `;
export type DeleteCollectionLocationMutationFn = Apollo.MutationFunction<DeleteCollectionLocationMutation, DeleteCollectionLocationMutationVariables>;

/**
 * __useDeleteCollectionLocationMutation__
 *
 * To run a mutation, you first call `useDeleteCollectionLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCollectionLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCollectionLocationMutation, { data, loading, error }] = useDeleteCollectionLocationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCollectionLocationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCollectionLocationMutation, DeleteCollectionLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCollectionLocationMutation, DeleteCollectionLocationMutationVariables>(DeleteCollectionLocationDocument, options);
      }
export type DeleteCollectionLocationMutationHookResult = ReturnType<typeof useDeleteCollectionLocationMutation>;
export type DeleteCollectionLocationMutationResult = Apollo.MutationResult<DeleteCollectionLocationMutation>;
export type DeleteCollectionLocationMutationOptions = Apollo.BaseMutationOptions<DeleteCollectionLocationMutation, DeleteCollectionLocationMutationVariables>;
export const FindCollectionLocationIdsByExternalDocument = gql`
    query findCollectionLocationIdsByExternal($collectionId: [ID!], $externalIds: [ID!], $externalSources: [ID!], $first: Int!, $after: String) {
  collectionItems(
    collectionIds: $collectionId
    externalIds: $externalIds
    externalSources: $externalSources
    first: $first
    after: $after
  ) {
    __typename
    edges {
      node {
        id
        __typename
        ... on CollectionLocation {
          place {
            id
            __typename
          }
        }
      }
      cursor
    }
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    `;

/**
 * __useFindCollectionLocationIdsByExternalQuery__
 *
 * To run a query within a React component, call `useFindCollectionLocationIdsByExternalQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCollectionLocationIdsByExternalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCollectionLocationIdsByExternalQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      externalIds: // value for 'externalIds'
 *      externalSources: // value for 'externalSources'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useFindCollectionLocationIdsByExternalQuery(baseOptions: Apollo.QueryHookOptions<FindCollectionLocationIdsByExternalQuery, FindCollectionLocationIdsByExternalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCollectionLocationIdsByExternalQuery, FindCollectionLocationIdsByExternalQueryVariables>(FindCollectionLocationIdsByExternalDocument, options);
      }
export function useFindCollectionLocationIdsByExternalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCollectionLocationIdsByExternalQuery, FindCollectionLocationIdsByExternalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCollectionLocationIdsByExternalQuery, FindCollectionLocationIdsByExternalQueryVariables>(FindCollectionLocationIdsByExternalDocument, options);
        }
export type FindCollectionLocationIdsByExternalQueryHookResult = ReturnType<typeof useFindCollectionLocationIdsByExternalQuery>;
export type FindCollectionLocationIdsByExternalLazyQueryHookResult = ReturnType<typeof useFindCollectionLocationIdsByExternalLazyQuery>;
export type FindCollectionLocationIdsByExternalQueryResult = Apollo.QueryResult<FindCollectionLocationIdsByExternalQuery, FindCollectionLocationIdsByExternalQueryVariables>;
export const FindCollectionLocationIdsByTagDocument = gql`
    query findCollectionLocationIdsByTag($collectionId: [ID!], $tags: [String!], $first: Int!, $after: String) {
  collectionItems(
    collectionIds: $collectionId
    tags: $tags
    first: $first
    after: $after
  ) {
    __typename
    edges {
      node {
        id
        __typename
        ... on CollectionLocation {
          place {
            id
            __typename
          }
        }
      }
      cursor
    }
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    `;

/**
 * __useFindCollectionLocationIdsByTagQuery__
 *
 * To run a query within a React component, call `useFindCollectionLocationIdsByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCollectionLocationIdsByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCollectionLocationIdsByTagQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      tags: // value for 'tags'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useFindCollectionLocationIdsByTagQuery(baseOptions: Apollo.QueryHookOptions<FindCollectionLocationIdsByTagQuery, FindCollectionLocationIdsByTagQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCollectionLocationIdsByTagQuery, FindCollectionLocationIdsByTagQueryVariables>(FindCollectionLocationIdsByTagDocument, options);
      }
export function useFindCollectionLocationIdsByTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCollectionLocationIdsByTagQuery, FindCollectionLocationIdsByTagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCollectionLocationIdsByTagQuery, FindCollectionLocationIdsByTagQueryVariables>(FindCollectionLocationIdsByTagDocument, options);
        }
export type FindCollectionLocationIdsByTagQueryHookResult = ReturnType<typeof useFindCollectionLocationIdsByTagQuery>;
export type FindCollectionLocationIdsByTagLazyQueryHookResult = ReturnType<typeof useFindCollectionLocationIdsByTagLazyQuery>;
export type FindCollectionLocationIdsByTagQueryResult = Apollo.QueryResult<FindCollectionLocationIdsByTagQuery, FindCollectionLocationIdsByTagQueryVariables>;
export const FindCollectionLocationsByExternalDocument = gql`
    query findCollectionLocationsByExternal($collectionId: [ID!], $externalIds: [ID!], $externalSources: [ID!], $first: Int!, $after: String) {
  collectionItems(
    collectionIds: $collectionId
    externalIds: $externalIds
    externalSources: $externalSources
    first: $first
    after: $after
  ) {
    __typename
    edges {
      node {
        id
        __typename
        ... on CollectionLocation {
          ...CollectionLocationPartialContent
          ...CollectionLocationExternalRefs
          place {
            id
            __typename
            ...PlacePartialContent
          }
        }
      }
      cursor
    }
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    ${CollectionLocationPartialContentFragmentDoc}
${CollectionLocationExternalRefsFragmentDoc}
${PlacePartialContentFragmentDoc}`;

/**
 * __useFindCollectionLocationsByExternalQuery__
 *
 * To run a query within a React component, call `useFindCollectionLocationsByExternalQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCollectionLocationsByExternalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCollectionLocationsByExternalQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      externalIds: // value for 'externalIds'
 *      externalSources: // value for 'externalSources'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useFindCollectionLocationsByExternalQuery(baseOptions: Apollo.QueryHookOptions<FindCollectionLocationsByExternalQuery, FindCollectionLocationsByExternalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCollectionLocationsByExternalQuery, FindCollectionLocationsByExternalQueryVariables>(FindCollectionLocationsByExternalDocument, options);
      }
export function useFindCollectionLocationsByExternalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCollectionLocationsByExternalQuery, FindCollectionLocationsByExternalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCollectionLocationsByExternalQuery, FindCollectionLocationsByExternalQueryVariables>(FindCollectionLocationsByExternalDocument, options);
        }
export type FindCollectionLocationsByExternalQueryHookResult = ReturnType<typeof useFindCollectionLocationsByExternalQuery>;
export type FindCollectionLocationsByExternalLazyQueryHookResult = ReturnType<typeof useFindCollectionLocationsByExternalLazyQuery>;
export type FindCollectionLocationsByExternalQueryResult = Apollo.QueryResult<FindCollectionLocationsByExternalQuery, FindCollectionLocationsByExternalQueryVariables>;
export const FindCollectionLocationsByTagDocument = gql`
    query findCollectionLocationsByTag($collectionId: [ID!], $tags: [String!], $first: Int!, $after: String) {
  collectionItems(
    collectionIds: $collectionId
    tags: $tags
    first: $first
    after: $after
  ) {
    __typename
    edges {
      node {
        id
        __typename
        ... on CollectionLocation {
          ...CollectionLocationPartialContent
          ...CollectionLocationExternalRefs
          place {
            id
            __typename
            ...PlacePartialContent
          }
        }
      }
      cursor
    }
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    ${CollectionLocationPartialContentFragmentDoc}
${CollectionLocationExternalRefsFragmentDoc}
${PlacePartialContentFragmentDoc}`;

/**
 * __useFindCollectionLocationsByTagQuery__
 *
 * To run a query within a React component, call `useFindCollectionLocationsByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCollectionLocationsByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCollectionLocationsByTagQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      tags: // value for 'tags'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useFindCollectionLocationsByTagQuery(baseOptions: Apollo.QueryHookOptions<FindCollectionLocationsByTagQuery, FindCollectionLocationsByTagQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCollectionLocationsByTagQuery, FindCollectionLocationsByTagQueryVariables>(FindCollectionLocationsByTagDocument, options);
      }
export function useFindCollectionLocationsByTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCollectionLocationsByTagQuery, FindCollectionLocationsByTagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCollectionLocationsByTagQuery, FindCollectionLocationsByTagQueryVariables>(FindCollectionLocationsByTagDocument, options);
        }
export type FindCollectionLocationsByTagQueryHookResult = ReturnType<typeof useFindCollectionLocationsByTagQuery>;
export type FindCollectionLocationsByTagLazyQueryHookResult = ReturnType<typeof useFindCollectionLocationsByTagLazyQuery>;
export type FindCollectionLocationsByTagQueryResult = Apollo.QueryResult<FindCollectionLocationsByTagQuery, FindCollectionLocationsByTagQueryVariables>;
export const GetCollectionLocationDocument = gql`
    query getCollectionLocation($id: ID!) {
  collectionItem(id: $id) {
    id
    __typename
    ... on CollectionLocation {
      ...CollectionLocationContent
      place {
        id
        __typename
        ...PlacePartialContent
      }
    }
  }
}
    ${CollectionLocationContentFragmentDoc}
${PlacePartialContentFragmentDoc}`;

/**
 * __useGetCollectionLocationQuery__
 *
 * To run a query within a React component, call `useGetCollectionLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionLocationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCollectionLocationQuery(baseOptions: Apollo.QueryHookOptions<GetCollectionLocationQuery, GetCollectionLocationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCollectionLocationQuery, GetCollectionLocationQueryVariables>(GetCollectionLocationDocument, options);
      }
export function useGetCollectionLocationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCollectionLocationQuery, GetCollectionLocationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCollectionLocationQuery, GetCollectionLocationQueryVariables>(GetCollectionLocationDocument, options);
        }
export type GetCollectionLocationQueryHookResult = ReturnType<typeof useGetCollectionLocationQuery>;
export type GetCollectionLocationLazyQueryHookResult = ReturnType<typeof useGetCollectionLocationLazyQuery>;
export type GetCollectionLocationQueryResult = Apollo.QueryResult<GetCollectionLocationQuery, GetCollectionLocationQueryVariables>;
export const GetCollectionDocument = gql`
    query getCollection($id: ID!) {
  collection(id: $id) {
    id
    __typename
    ...CollectionContent
    ...CollectionItemsCount
  }
}
    ${CollectionContentFragmentDoc}
${CollectionItemsCountFragmentDoc}`;

/**
 * __useGetCollectionQuery__
 *
 * To run a query within a React component, call `useGetCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCollectionQuery(baseOptions: Apollo.QueryHookOptions<GetCollectionQuery, GetCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCollectionQuery, GetCollectionQueryVariables>(GetCollectionDocument, options);
      }
export function useGetCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCollectionQuery, GetCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCollectionQuery, GetCollectionQueryVariables>(GetCollectionDocument, options);
        }
export type GetCollectionQueryHookResult = ReturnType<typeof useGetCollectionQuery>;
export type GetCollectionLazyQueryHookResult = ReturnType<typeof useGetCollectionLazyQuery>;
export type GetCollectionQueryResult = Apollo.QueryResult<GetCollectionQuery, GetCollectionQueryVariables>;
export const ListCollectionsDocument = gql`
    query listCollections($profileId: ID!, $first: Int!, $after: String, $discriminator: String) {
  collections(
    profileId: $profileId
    first: $first
    after: $after
    discriminator: $discriminator
  ) {
    __typename
    edges {
      node {
        id
        __typename
        ...CollectionPartialContent
        ...CollectionItemsCount
      }
    }
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    ${CollectionPartialContentFragmentDoc}
${CollectionItemsCountFragmentDoc}`;

/**
 * __useListCollectionsQuery__
 *
 * To run a query within a React component, call `useListCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCollectionsQuery({
 *   variables: {
 *      profileId: // value for 'profileId'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      discriminator: // value for 'discriminator'
 *   },
 * });
 */
export function useListCollectionsQuery(baseOptions: Apollo.QueryHookOptions<ListCollectionsQuery, ListCollectionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCollectionsQuery, ListCollectionsQueryVariables>(ListCollectionsDocument, options);
      }
export function useListCollectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCollectionsQuery, ListCollectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCollectionsQuery, ListCollectionsQueryVariables>(ListCollectionsDocument, options);
        }
export type ListCollectionsQueryHookResult = ReturnType<typeof useListCollectionsQuery>;
export type ListCollectionsLazyQueryHookResult = ReturnType<typeof useListCollectionsLazyQuery>;
export type ListCollectionsQueryResult = Apollo.QueryResult<ListCollectionsQuery, ListCollectionsQueryVariables>;
export const UpdateCollectionLocationDocument = gql`
    mutation updateCollectionLocation($id: ID!, $location: UpdateCollectionLocationInput!) {
  updateCollectionLocation(id: $id, location: $location) {
    __typename
    location {
      id
      __typename
      ...CollectionLocationContent
    }
  }
}
    ${CollectionLocationContentFragmentDoc}`;
export type UpdateCollectionLocationMutationFn = Apollo.MutationFunction<UpdateCollectionLocationMutation, UpdateCollectionLocationMutationVariables>;

/**
 * __useUpdateCollectionLocationMutation__
 *
 * To run a mutation, you first call `useUpdateCollectionLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCollectionLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCollectionLocationMutation, { data, loading, error }] = useUpdateCollectionLocationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      location: // value for 'location'
 *   },
 * });
 */
export function useUpdateCollectionLocationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCollectionLocationMutation, UpdateCollectionLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCollectionLocationMutation, UpdateCollectionLocationMutationVariables>(UpdateCollectionLocationDocument, options);
      }
export type UpdateCollectionLocationMutationHookResult = ReturnType<typeof useUpdateCollectionLocationMutation>;
export type UpdateCollectionLocationMutationResult = Apollo.MutationResult<UpdateCollectionLocationMutation>;
export type UpdateCollectionLocationMutationOptions = Apollo.BaseMutationOptions<UpdateCollectionLocationMutation, UpdateCollectionLocationMutationVariables>;
export const CreateItineraryDirectionsDocument = gql`
    mutation createItineraryDirections($itineraryId: ID!, $directions: CreateItineraryDirectionsInput!) {
  createItineraryDirections(
    itineraryId: "itinerary/ABC123"
    directions: $directions
  ) {
    __typename
    directions {
      id
      __typename
      ...ItineraryDirectionsContent
    }
    cascaded {
      ...ItineraryCascadedChanges
    }
  }
}
    ${ItineraryDirectionsContentFragmentDoc}
${ItineraryCascadedChangesFragmentDoc}`;
export type CreateItineraryDirectionsMutationFn = Apollo.MutationFunction<CreateItineraryDirectionsMutation, CreateItineraryDirectionsMutationVariables>;

/**
 * __useCreateItineraryDirectionsMutation__
 *
 * To run a mutation, you first call `useCreateItineraryDirectionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItineraryDirectionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItineraryDirectionsMutation, { data, loading, error }] = useCreateItineraryDirectionsMutation({
 *   variables: {
 *      itineraryId: // value for 'itineraryId'
 *      directions: // value for 'directions'
 *   },
 * });
 */
export function useCreateItineraryDirectionsMutation(baseOptions?: Apollo.MutationHookOptions<CreateItineraryDirectionsMutation, CreateItineraryDirectionsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateItineraryDirectionsMutation, CreateItineraryDirectionsMutationVariables>(CreateItineraryDirectionsDocument, options);
      }
export type CreateItineraryDirectionsMutationHookResult = ReturnType<typeof useCreateItineraryDirectionsMutation>;
export type CreateItineraryDirectionsMutationResult = Apollo.MutationResult<CreateItineraryDirectionsMutation>;
export type CreateItineraryDirectionsMutationOptions = Apollo.BaseMutationOptions<CreateItineraryDirectionsMutation, CreateItineraryDirectionsMutationVariables>;
export const CreateItineraryLocationDocument = gql`
    mutation createItineraryLocation($itineraryId: ID!, $location: CreateItineraryLocationInput!) {
  createItineraryLocation(itineraryId: $itineraryId, location: $location) {
    __typename
    location {
      id
      __typename
      itinerary {
        id
        __typename
        ...ItineraryLocationsCount
      }
      ...ItineraryLocationContent
      place {
        id
        __typename
        ...PlacePartialContent
      }
    }
    cascaded {
      ...ItineraryCascadedChanges
    }
  }
}
    ${ItineraryLocationsCountFragmentDoc}
${ItineraryLocationContentFragmentDoc}
${PlacePartialContentFragmentDoc}
${ItineraryCascadedChangesFragmentDoc}`;
export type CreateItineraryLocationMutationFn = Apollo.MutationFunction<CreateItineraryLocationMutation, CreateItineraryLocationMutationVariables>;

/**
 * __useCreateItineraryLocationMutation__
 *
 * To run a mutation, you first call `useCreateItineraryLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItineraryLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItineraryLocationMutation, { data, loading, error }] = useCreateItineraryLocationMutation({
 *   variables: {
 *      itineraryId: // value for 'itineraryId'
 *      location: // value for 'location'
 *   },
 * });
 */
export function useCreateItineraryLocationMutation(baseOptions?: Apollo.MutationHookOptions<CreateItineraryLocationMutation, CreateItineraryLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateItineraryLocationMutation, CreateItineraryLocationMutationVariables>(CreateItineraryLocationDocument, options);
      }
export type CreateItineraryLocationMutationHookResult = ReturnType<typeof useCreateItineraryLocationMutation>;
export type CreateItineraryLocationMutationResult = Apollo.MutationResult<CreateItineraryLocationMutation>;
export type CreateItineraryLocationMutationOptions = Apollo.BaseMutationOptions<CreateItineraryLocationMutation, CreateItineraryLocationMutationVariables>;
export const CreateItineraryDocument = gql`
    mutation createItinerary($itinerary: CreateItineraryInput!, $profileId: ID) {
  createItinerary(itinerary: $itinerary, profileId: $profileId) {
    __typename
    itinerary {
      id
      __typename
      ...ItineraryContent
      ...ItineraryLocationsCount
    }
  }
}
    ${ItineraryContentFragmentDoc}
${ItineraryLocationsCountFragmentDoc}`;
export type CreateItineraryMutationFn = Apollo.MutationFunction<CreateItineraryMutation, CreateItineraryMutationVariables>;

/**
 * __useCreateItineraryMutation__
 *
 * To run a mutation, you first call `useCreateItineraryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItineraryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItineraryMutation, { data, loading, error }] = useCreateItineraryMutation({
 *   variables: {
 *      itinerary: // value for 'itinerary'
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
export function useCreateItineraryMutation(baseOptions?: Apollo.MutationHookOptions<CreateItineraryMutation, CreateItineraryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateItineraryMutation, CreateItineraryMutationVariables>(CreateItineraryDocument, options);
      }
export type CreateItineraryMutationHookResult = ReturnType<typeof useCreateItineraryMutation>;
export type CreateItineraryMutationResult = Apollo.MutationResult<CreateItineraryMutation>;
export type CreateItineraryMutationOptions = Apollo.BaseMutationOptions<CreateItineraryMutation, CreateItineraryMutationVariables>;
export const DeleteItineraryLocationDocument = gql`
    mutation deleteItineraryLocation($id: ID!) {
  deleteItineraryItem(id: $id) {
    __typename
    itinerary {
      id
      __typename
      ...ItineraryLocationsCount
    }
    cascaded {
      ...ItineraryCascadedChanges
    }
  }
}
    ${ItineraryLocationsCountFragmentDoc}
${ItineraryCascadedChangesFragmentDoc}`;
export type DeleteItineraryLocationMutationFn = Apollo.MutationFunction<DeleteItineraryLocationMutation, DeleteItineraryLocationMutationVariables>;

/**
 * __useDeleteItineraryLocationMutation__
 *
 * To run a mutation, you first call `useDeleteItineraryLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItineraryLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItineraryLocationMutation, { data, loading, error }] = useDeleteItineraryLocationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteItineraryLocationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteItineraryLocationMutation, DeleteItineraryLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteItineraryLocationMutation, DeleteItineraryLocationMutationVariables>(DeleteItineraryLocationDocument, options);
      }
export type DeleteItineraryLocationMutationHookResult = ReturnType<typeof useDeleteItineraryLocationMutation>;
export type DeleteItineraryLocationMutationResult = Apollo.MutationResult<DeleteItineraryLocationMutation>;
export type DeleteItineraryLocationMutationOptions = Apollo.BaseMutationOptions<DeleteItineraryLocationMutation, DeleteItineraryLocationMutationVariables>;
export const DeleteItineraryDocument = gql`
    mutation deleteItinerary($id: ID!) {
  deleteItinerary(id: $id) {
    __typename
  }
}
    `;
export type DeleteItineraryMutationFn = Apollo.MutationFunction<DeleteItineraryMutation, DeleteItineraryMutationVariables>;

/**
 * __useDeleteItineraryMutation__
 *
 * To run a mutation, you first call `useDeleteItineraryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItineraryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItineraryMutation, { data, loading, error }] = useDeleteItineraryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteItineraryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteItineraryMutation, DeleteItineraryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteItineraryMutation, DeleteItineraryMutationVariables>(DeleteItineraryDocument, options);
      }
export type DeleteItineraryMutationHookResult = ReturnType<typeof useDeleteItineraryMutation>;
export type DeleteItineraryMutationResult = Apollo.MutationResult<DeleteItineraryMutation>;
export type DeleteItineraryMutationOptions = Apollo.BaseMutationOptions<DeleteItineraryMutation, DeleteItineraryMutationVariables>;
export const DisableItineraryAutoRouteDocument = gql`
    mutation disableItineraryAutoRoute($id: ID!) {
  updateItinerary(id: $id, itinerary: {autoRoute: {defaultMode: null}}) {
    __typename
    itinerary {
      id
      __typename
      autoRoute {
        defaultMode
      }
    }
    cascaded {
      ...ItineraryCascadedChanges
    }
  }
}
    ${ItineraryCascadedChangesFragmentDoc}`;
export type DisableItineraryAutoRouteMutationFn = Apollo.MutationFunction<DisableItineraryAutoRouteMutation, DisableItineraryAutoRouteMutationVariables>;

/**
 * __useDisableItineraryAutoRouteMutation__
 *
 * To run a mutation, you first call `useDisableItineraryAutoRouteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisableItineraryAutoRouteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disableItineraryAutoRouteMutation, { data, loading, error }] = useDisableItineraryAutoRouteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDisableItineraryAutoRouteMutation(baseOptions?: Apollo.MutationHookOptions<DisableItineraryAutoRouteMutation, DisableItineraryAutoRouteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DisableItineraryAutoRouteMutation, DisableItineraryAutoRouteMutationVariables>(DisableItineraryAutoRouteDocument, options);
      }
export type DisableItineraryAutoRouteMutationHookResult = ReturnType<typeof useDisableItineraryAutoRouteMutation>;
export type DisableItineraryAutoRouteMutationResult = Apollo.MutationResult<DisableItineraryAutoRouteMutation>;
export type DisableItineraryAutoRouteMutationOptions = Apollo.BaseMutationOptions<DisableItineraryAutoRouteMutation, DisableItineraryAutoRouteMutationVariables>;
export const EnableItineraryAutoRouteDocument = gql`
    mutation enableItineraryAutoRoute($id: ID!, $defaultMode: RouteMode!) {
  updateItinerary(id: $id, itinerary: {autoRoute: {defaultMode: $defaultMode}}) {
    __typename
    itinerary {
      id
      __typename
      autoRoute {
        defaultMode
      }
    }
    cascaded {
      ...ItineraryCascadedChanges
    }
  }
}
    ${ItineraryCascadedChangesFragmentDoc}`;
export type EnableItineraryAutoRouteMutationFn = Apollo.MutationFunction<EnableItineraryAutoRouteMutation, EnableItineraryAutoRouteMutationVariables>;

/**
 * __useEnableItineraryAutoRouteMutation__
 *
 * To run a mutation, you first call `useEnableItineraryAutoRouteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableItineraryAutoRouteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableItineraryAutoRouteMutation, { data, loading, error }] = useEnableItineraryAutoRouteMutation({
 *   variables: {
 *      id: // value for 'id'
 *      defaultMode: // value for 'defaultMode'
 *   },
 * });
 */
export function useEnableItineraryAutoRouteMutation(baseOptions?: Apollo.MutationHookOptions<EnableItineraryAutoRouteMutation, EnableItineraryAutoRouteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EnableItineraryAutoRouteMutation, EnableItineraryAutoRouteMutationVariables>(EnableItineraryAutoRouteDocument, options);
      }
export type EnableItineraryAutoRouteMutationHookResult = ReturnType<typeof useEnableItineraryAutoRouteMutation>;
export type EnableItineraryAutoRouteMutationResult = Apollo.MutationResult<EnableItineraryAutoRouteMutation>;
export type EnableItineraryAutoRouteMutationOptions = Apollo.BaseMutationOptions<EnableItineraryAutoRouteMutation, EnableItineraryAutoRouteMutationVariables>;
export const FindItineraryLocationIdsByPlaceIdDocument = gql`
    query findItineraryLocationIdsByPlaceId($itineraryId: ID!, $placeId: ID!, $first: Int!, $after: String) {
  itinerary(id: $itineraryId) {
    descendants(
      placeIds: [$placeId]
      type: ItineraryLocation
      first: $first
      after: $after
    ) {
      __typename
      edges {
        node {
          id
          __typename
          ... on ItineraryLocation {
            place {
              id
              __typename
            }
          }
        }
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
    `;

/**
 * __useFindItineraryLocationIdsByPlaceIdQuery__
 *
 * To run a query within a React component, call `useFindItineraryLocationIdsByPlaceIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindItineraryLocationIdsByPlaceIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindItineraryLocationIdsByPlaceIdQuery({
 *   variables: {
 *      itineraryId: // value for 'itineraryId'
 *      placeId: // value for 'placeId'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useFindItineraryLocationIdsByPlaceIdQuery(baseOptions: Apollo.QueryHookOptions<FindItineraryLocationIdsByPlaceIdQuery, FindItineraryLocationIdsByPlaceIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindItineraryLocationIdsByPlaceIdQuery, FindItineraryLocationIdsByPlaceIdQueryVariables>(FindItineraryLocationIdsByPlaceIdDocument, options);
      }
export function useFindItineraryLocationIdsByPlaceIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindItineraryLocationIdsByPlaceIdQuery, FindItineraryLocationIdsByPlaceIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindItineraryLocationIdsByPlaceIdQuery, FindItineraryLocationIdsByPlaceIdQueryVariables>(FindItineraryLocationIdsByPlaceIdDocument, options);
        }
export type FindItineraryLocationIdsByPlaceIdQueryHookResult = ReturnType<typeof useFindItineraryLocationIdsByPlaceIdQuery>;
export type FindItineraryLocationIdsByPlaceIdLazyQueryHookResult = ReturnType<typeof useFindItineraryLocationIdsByPlaceIdLazyQuery>;
export type FindItineraryLocationIdsByPlaceIdQueryResult = Apollo.QueryResult<FindItineraryLocationIdsByPlaceIdQuery, FindItineraryLocationIdsByPlaceIdQueryVariables>;
export const FindItineraryLocationsByPlaceIdDocument = gql`
    query findItineraryLocationsByPlaceId($itineraryId: ID!, $placeId: ID!, $first: Int!, $after: String) {
  itinerary(id: $itineraryId) {
    descendants(
      placeIds: [$placeId]
      type: ItineraryLocation
      first: $first
      after: $after
    ) {
      __typename
      edges {
        node {
          id
          __typename
          ... on ItineraryLocation {
            ...ItineraryLocationPartialContent
            place {
              id
              __typename
              ...PlacePartialContent
            }
          }
        }
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
    ${ItineraryLocationPartialContentFragmentDoc}
${PlacePartialContentFragmentDoc}`;

/**
 * __useFindItineraryLocationsByPlaceIdQuery__
 *
 * To run a query within a React component, call `useFindItineraryLocationsByPlaceIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindItineraryLocationsByPlaceIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindItineraryLocationsByPlaceIdQuery({
 *   variables: {
 *      itineraryId: // value for 'itineraryId'
 *      placeId: // value for 'placeId'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useFindItineraryLocationsByPlaceIdQuery(baseOptions: Apollo.QueryHookOptions<FindItineraryLocationsByPlaceIdQuery, FindItineraryLocationsByPlaceIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindItineraryLocationsByPlaceIdQuery, FindItineraryLocationsByPlaceIdQueryVariables>(FindItineraryLocationsByPlaceIdDocument, options);
      }
export function useFindItineraryLocationsByPlaceIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindItineraryLocationsByPlaceIdQuery, FindItineraryLocationsByPlaceIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindItineraryLocationsByPlaceIdQuery, FindItineraryLocationsByPlaceIdQueryVariables>(FindItineraryLocationsByPlaceIdDocument, options);
        }
export type FindItineraryLocationsByPlaceIdQueryHookResult = ReturnType<typeof useFindItineraryLocationsByPlaceIdQuery>;
export type FindItineraryLocationsByPlaceIdLazyQueryHookResult = ReturnType<typeof useFindItineraryLocationsByPlaceIdLazyQuery>;
export type FindItineraryLocationsByPlaceIdQueryResult = Apollo.QueryResult<FindItineraryLocationsByPlaceIdQuery, FindItineraryLocationsByPlaceIdQueryVariables>;
export const GetItineraryDirectionsDocument = gql`
    query getItineraryDirections($id: ID!, $includeRoutePolyline: Boolean!) {
  node(id: $id) {
    id
    __typename
    ... on ItineraryDirections {
      ...ItineraryDirectionsContent
      route {
        segments {
          id
          __typename
          mode
          polyline @include(if: $includeRoutePolyline)
        }
      }
    }
  }
}
    ${ItineraryDirectionsContentFragmentDoc}`;

/**
 * __useGetItineraryDirectionsQuery__
 *
 * To run a query within a React component, call `useGetItineraryDirectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItineraryDirectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItineraryDirectionsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      includeRoutePolyline: // value for 'includeRoutePolyline'
 *   },
 * });
 */
export function useGetItineraryDirectionsQuery(baseOptions: Apollo.QueryHookOptions<GetItineraryDirectionsQuery, GetItineraryDirectionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetItineraryDirectionsQuery, GetItineraryDirectionsQueryVariables>(GetItineraryDirectionsDocument, options);
      }
export function useGetItineraryDirectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItineraryDirectionsQuery, GetItineraryDirectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetItineraryDirectionsQuery, GetItineraryDirectionsQueryVariables>(GetItineraryDirectionsDocument, options);
        }
export type GetItineraryDirectionsQueryHookResult = ReturnType<typeof useGetItineraryDirectionsQuery>;
export type GetItineraryDirectionsLazyQueryHookResult = ReturnType<typeof useGetItineraryDirectionsLazyQuery>;
export type GetItineraryDirectionsQueryResult = Apollo.QueryResult<GetItineraryDirectionsQuery, GetItineraryDirectionsQueryVariables>;
export const GetItineraryLocationDocument = gql`
    query getItineraryLocation($id: ID!) {
  node(id: $id) {
    id
    __typename
    ... on ItineraryLocation {
      ...ItineraryLocationContent
      place {
        id
        __typename
        ...PlaceContent
      }
    }
  }
}
    ${ItineraryLocationContentFragmentDoc}
${PlaceContentFragmentDoc}`;

/**
 * __useGetItineraryLocationQuery__
 *
 * To run a query within a React component, call `useGetItineraryLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItineraryLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItineraryLocationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetItineraryLocationQuery(baseOptions: Apollo.QueryHookOptions<GetItineraryLocationQuery, GetItineraryLocationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetItineraryLocationQuery, GetItineraryLocationQueryVariables>(GetItineraryLocationDocument, options);
      }
export function useGetItineraryLocationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItineraryLocationQuery, GetItineraryLocationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetItineraryLocationQuery, GetItineraryLocationQueryVariables>(GetItineraryLocationDocument, options);
        }
export type GetItineraryLocationQueryHookResult = ReturnType<typeof useGetItineraryLocationQuery>;
export type GetItineraryLocationLazyQueryHookResult = ReturnType<typeof useGetItineraryLocationLazyQuery>;
export type GetItineraryLocationQueryResult = Apollo.QueryResult<GetItineraryLocationQuery, GetItineraryLocationQueryVariables>;
export const GetItineraryDocument = gql`
    query getItinerary($id: ID!) {
  itinerary(id: $id) {
    id
    __typename
    ...ItineraryContent
    ...ItineraryLocationsCount
    profile {
      id
      __typename
      ...ProfilePartialContent
    }
  }
}
    ${ItineraryContentFragmentDoc}
${ItineraryLocationsCountFragmentDoc}
${ProfilePartialContentFragmentDoc}`;

/**
 * __useGetItineraryQuery__
 *
 * To run a query within a React component, call `useGetItineraryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItineraryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItineraryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetItineraryQuery(baseOptions: Apollo.QueryHookOptions<GetItineraryQuery, GetItineraryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetItineraryQuery, GetItineraryQueryVariables>(GetItineraryDocument, options);
      }
export function useGetItineraryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItineraryQuery, GetItineraryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetItineraryQuery, GetItineraryQueryVariables>(GetItineraryDocument, options);
        }
export type GetItineraryQueryHookResult = ReturnType<typeof useGetItineraryQuery>;
export type GetItineraryLazyQueryHookResult = ReturnType<typeof useGetItineraryLazyQuery>;
export type GetItineraryQueryResult = Apollo.QueryResult<GetItineraryQuery, GetItineraryQueryVariables>;
export const ListItinerariesDocument = gql`
    query listItineraries($profileId: ID!, $first: Int!, $after: String) {
  itineraries(profileId: $profileId, first: $first, after: $after) {
    __typename
    edges {
      node {
        id
        __typename
        ...ItinerarySearchPartialContent
      }
    }
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    ${ItinerarySearchPartialContentFragmentDoc}`;

/**
 * __useListItinerariesQuery__
 *
 * To run a query within a React component, call `useListItinerariesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListItinerariesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListItinerariesQuery({
 *   variables: {
 *      profileId: // value for 'profileId'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useListItinerariesQuery(baseOptions: Apollo.QueryHookOptions<ListItinerariesQuery, ListItinerariesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListItinerariesQuery, ListItinerariesQueryVariables>(ListItinerariesDocument, options);
      }
export function useListItinerariesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListItinerariesQuery, ListItinerariesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListItinerariesQuery, ListItinerariesQueryVariables>(ListItinerariesDocument, options);
        }
export type ListItinerariesQueryHookResult = ReturnType<typeof useListItinerariesQuery>;
export type ListItinerariesLazyQueryHookResult = ReturnType<typeof useListItinerariesLazyQuery>;
export type ListItinerariesQueryResult = Apollo.QueryResult<ListItinerariesQuery, ListItinerariesQueryVariables>;
export const ListItineraryLocationsDocument = gql`
    query listItineraryLocations($id: ID!, $first: Int!, $after: String, $includeRoutePolyline: Boolean!) {
  itinerary(id: $id) {
    id
    __typename
    locations: children(first: $first, type: ItineraryLocation, after: $after) @connection(key: "list-itinerary-locations") {
      edges {
        location: node {
          id
          __typename
          ... on ItineraryLocation {
            ...ItineraryLocationPartialContent
            place {
              id
              __typename
              ...PlacePartialContent
            }
          }
        }
        arrival: directions(first: 1, direction: Inbound) {
          directions: nodes {
            id
            __typename
            ...ItineraryDirectionsPartialContent
            route {
              segments {
                id
                __typename
                mode
                polyline @include(if: $includeRoutePolyline)
              }
            }
          }
          totalCount
        }
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
    ${ItineraryLocationPartialContentFragmentDoc}
${PlacePartialContentFragmentDoc}
${ItineraryDirectionsPartialContentFragmentDoc}`;

/**
 * __useListItineraryLocationsQuery__
 *
 * To run a query within a React component, call `useListItineraryLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListItineraryLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListItineraryLocationsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      includeRoutePolyline: // value for 'includeRoutePolyline'
 *   },
 * });
 */
export function useListItineraryLocationsQuery(baseOptions: Apollo.QueryHookOptions<ListItineraryLocationsQuery, ListItineraryLocationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListItineraryLocationsQuery, ListItineraryLocationsQueryVariables>(ListItineraryLocationsDocument, options);
      }
export function useListItineraryLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListItineraryLocationsQuery, ListItineraryLocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListItineraryLocationsQuery, ListItineraryLocationsQueryVariables>(ListItineraryLocationsDocument, options);
        }
export type ListItineraryLocationsQueryHookResult = ReturnType<typeof useListItineraryLocationsQuery>;
export type ListItineraryLocationsLazyQueryHookResult = ReturnType<typeof useListItineraryLocationsLazyQuery>;
export type ListItineraryLocationsQueryResult = Apollo.QueryResult<ListItineraryLocationsQuery, ListItineraryLocationsQueryVariables>;
export const MoveItineraryLocationAfterDocument = gql`
    mutation moveItineraryLocationAfter($id: ID!, $siblingId: ID!) {
  moveItineraryItem(id: $id, positionAfterSibling: {siblingId: $siblingId}) {
    __typename
    cascaded {
      ...ItineraryCascadedChanges
    }
  }
}
    ${ItineraryCascadedChangesFragmentDoc}`;
export type MoveItineraryLocationAfterMutationFn = Apollo.MutationFunction<MoveItineraryLocationAfterMutation, MoveItineraryLocationAfterMutationVariables>;

/**
 * __useMoveItineraryLocationAfterMutation__
 *
 * To run a mutation, you first call `useMoveItineraryLocationAfterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveItineraryLocationAfterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveItineraryLocationAfterMutation, { data, loading, error }] = useMoveItineraryLocationAfterMutation({
 *   variables: {
 *      id: // value for 'id'
 *      siblingId: // value for 'siblingId'
 *   },
 * });
 */
export function useMoveItineraryLocationAfterMutation(baseOptions?: Apollo.MutationHookOptions<MoveItineraryLocationAfterMutation, MoveItineraryLocationAfterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MoveItineraryLocationAfterMutation, MoveItineraryLocationAfterMutationVariables>(MoveItineraryLocationAfterDocument, options);
      }
export type MoveItineraryLocationAfterMutationHookResult = ReturnType<typeof useMoveItineraryLocationAfterMutation>;
export type MoveItineraryLocationAfterMutationResult = Apollo.MutationResult<MoveItineraryLocationAfterMutation>;
export type MoveItineraryLocationAfterMutationOptions = Apollo.BaseMutationOptions<MoveItineraryLocationAfterMutation, MoveItineraryLocationAfterMutationVariables>;
export const MoveItineraryLocationToStartDocument = gql`
    mutation moveItineraryLocationToStart($id: ID!) {
  moveItineraryItem(id: $id, positionAtStart: {}) {
    __typename
    cascaded {
      ...ItineraryCascadedChanges
    }
  }
}
    ${ItineraryCascadedChangesFragmentDoc}`;
export type MoveItineraryLocationToStartMutationFn = Apollo.MutationFunction<MoveItineraryLocationToStartMutation, MoveItineraryLocationToStartMutationVariables>;

/**
 * __useMoveItineraryLocationToStartMutation__
 *
 * To run a mutation, you first call `useMoveItineraryLocationToStartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveItineraryLocationToStartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveItineraryLocationToStartMutation, { data, loading, error }] = useMoveItineraryLocationToStartMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMoveItineraryLocationToStartMutation(baseOptions?: Apollo.MutationHookOptions<MoveItineraryLocationToStartMutation, MoveItineraryLocationToStartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MoveItineraryLocationToStartMutation, MoveItineraryLocationToStartMutationVariables>(MoveItineraryLocationToStartDocument, options);
      }
export type MoveItineraryLocationToStartMutationHookResult = ReturnType<typeof useMoveItineraryLocationToStartMutation>;
export type MoveItineraryLocationToStartMutationResult = Apollo.MutationResult<MoveItineraryLocationToStartMutation>;
export type MoveItineraryLocationToStartMutationOptions = Apollo.BaseMutationOptions<MoveItineraryLocationToStartMutation, MoveItineraryLocationToStartMutationVariables>;
export const UpdateItineraryLocationIsOptionalDocument = gql`
    mutation updateItineraryLocationIsOptional($id: ID!, $optional: Boolean!) {
  updateItineraryLocation(id: $id, location: {optional: $optional}) {
    __typename
    location {
      id
      __typename
      optional
    }
    cascaded {
      ...ItineraryCascadedChanges
    }
  }
}
    ${ItineraryCascadedChangesFragmentDoc}`;
export type UpdateItineraryLocationIsOptionalMutationFn = Apollo.MutationFunction<UpdateItineraryLocationIsOptionalMutation, UpdateItineraryLocationIsOptionalMutationVariables>;

/**
 * __useUpdateItineraryLocationIsOptionalMutation__
 *
 * To run a mutation, you first call `useUpdateItineraryLocationIsOptionalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItineraryLocationIsOptionalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItineraryLocationIsOptionalMutation, { data, loading, error }] = useUpdateItineraryLocationIsOptionalMutation({
 *   variables: {
 *      id: // value for 'id'
 *      optional: // value for 'optional'
 *   },
 * });
 */
export function useUpdateItineraryLocationIsOptionalMutation(baseOptions?: Apollo.MutationHookOptions<UpdateItineraryLocationIsOptionalMutation, UpdateItineraryLocationIsOptionalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateItineraryLocationIsOptionalMutation, UpdateItineraryLocationIsOptionalMutationVariables>(UpdateItineraryLocationIsOptionalDocument, options);
      }
export type UpdateItineraryLocationIsOptionalMutationHookResult = ReturnType<typeof useUpdateItineraryLocationIsOptionalMutation>;
export type UpdateItineraryLocationIsOptionalMutationResult = Apollo.MutationResult<UpdateItineraryLocationIsOptionalMutation>;
export type UpdateItineraryLocationIsOptionalMutationOptions = Apollo.BaseMutationOptions<UpdateItineraryLocationIsOptionalMutation, UpdateItineraryLocationIsOptionalMutationVariables>;
export const UpdateItineraryLocationDocument = gql`
    mutation updateItineraryLocation($id: ID!, $location: UpdateItineraryLocationInput!) {
  updateItineraryLocation(id: $id, location: $location) {
    __typename
    location {
      id
      __typename
      ...ItineraryLocationContent
    }
    cascaded {
      ...ItineraryCascadedChanges
    }
  }
}
    ${ItineraryLocationContentFragmentDoc}
${ItineraryCascadedChangesFragmentDoc}`;
export type UpdateItineraryLocationMutationFn = Apollo.MutationFunction<UpdateItineraryLocationMutation, UpdateItineraryLocationMutationVariables>;

/**
 * __useUpdateItineraryLocationMutation__
 *
 * To run a mutation, you first call `useUpdateItineraryLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItineraryLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItineraryLocationMutation, { data, loading, error }] = useUpdateItineraryLocationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      location: // value for 'location'
 *   },
 * });
 */
export function useUpdateItineraryLocationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateItineraryLocationMutation, UpdateItineraryLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateItineraryLocationMutation, UpdateItineraryLocationMutationVariables>(UpdateItineraryLocationDocument, options);
      }
export type UpdateItineraryLocationMutationHookResult = ReturnType<typeof useUpdateItineraryLocationMutation>;
export type UpdateItineraryLocationMutationResult = Apollo.MutationResult<UpdateItineraryLocationMutation>;
export type UpdateItineraryLocationMutationOptions = Apollo.BaseMutationOptions<UpdateItineraryLocationMutation, UpdateItineraryLocationMutationVariables>;
export const UpdateItineraryDocument = gql`
    mutation updateItinerary($id: ID!, $itinerary: UpdateItineraryInput!) {
  updateItinerary(id: $id, itinerary: $itinerary) {
    __typename
    itinerary {
      id
      __typename
      ...ItineraryContent
    }
    cascaded {
      ...ItineraryCascadedChanges
    }
  }
}
    ${ItineraryContentFragmentDoc}
${ItineraryCascadedChangesFragmentDoc}`;
export type UpdateItineraryMutationFn = Apollo.MutationFunction<UpdateItineraryMutation, UpdateItineraryMutationVariables>;

/**
 * __useUpdateItineraryMutation__
 *
 * To run a mutation, you first call `useUpdateItineraryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItineraryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItineraryMutation, { data, loading, error }] = useUpdateItineraryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      itinerary: // value for 'itinerary'
 *   },
 * });
 */
export function useUpdateItineraryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateItineraryMutation, UpdateItineraryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateItineraryMutation, UpdateItineraryMutationVariables>(UpdateItineraryDocument, options);
      }
export type UpdateItineraryMutationHookResult = ReturnType<typeof useUpdateItineraryMutation>;
export type UpdateItineraryMutationResult = Apollo.MutationResult<UpdateItineraryMutation>;
export type UpdateItineraryMutationOptions = Apollo.BaseMutationOptions<UpdateItineraryMutation, UpdateItineraryMutationVariables>;
export const GetMediaImageDocument = gql`
    query getMediaImage($id: ID!, $smallBestFit: [Int!], $mediumBestFit: [Int!], $largeBestFit: [Int!]) {
  mediaResource(id: $id) {
    __typename
    ... on MediaImage {
      id
      ...MediaImageContent
      small: source(bestFit: $smallBestFit) {
        url
      }
      medium: source(bestFit: $mediumBestFit) {
        url
      }
      large: source(bestFit: $largeBestFit) {
        url
      }
    }
  }
}
    ${MediaImageContentFragmentDoc}`;

/**
 * __useGetMediaImageQuery__
 *
 * To run a query within a React component, call `useGetMediaImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMediaImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMediaImageQuery({
 *   variables: {
 *      id: // value for 'id'
 *      smallBestFit: // value for 'smallBestFit'
 *      mediumBestFit: // value for 'mediumBestFit'
 *      largeBestFit: // value for 'largeBestFit'
 *   },
 * });
 */
export function useGetMediaImageQuery(baseOptions: Apollo.QueryHookOptions<GetMediaImageQuery, GetMediaImageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMediaImageQuery, GetMediaImageQueryVariables>(GetMediaImageDocument, options);
      }
export function useGetMediaImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMediaImageQuery, GetMediaImageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMediaImageQuery, GetMediaImageQueryVariables>(GetMediaImageDocument, options);
        }
export type GetMediaImageQueryHookResult = ReturnType<typeof useGetMediaImageQuery>;
export type GetMediaImageLazyQueryHookResult = ReturnType<typeof useGetMediaImageLazyQuery>;
export type GetMediaImageQueryResult = Apollo.QueryResult<GetMediaImageQuery, GetMediaImageQueryVariables>;
export const AutocompleteSearchPlaceDocument = gql`
    query autocompleteSearchPlace($text: String!, $source: PlaceSearchSource!) {
  placeAutocompleteSearch(text: $text, sources: [$source], first: 10) {
    __typename
    edges {
      node {
        id
        __typename
        ...PlaceSearchContent
      }
      main {
        label
        matches {
          offset
          length
        }
      }
      secondary {
        label
        matches {
          offset
          length
        }
      }
    }
  }
}
    ${PlaceSearchContentFragmentDoc}`;

/**
 * __useAutocompleteSearchPlaceQuery__
 *
 * To run a query within a React component, call `useAutocompleteSearchPlaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useAutocompleteSearchPlaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAutocompleteSearchPlaceQuery({
 *   variables: {
 *      text: // value for 'text'
 *      source: // value for 'source'
 *   },
 * });
 */
export function useAutocompleteSearchPlaceQuery(baseOptions: Apollo.QueryHookOptions<AutocompleteSearchPlaceQuery, AutocompleteSearchPlaceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AutocompleteSearchPlaceQuery, AutocompleteSearchPlaceQueryVariables>(AutocompleteSearchPlaceDocument, options);
      }
export function useAutocompleteSearchPlaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AutocompleteSearchPlaceQuery, AutocompleteSearchPlaceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AutocompleteSearchPlaceQuery, AutocompleteSearchPlaceQueryVariables>(AutocompleteSearchPlaceDocument, options);
        }
export type AutocompleteSearchPlaceQueryHookResult = ReturnType<typeof useAutocompleteSearchPlaceQuery>;
export type AutocompleteSearchPlaceLazyQueryHookResult = ReturnType<typeof useAutocompleteSearchPlaceLazyQuery>;
export type AutocompleteSearchPlaceQueryResult = Apollo.QueryResult<AutocompleteSearchPlaceQuery, AutocompleteSearchPlaceQueryVariables>;
export const GetPlaceDocument = gql`
    query getPlace($id: ID!) {
  place(id: $id) {
    id
    __typename
    ...PlaceContent
  }
}
    ${PlaceContentFragmentDoc}`;

/**
 * __useGetPlaceQuery__
 *
 * To run a query within a React component, call `useGetPlaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlaceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlaceQuery(baseOptions: Apollo.QueryHookOptions<GetPlaceQuery, GetPlaceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlaceQuery, GetPlaceQueryVariables>(GetPlaceDocument, options);
      }
export function useGetPlaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlaceQuery, GetPlaceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlaceQuery, GetPlaceQueryVariables>(GetPlaceDocument, options);
        }
export type GetPlaceQueryHookResult = ReturnType<typeof useGetPlaceQuery>;
export type GetPlaceLazyQueryHookResult = ReturnType<typeof useGetPlaceLazyQuery>;
export type GetPlaceQueryResult = Apollo.QueryResult<GetPlaceQuery, GetPlaceQueryVariables>;
export const ReverseSearchPlaceByPositionDocument = gql`
    query reverseSearchPlaceByPosition($focus: PositionInput!, $sources: [PlaceSearchSource!]!, $first: Int!) {
  placeReverseSearch(focus: $focus, sources: $sources, first: $first) {
    __typename
    places: nodes {
      id
      __typename
      ...PlaceSearchContent
    }
  }
}
    ${PlaceSearchContentFragmentDoc}`;

/**
 * __useReverseSearchPlaceByPositionQuery__
 *
 * To run a query within a React component, call `useReverseSearchPlaceByPositionQuery` and pass it any options that fit your needs.
 * When your component renders, `useReverseSearchPlaceByPositionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReverseSearchPlaceByPositionQuery({
 *   variables: {
 *      focus: // value for 'focus'
 *      sources: // value for 'sources'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useReverseSearchPlaceByPositionQuery(baseOptions: Apollo.QueryHookOptions<ReverseSearchPlaceByPositionQuery, ReverseSearchPlaceByPositionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReverseSearchPlaceByPositionQuery, ReverseSearchPlaceByPositionQueryVariables>(ReverseSearchPlaceByPositionDocument, options);
      }
export function useReverseSearchPlaceByPositionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReverseSearchPlaceByPositionQuery, ReverseSearchPlaceByPositionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReverseSearchPlaceByPositionQuery, ReverseSearchPlaceByPositionQueryVariables>(ReverseSearchPlaceByPositionDocument, options);
        }
export type ReverseSearchPlaceByPositionQueryHookResult = ReturnType<typeof useReverseSearchPlaceByPositionQuery>;
export type ReverseSearchPlaceByPositionLazyQueryHookResult = ReturnType<typeof useReverseSearchPlaceByPositionLazyQuery>;
export type ReverseSearchPlaceByPositionQueryResult = Apollo.QueryResult<ReverseSearchPlaceByPositionQuery, ReverseSearchPlaceByPositionQueryVariables>;
export const GetProfileDocument = gql`
    query getProfile($id: ID!) {
  profile(id: $id) {
    id
    __typename
    ...ProfileContent
  }
}
    ${ProfileContentFragmentDoc}`;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export const ListAuthorizedProfilesDocument = gql`
    query listAuthorizedProfiles($first: Int!, $after: String) {
  authorizedProfiles(first: $first, after: $after) {
    __typename
    profiles: nodes {
      id
      __typename
      ...ProfilePartialContent
    }
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    ${ProfilePartialContentFragmentDoc}`;

/**
 * __useListAuthorizedProfilesQuery__
 *
 * To run a query within a React component, call `useListAuthorizedProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAuthorizedProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAuthorizedProfilesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useListAuthorizedProfilesQuery(baseOptions: Apollo.QueryHookOptions<ListAuthorizedProfilesQuery, ListAuthorizedProfilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListAuthorizedProfilesQuery, ListAuthorizedProfilesQueryVariables>(ListAuthorizedProfilesDocument, options);
      }
export function useListAuthorizedProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAuthorizedProfilesQuery, ListAuthorizedProfilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListAuthorizedProfilesQuery, ListAuthorizedProfilesQueryVariables>(ListAuthorizedProfilesDocument, options);
        }
export type ListAuthorizedProfilesQueryHookResult = ReturnType<typeof useListAuthorizedProfilesQuery>;
export type ListAuthorizedProfilesLazyQueryHookResult = ReturnType<typeof useListAuthorizedProfilesLazyQuery>;
export type ListAuthorizedProfilesQueryResult = Apollo.QueryResult<ListAuthorizedProfilesQuery, ListAuthorizedProfilesQueryVariables>;
export const SearchRoutesBetweenPositionsDocument = gql`
    query searchRoutesBetweenPositions($mode: RouteSearchableMode!, $positions: [PositionInput!]!, $first: Int!, $includeRoutePolyline: Boolean!) {
  routes(mode: $mode, positions: $positions, first: $first) {
    __typename
    routes: nodes {
      segments {
        distance(unit: Kilometers)
        duration(unit: Minutes)
        polyline @include(if: $includeRoutePolyline)
      }
    }
  }
}
    `;

/**
 * __useSearchRoutesBetweenPositionsQuery__
 *
 * To run a query within a React component, call `useSearchRoutesBetweenPositionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRoutesBetweenPositionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRoutesBetweenPositionsQuery({
 *   variables: {
 *      mode: // value for 'mode'
 *      positions: // value for 'positions'
 *      first: // value for 'first'
 *      includeRoutePolyline: // value for 'includeRoutePolyline'
 *   },
 * });
 */
export function useSearchRoutesBetweenPositionsQuery(baseOptions: Apollo.QueryHookOptions<SearchRoutesBetweenPositionsQuery, SearchRoutesBetweenPositionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchRoutesBetweenPositionsQuery, SearchRoutesBetweenPositionsQueryVariables>(SearchRoutesBetweenPositionsDocument, options);
      }
export function useSearchRoutesBetweenPositionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchRoutesBetweenPositionsQuery, SearchRoutesBetweenPositionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchRoutesBetweenPositionsQuery, SearchRoutesBetweenPositionsQueryVariables>(SearchRoutesBetweenPositionsDocument, options);
        }
export type SearchRoutesBetweenPositionsQueryHookResult = ReturnType<typeof useSearchRoutesBetweenPositionsQuery>;
export type SearchRoutesBetweenPositionsLazyQueryHookResult = ReturnType<typeof useSearchRoutesBetweenPositionsLazyQuery>;
export type SearchRoutesBetweenPositionsQueryResult = Apollo.QueryResult<SearchRoutesBetweenPositionsQuery, SearchRoutesBetweenPositionsQueryVariables>;
export type ApproveProfileFollowPayloadKeySpecifier = ('fromProfile' | 'status' | 'toProfile' | ApproveProfileFollowPayloadKeySpecifier)[];
export type ApproveProfileFollowPayloadFieldPolicy = {
	fromProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	toProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeKeySpecifier = ('id' | 'locale' | 'meta' | 'value' | AttributeKeySpecifier)[];
export type AttributeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | AttributeConnectionKeySpecifier)[];
export type AttributeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeEdgeKeySpecifier = ('cursor' | 'node' | AttributeEdgeKeySpecifier)[];
export type AttributeEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BillingAddressKeySpecifier = ('addressLineOne' | 'addressLineTwo' | 'countryCode' | 'locality' | 'postalCode' | 'region' | BillingAddressKeySpecifier)[];
export type BillingAddressFieldPolicy = {
	addressLineOne?: FieldPolicy<any> | FieldReadFunction<any>,
	addressLineTwo?: FieldPolicy<any> | FieldReadFunction<any>,
	countryCode?: FieldPolicy<any> | FieldReadFunction<any>,
	locality?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCode?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BillingDetailsKeySpecifier = ('address' | 'emailAddress' | 'familyName' | 'givenName' | 'organization' | 'profile' | BillingDetailsKeySpecifier)[];
export type BillingDetailsFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	emailAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	familyName?: FieldPolicy<any> | FieldReadFunction<any>,
	givenName?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BillingPlanKeySpecifier = ('id' | 'price' | 'quantity' | BillingPlanKeySpecifier)[];
export type BillingPlanFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BillingPriceKeySpecifier = ('amount' | 'currency' | 'id' | 'product' | 'recurring' | BillingPriceKeySpecifier)[];
export type BillingPriceFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	recurring?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BillingPriceConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | BillingPriceConnectionKeySpecifier)[];
export type BillingPriceConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BillingPriceEdgeKeySpecifier = ('cursor' | 'node' | BillingPriceEdgeKeySpecifier)[];
export type BillingPriceEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BillingPriceRecurringKeySpecifier = ('count' | 'interval' | BillingPriceRecurringKeySpecifier)[];
export type BillingPriceRecurringFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	interval?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BillingProductKeySpecifier = ('description' | 'id' | 'name' | BillingProductKeySpecifier)[];
export type BillingProductFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BillingSubscriptionKeySpecifier = ('created' | 'id' | 'modified' | 'plans' | 'profile' | 'status' | BillingSubscriptionKeySpecifier)[];
export type BillingSubscriptionFieldPolicy = {
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	modified?: FieldPolicy<any> | FieldReadFunction<any>,
	plans?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BillingSubscriptionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | BillingSubscriptionConnectionKeySpecifier)[];
export type BillingSubscriptionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BillingSubscriptionEdgeKeySpecifier = ('cursor' | 'node' | BillingSubscriptionEdgeKeySpecifier)[];
export type BillingSubscriptionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BoundsKeySpecifier = ('e' | 'en' | 'minMax' | 'n' | 's' | 'w' | 'ws' | 'wsen' | BoundsKeySpecifier)[];
export type BoundsFieldPolicy = {
	e?: FieldPolicy<any> | FieldReadFunction<any>,
	en?: FieldPolicy<any> | FieldReadFunction<any>,
	minMax?: FieldPolicy<any> | FieldReadFunction<any>,
	n?: FieldPolicy<any> | FieldReadFunction<any>,
	s?: FieldPolicy<any> | FieldReadFunction<any>,
	w?: FieldPolicy<any> | FieldReadFunction<any>,
	ws?: FieldPolicy<any> | FieldReadFunction<any>,
	wsen?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CaptureMarketingInformationPayloadKeySpecifier = ('profileId' | CaptureMarketingInformationPayloadKeySpecifier)[];
export type CaptureMarketingInformationPayloadFieldPolicy = {
	profileId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChangeItineraryDefaultLocalePayloadKeySpecifier = ('itinerary' | ChangeItineraryDefaultLocalePayloadKeySpecifier)[];
export type ChangeItineraryDefaultLocalePayloadFieldPolicy = {
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClaimProfileHandlePayloadKeySpecifier = ('profile' | ClaimProfileHandlePayloadKeySpecifier)[];
export type ClaimProfileHandlePayloadFieldPolicy = {
	profile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionKeySpecifier = ('attr' | 'attrValue' | 'attrs' | 'created' | 'description' | 'discriminator' | 'id' | 'item' | 'items' | 'media' | 'mediaContainers' | 'modified' | 'preferredMedia' | 'profile' | 'readMoreUrl' | 'synopsis' | 'tags' | 'title' | 'websiteUrl' | CollectionKeySpecifier)[];
export type CollectionFieldPolicy = {
	attr?: FieldPolicy<any> | FieldReadFunction<any>,
	attrValue?: FieldPolicy<any> | FieldReadFunction<any>,
	attrs?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	discriminator?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaContainers?: FieldPolicy<any> | FieldReadFunction<any>,
	modified?: FieldPolicy<any> | FieldReadFunction<any>,
	preferredMedia?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	readMoreUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	synopsis?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	websiteUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | CollectionConnectionKeySpecifier)[];
export type CollectionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionEdgeKeySpecifier = ('cursor' | 'node' | CollectionEdgeKeySpecifier)[];
export type CollectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionItemKeySpecifier = ('attr' | 'attrValue' | 'attrs' | 'created' | 'description' | 'externalId' | 'externalSource' | 'id' | 'media' | 'mediaContainers' | 'modified' | 'preferredMedia' | 'profile' | 'readMoreUrl' | 'sectionIds' | 'synopsis' | 'tags' | 'title' | 'websiteUrl' | CollectionItemKeySpecifier)[];
export type CollectionItemFieldPolicy = {
	attr?: FieldPolicy<any> | FieldReadFunction<any>,
	attrValue?: FieldPolicy<any> | FieldReadFunction<any>,
	attrs?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	externalId?: FieldPolicy<any> | FieldReadFunction<any>,
	externalSource?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaContainers?: FieldPolicy<any> | FieldReadFunction<any>,
	modified?: FieldPolicy<any> | FieldReadFunction<any>,
	preferredMedia?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	readMoreUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionIds?: FieldPolicy<any> | FieldReadFunction<any>,
	synopsis?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	websiteUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionItemConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | CollectionItemConnectionKeySpecifier)[];
export type CollectionItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionItemEdgeKeySpecifier = ('cursor' | 'node' | CollectionItemEdgeKeySpecifier)[];
export type CollectionItemEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionItemFailedToLoadKeySpecifier = ('id' | CollectionItemFailedToLoadKeySpecifier)[];
export type CollectionItemFailedToLoadFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionLocationKeySpecifier = ('address' | 'attr' | 'attrValue' | 'attrs' | 'bounds' | 'contact' | 'created' | 'description' | 'externalId' | 'externalSource' | 'id' | 'media' | 'mediaContainers' | 'modified' | 'place' | 'position' | 'preferredMedia' | 'profile' | 'readMoreUrl' | 'sectionIds' | 'synopsis' | 'tags' | 'title' | 'websiteUrl' | CollectionLocationKeySpecifier)[];
export type CollectionLocationFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	attr?: FieldPolicy<any> | FieldReadFunction<any>,
	attrValue?: FieldPolicy<any> | FieldReadFunction<any>,
	attrs?: FieldPolicy<any> | FieldReadFunction<any>,
	bounds?: FieldPolicy<any> | FieldReadFunction<any>,
	contact?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	externalId?: FieldPolicy<any> | FieldReadFunction<any>,
	externalSource?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaContainers?: FieldPolicy<any> | FieldReadFunction<any>,
	modified?: FieldPolicy<any> | FieldReadFunction<any>,
	place?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	preferredMedia?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	readMoreUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	sectionIds?: FieldPolicy<any> | FieldReadFunction<any>,
	synopsis?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	websiteUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConnectedAppKeySpecifier = ('authType' | 'id' | 'privateConfiguration' | 'profile' | 'publicId' | 'scope' | 'serviceKey' | 'type' | ConnectedAppKeySpecifier)[];
export type ConnectedAppFieldPolicy = {
	authType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	privateConfiguration?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	publicId?: FieldPolicy<any> | FieldReadFunction<any>,
	scope?: FieldPolicy<any> | FieldReadFunction<any>,
	serviceKey?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConnectedAppConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ConnectedAppConnectionKeySpecifier)[];
export type ConnectedAppConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConnectedAppEdgeKeySpecifier = ('cursor' | 'node' | ConnectedAppEdgeKeySpecifier)[];
export type ConnectedAppEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateBillingCheckoutSessionOutputKeySpecifier = ('url' | CreateBillingCheckoutSessionOutputKeySpecifier)[];
export type CreateBillingCheckoutSessionOutputFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateBillingPortalSessionOutputKeySpecifier = ('url' | CreateBillingPortalSessionOutputKeySpecifier)[];
export type CreateBillingPortalSessionOutputFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCollectionLocationPayloadKeySpecifier = ('location' | CreateCollectionLocationPayloadKeySpecifier)[];
export type CreateCollectionLocationPayloadFieldPolicy = {
	location?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCollectionPayloadKeySpecifier = ('collection' | CreateCollectionPayloadKeySpecifier)[];
export type CreateCollectionPayloadFieldPolicy = {
	collection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateConnectedAppPayloadKeySpecifier = ('connectedApp' | CreateConnectedAppPayloadKeySpecifier)[];
export type CreateConnectedAppPayloadFieldPolicy = {
	connectedApp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateIconSilhouettePayloadKeySpecifier = ('icon' | CreateIconSilhouettePayloadKeySpecifier)[];
export type CreateIconSilhouettePayloadFieldPolicy = {
	icon?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateItineraryCollectionPayloadKeySpecifier = ('cascaded' | 'collection' | 'itinerary' | CreateItineraryCollectionPayloadKeySpecifier)[];
export type CreateItineraryCollectionPayloadFieldPolicy = {
	cascaded?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateItineraryDirectionsPayloadKeySpecifier = ('cascaded' | 'directions' | 'itinerary' | CreateItineraryDirectionsPayloadKeySpecifier)[];
export type CreateItineraryDirectionsPayloadFieldPolicy = {
	cascaded?: FieldPolicy<any> | FieldReadFunction<any>,
	directions?: FieldPolicy<any> | FieldReadFunction<any>,
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateItineraryLocationPayloadKeySpecifier = ('cascaded' | 'itinerary' | 'location' | CreateItineraryLocationPayloadKeySpecifier)[];
export type CreateItineraryLocationPayloadFieldPolicy = {
	cascaded?: FieldPolicy<any> | FieldReadFunction<any>,
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateItineraryPayloadKeySpecifier = ('itinerary' | CreateItineraryPayloadKeySpecifier)[];
export type CreateItineraryPayloadFieldPolicy = {
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateProfilePayloadKeySpecifier = ('profile' | CreateProfilePayloadKeySpecifier)[];
export type CreateProfilePayloadFieldPolicy = {
	profile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateUserAgreementPayloadKeySpecifier = ('userAgreement' | CreateUserAgreementPayloadKeySpecifier)[];
export type CreateUserAgreementPayloadFieldPolicy = {
	userAgreement?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteCollectionItemPayloadKeySpecifier = ('id' | DeleteCollectionItemPayloadKeySpecifier)[];
export type DeleteCollectionItemPayloadFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteCollectionPayloadKeySpecifier = ('id' | DeleteCollectionPayloadKeySpecifier)[];
export type DeleteCollectionPayloadFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteConnectedAppPayloadKeySpecifier = ('id' | DeleteConnectedAppPayloadKeySpecifier)[];
export type DeleteConnectedAppPayloadFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteIconResourcePayloadKeySpecifier = ('id' | DeleteIconResourcePayloadKeySpecifier)[];
export type DeleteIconResourcePayloadFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteItineraryItemPayloadKeySpecifier = ('cascaded' | 'id' | 'itinerary' | DeleteItineraryItemPayloadKeySpecifier)[];
export type DeleteItineraryItemPayloadFieldPolicy = {
	cascaded?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteItineraryPayloadKeySpecifier = ('id' | DeleteItineraryPayloadKeySpecifier)[];
export type DeleteItineraryPayloadFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteProfilePayloadKeySpecifier = ('id' | DeleteProfilePayloadKeySpecifier)[];
export type DeleteProfilePayloadFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DenyProfileFollowPayloadKeySpecifier = ('fromProfile' | 'status' | 'toProfile' | DenyProfileFollowPayloadKeySpecifier)[];
export type DenyProfileFollowPayloadFieldPolicy = {
	fromProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	toProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DuplicateItineraryPayloadKeySpecifier = ('itinerary' | DuplicateItineraryPayloadKeySpecifier)[];
export type DuplicateItineraryPayloadFieldPolicy = {
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ElevationKeySpecifier = ('gain' | 'loss' | 'max' | 'min' | ElevationKeySpecifier)[];
export type ElevationFieldPolicy = {
	gain?: FieldPolicy<any> | FieldReadFunction<any>,
	loss?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FinalizeMediaUploadPayloadKeySpecifier = ('resource' | 'status' | FinalizeMediaUploadPayloadKeySpecifier)[];
export type FinalizeMediaUploadPayloadFieldPolicy = {
	resource?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FollowProfilePayloadKeySpecifier = ('fromProfile' | 'status' | 'toProfile' | FollowProfilePayloadKeySpecifier)[];
export type FollowProfilePayloadFieldPolicy = {
	fromProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	toProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IconCompositionKeySpecifier = ('created' | 'iconFill' | 'id' | 'key' | 'modified' | 'name' | 'resource' | 'shieldFill' | 'shieldKey' | 'shieldStroke' | IconCompositionKeySpecifier)[];
export type IconCompositionFieldPolicy = {
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	iconFill?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	modified?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	resource?: FieldPolicy<any> | FieldReadFunction<any>,
	shieldFill?: FieldPolicy<any> | FieldReadFunction<any>,
	shieldKey?: FieldPolicy<any> | FieldReadFunction<any>,
	shieldStroke?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IconCompositionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | IconCompositionConnectionKeySpecifier)[];
export type IconCompositionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IconCompositionEdgeKeySpecifier = ('cursor' | 'node' | IconCompositionEdgeKeySpecifier)[];
export type IconCompositionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IconResourceKeySpecifier = ('attr' | 'attrValue' | 'attrs' | 'created' | 'id' | 'key' | 'modified' | 'name' | 'profile' | IconResourceKeySpecifier)[];
export type IconResourceFieldPolicy = {
	attr?: FieldPolicy<any> | FieldReadFunction<any>,
	attrValue?: FieldPolicy<any> | FieldReadFunction<any>,
	attrs?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	modified?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IconResourceConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | IconResourceConnectionKeySpecifier)[];
export type IconResourceConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IconResourceEdgeKeySpecifier = ('cursor' | 'node' | IconResourceEdgeKeySpecifier)[];
export type IconResourceEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IconResourceFailedToLoadKeySpecifier = ('id' | IconResourceFailedToLoadKeySpecifier)[];
export type IconResourceFailedToLoadFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IconSilhouetteKeySpecifier = ('attr' | 'attrValue' | 'attrs' | 'created' | 'id' | 'key' | 'modified' | 'name' | 'paths' | 'profile' | 'viewBox' | IconSilhouetteKeySpecifier)[];
export type IconSilhouetteFieldPolicy = {
	attr?: FieldPolicy<any> | FieldReadFunction<any>,
	attrValue?: FieldPolicy<any> | FieldReadFunction<any>,
	attrs?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	modified?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	paths?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	viewBox?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IsochroneKeySpecifier = ('bounds' | 'copyrights' | 'duration' | 'mode' | 'polygon' | IsochroneKeySpecifier)[];
export type IsochroneFieldPolicy = {
	bounds?: FieldPolicy<any> | FieldReadFunction<any>,
	copyrights?: FieldPolicy<any> | FieldReadFunction<any>,
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	mode?: FieldPolicy<any> | FieldReadFunction<any>,
	polygon?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItineraryKeySpecifier = ('attr' | 'attrValue' | 'attrs' | 'autoRoute' | 'bounds' | 'children' | 'created' | 'defaultLocale' | 'descendants' | 'description' | 'elevation' | 'icons' | 'id' | 'item' | 'lastDraft' | 'lastPublished' | 'media' | 'mediaContainers' | 'modified' | 'preferredMedia' | 'profile' | 'published' | 'readMoreUrl' | 'synopsis' | 'tags' | 'title' | 'websiteUrl' | ItineraryKeySpecifier)[];
export type ItineraryFieldPolicy = {
	attr?: FieldPolicy<any> | FieldReadFunction<any>,
	attrValue?: FieldPolicy<any> | FieldReadFunction<any>,
	attrs?: FieldPolicy<any> | FieldReadFunction<any>,
	autoRoute?: FieldPolicy<any> | FieldReadFunction<any>,
	bounds?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultLocale?: FieldPolicy<any> | FieldReadFunction<any>,
	descendants?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	elevation?: FieldPolicy<any> | FieldReadFunction<any>,
	icons?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>,
	lastDraft?: FieldPolicy<any> | FieldReadFunction<any>,
	lastPublished?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaContainers?: FieldPolicy<any> | FieldReadFunction<any>,
	modified?: FieldPolicy<any> | FieldReadFunction<any>,
	preferredMedia?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	readMoreUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	synopsis?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	websiteUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItineraryAutoRouteKeySpecifier = ('defaultMode' | ItineraryAutoRouteKeySpecifier)[];
export type ItineraryAutoRouteFieldPolicy = {
	defaultMode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItineraryCollectionKeySpecifier = ('after' | 'ancestors' | 'attr' | 'attrValue' | 'attrs' | 'before' | 'bounds' | 'children' | 'descendants' | 'description' | 'id' | 'itinerary' | 'media' | 'mediaContainers' | 'parent' | 'preferredMedia' | 'readMoreUrl' | 'siblingPositionNumber' | 'synopsis' | 'tags' | 'title' | 'websiteUrl' | ItineraryCollectionKeySpecifier)[];
export type ItineraryCollectionFieldPolicy = {
	after?: FieldPolicy<any> | FieldReadFunction<any>,
	ancestors?: FieldPolicy<any> | FieldReadFunction<any>,
	attr?: FieldPolicy<any> | FieldReadFunction<any>,
	attrValue?: FieldPolicy<any> | FieldReadFunction<any>,
	attrs?: FieldPolicy<any> | FieldReadFunction<any>,
	before?: FieldPolicy<any> | FieldReadFunction<any>,
	bounds?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	descendants?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaContainers?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	preferredMedia?: FieldPolicy<any> | FieldReadFunction<any>,
	readMoreUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	siblingPositionNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	synopsis?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	websiteUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItineraryDirectionsKeySpecifier = ('after' | 'ancestors' | 'attr' | 'attrValue' | 'attrs' | 'before' | 'bounds' | 'children' | 'descendants' | 'description' | 'destination' | 'distance' | 'durationMax' | 'durationMin' | 'durations' | 'elevation' | 'id' | 'itinerary' | 'media' | 'mediaContainers' | 'origin' | 'parent' | 'preferredMedia' | 'readMoreUrl' | 'route' | 'siblingPositionNumber' | 'synopsis' | 'tags' | 'title' | 'websiteUrl' | ItineraryDirectionsKeySpecifier)[];
export type ItineraryDirectionsFieldPolicy = {
	after?: FieldPolicy<any> | FieldReadFunction<any>,
	ancestors?: FieldPolicy<any> | FieldReadFunction<any>,
	attr?: FieldPolicy<any> | FieldReadFunction<any>,
	attrValue?: FieldPolicy<any> | FieldReadFunction<any>,
	attrs?: FieldPolicy<any> | FieldReadFunction<any>,
	before?: FieldPolicy<any> | FieldReadFunction<any>,
	bounds?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	descendants?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	destination?: FieldPolicy<any> | FieldReadFunction<any>,
	distance?: FieldPolicy<any> | FieldReadFunction<any>,
	durationMax?: FieldPolicy<any> | FieldReadFunction<any>,
	durationMin?: FieldPolicy<any> | FieldReadFunction<any>,
	durations?: FieldPolicy<any> | FieldReadFunction<any>,
	elevation?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaContainers?: FieldPolicy<any> | FieldReadFunction<any>,
	origin?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	preferredMedia?: FieldPolicy<any> | FieldReadFunction<any>,
	readMoreUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	route?: FieldPolicy<any> | FieldReadFunction<any>,
	siblingPositionNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	synopsis?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	websiteUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItineraryDirectionsConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ItineraryDirectionsConnectionKeySpecifier)[];
export type ItineraryDirectionsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItineraryDirectionsDurationsKeySpecifier = ('duration' | 'id' | 'label' | ItineraryDirectionsDurationsKeySpecifier)[];
export type ItineraryDirectionsDurationsFieldPolicy = {
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItineraryDirectionsEdgeKeySpecifier = ('cursor' | 'direction' | 'node' | ItineraryDirectionsEdgeKeySpecifier)[];
export type ItineraryDirectionsEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	direction?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItineraryItemKeySpecifier = ('after' | 'ancestors' | 'attr' | 'attrValue' | 'attrs' | 'before' | 'bounds' | 'children' | 'descendants' | 'description' | 'id' | 'itinerary' | 'media' | 'mediaContainers' | 'parent' | 'preferredMedia' | 'readMoreUrl' | 'siblingPositionNumber' | 'synopsis' | 'tags' | 'title' | 'websiteUrl' | ItineraryItemKeySpecifier)[];
export type ItineraryItemFieldPolicy = {
	after?: FieldPolicy<any> | FieldReadFunction<any>,
	ancestors?: FieldPolicy<any> | FieldReadFunction<any>,
	attr?: FieldPolicy<any> | FieldReadFunction<any>,
	attrValue?: FieldPolicy<any> | FieldReadFunction<any>,
	attrs?: FieldPolicy<any> | FieldReadFunction<any>,
	before?: FieldPolicy<any> | FieldReadFunction<any>,
	bounds?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	descendants?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaContainers?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	preferredMedia?: FieldPolicy<any> | FieldReadFunction<any>,
	readMoreUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	siblingPositionNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	synopsis?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	websiteUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItineraryItemCascadedChangesKeySpecifier = ('created' | 'deletedIds' | 'updated' | ItineraryItemCascadedChangesKeySpecifier)[];
export type ItineraryItemCascadedChangesFieldPolicy = {
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedIds?: FieldPolicy<any> | FieldReadFunction<any>,
	updated?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItineraryItemConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ItineraryItemConnectionKeySpecifier)[];
export type ItineraryItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItineraryItemEdgeKeySpecifier = ('cursor' | 'directions' | 'edgePositionNumber' | 'node' | ItineraryItemEdgeKeySpecifier)[];
export type ItineraryItemEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	directions?: FieldPolicy<any> | FieldReadFunction<any>,
	edgePositionNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItineraryLocationKeySpecifier = ('address' | 'after' | 'ancestors' | 'attr' | 'attrValue' | 'attrs' | 'before' | 'bounds' | 'children' | 'contact' | 'descendants' | 'description' | 'directions' | 'icon' | 'id' | 'itinerary' | 'media' | 'mediaContainers' | 'optional' | 'parent' | 'place' | 'position' | 'preferredMedia' | 'readMoreUrl' | 'siblingPositionNumber' | 'synopsis' | 'tags' | 'title' | 'websiteUrl' | ItineraryLocationKeySpecifier)[];
export type ItineraryLocationFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	after?: FieldPolicy<any> | FieldReadFunction<any>,
	ancestors?: FieldPolicy<any> | FieldReadFunction<any>,
	attr?: FieldPolicy<any> | FieldReadFunction<any>,
	attrValue?: FieldPolicy<any> | FieldReadFunction<any>,
	attrs?: FieldPolicy<any> | FieldReadFunction<any>,
	before?: FieldPolicy<any> | FieldReadFunction<any>,
	bounds?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	contact?: FieldPolicy<any> | FieldReadFunction<any>,
	descendants?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	directions?: FieldPolicy<any> | FieldReadFunction<any>,
	icon?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaContainers?: FieldPolicy<any> | FieldReadFunction<any>,
	optional?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	place?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	preferredMedia?: FieldPolicy<any> | FieldReadFunction<any>,
	readMoreUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	siblingPositionNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	synopsis?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	websiteUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItinerarySearchConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ItinerarySearchConnectionKeySpecifier)[];
export type ItinerarySearchConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItinerarySearchEdgeKeySpecifier = ('cursor' | 'node' | ItinerarySearchEdgeKeySpecifier)[];
export type ItinerarySearchEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ItinerarySearchNodeKeySpecifier = ('bounds' | 'created' | 'defaultLocale' | 'description' | 'externalId' | 'externalSource' | 'genres' | 'id' | 'itinerary' | 'lastDraft' | 'lastPublished' | 'listed' | 'modified' | 'preferredMedia' | 'profile' | 'published' | 'synopsis' | 'tags' | 'title' | 'totalLocations' | 'type' | ItinerarySearchNodeKeySpecifier)[];
export type ItinerarySearchNodeFieldPolicy = {
	bounds?: FieldPolicy<any> | FieldReadFunction<any>,
	created?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultLocale?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	externalId?: FieldPolicy<any> | FieldReadFunction<any>,
	externalSource?: FieldPolicy<any> | FieldReadFunction<any>,
	genres?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>,
	lastDraft?: FieldPolicy<any> | FieldReadFunction<any>,
	lastPublished?: FieldPolicy<any> | FieldReadFunction<any>,
	listed?: FieldPolicy<any> | FieldReadFunction<any>,
	modified?: FieldPolicy<any> | FieldReadFunction<any>,
	preferredMedia?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	synopsis?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	totalLocations?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaContainerKeySpecifier = ('id' | 'resource' | MediaContainerKeySpecifier)[];
export type MediaContainerFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	resource?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaContainerConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | MediaContainerConnectionKeySpecifier)[];
export type MediaContainerConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaContainerEdgeKeySpecifier = ('cursor' | 'node' | MediaContainerEdgeKeySpecifier)[];
export type MediaContainerEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaImageKeySpecifier = ('altText' | 'attr' | 'attrValue' | 'attribution' | 'attrs' | 'caption' | 'copyright' | 'exif' | 'exifIds' | 'hasContent' | 'id' | 'originalSize' | 'profile' | 'provider' | 'source' | 'sources' | 'tags' | 'url' | MediaImageKeySpecifier)[];
export type MediaImageFieldPolicy = {
	altText?: FieldPolicy<any> | FieldReadFunction<any>,
	attr?: FieldPolicy<any> | FieldReadFunction<any>,
	attrValue?: FieldPolicy<any> | FieldReadFunction<any>,
	attribution?: FieldPolicy<any> | FieldReadFunction<any>,
	attrs?: FieldPolicy<any> | FieldReadFunction<any>,
	caption?: FieldPolicy<any> | FieldReadFunction<any>,
	copyright?: FieldPolicy<any> | FieldReadFunction<any>,
	exif?: FieldPolicy<any> | FieldReadFunction<any>,
	exifIds?: FieldPolicy<any> | FieldReadFunction<any>,
	hasContent?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	originalSize?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	sources?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaImageExifKeySpecifier = ('id' | 'value' | MediaImageExifKeySpecifier)[];
export type MediaImageExifFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaImageSourceKeySpecifier = ('height' | 'id' | 'type' | 'url' | 'width' | MediaImageSourceKeySpecifier)[];
export type MediaImageSourceFieldPolicy = {
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaResourceKeySpecifier = ('altText' | 'attr' | 'attrValue' | 'attribution' | 'attrs' | 'caption' | 'copyright' | 'hasContent' | 'id' | 'profile' | 'provider' | 'tags' | MediaResourceKeySpecifier)[];
export type MediaResourceFieldPolicy = {
	altText?: FieldPolicy<any> | FieldReadFunction<any>,
	attr?: FieldPolicy<any> | FieldReadFunction<any>,
	attrValue?: FieldPolicy<any> | FieldReadFunction<any>,
	attribution?: FieldPolicy<any> | FieldReadFunction<any>,
	attrs?: FieldPolicy<any> | FieldReadFunction<any>,
	caption?: FieldPolicy<any> | FieldReadFunction<any>,
	copyright?: FieldPolicy<any> | FieldReadFunction<any>,
	hasContent?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaResourceFailedToLoadKeySpecifier = ('id' | MediaResourceFailedToLoadKeySpecifier)[];
export type MediaResourceFailedToLoadFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoveItineraryItemPayloadKeySpecifier = ('cascaded' | 'item' | 'itinerary' | MoveItineraryItemPayloadKeySpecifier)[];
export type MoveItineraryItemPayloadFieldPolicy = {
	cascaded?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>,
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('approveProfileFollow' | 'captureMarketingInformation' | 'changeItineraryDefaultLocale' | 'claimProfileHandle' | 'createBillingCheckoutSession' | 'createBillingPortalSession' | 'createCollection' | 'createCollectionLocation' | 'createConnectedApp' | 'createIconSilhouette' | 'createItinerary' | 'createItineraryCollection' | 'createItineraryDirections' | 'createItineraryLocation' | 'createProfile' | 'createUserAgreement' | 'deleteCollection' | 'deleteCollectionItem' | 'deleteConnectedApp' | 'deleteIconResource' | 'deleteItinerary' | 'deleteItineraryItem' | 'deleteProfile' | 'denyProfileFollow' | 'duplicateItinerary' | 'finalizeMediaUpload' | 'followProfile' | 'moveItineraryItem' | 'publishItinerary' | 'revertItinerary' | 'startMediaUpload' | 'unfollowProfile' | 'updateBillingDetails' | 'updateCollection' | 'updateCollectionLocation' | 'updateConnectedApp' | 'updateIconSilhouette' | 'updateItinerary' | 'updateItineraryCollection' | 'updateItineraryDirections' | 'updateItineraryLocation' | 'updateMediaResource' | 'updateProfile' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	approveProfileFollow?: FieldPolicy<any> | FieldReadFunction<any>,
	captureMarketingInformation?: FieldPolicy<any> | FieldReadFunction<any>,
	changeItineraryDefaultLocale?: FieldPolicy<any> | FieldReadFunction<any>,
	claimProfileHandle?: FieldPolicy<any> | FieldReadFunction<any>,
	createBillingCheckoutSession?: FieldPolicy<any> | FieldReadFunction<any>,
	createBillingPortalSession?: FieldPolicy<any> | FieldReadFunction<any>,
	createCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	createCollectionLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	createConnectedApp?: FieldPolicy<any> | FieldReadFunction<any>,
	createIconSilhouette?: FieldPolicy<any> | FieldReadFunction<any>,
	createItinerary?: FieldPolicy<any> | FieldReadFunction<any>,
	createItineraryCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	createItineraryDirections?: FieldPolicy<any> | FieldReadFunction<any>,
	createItineraryLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	createProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	createUserAgreement?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCollectionItem?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteConnectedApp?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteIconResource?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteItinerary?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteItineraryItem?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	denyProfileFollow?: FieldPolicy<any> | FieldReadFunction<any>,
	duplicateItinerary?: FieldPolicy<any> | FieldReadFunction<any>,
	finalizeMediaUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	followProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	moveItineraryItem?: FieldPolicy<any> | FieldReadFunction<any>,
	publishItinerary?: FieldPolicy<any> | FieldReadFunction<any>,
	revertItinerary?: FieldPolicy<any> | FieldReadFunction<any>,
	startMediaUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	unfollowProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBillingDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCollectionLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	updateConnectedApp?: FieldPolicy<any> | FieldReadFunction<any>,
	updateIconSilhouette?: FieldPolicy<any> | FieldReadFunction<any>,
	updateItinerary?: FieldPolicy<any> | FieldReadFunction<any>,
	updateItineraryCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateItineraryDirections?: FieldPolicy<any> | FieldReadFunction<any>,
	updateItineraryLocation?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMediaResource?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceKeySpecifier = ('address' | 'attr' | 'attrValue' | 'attribution' | 'attrs' | 'bounds' | 'contact' | 'contributor' | 'description' | 'hours' | 'id' | 'layers' | 'maki' | 'media' | 'mediaContainers' | 'name' | 'navigationUrl' | 'position' | 'preferredMedia' | 'readMoreUrl' | 'resolutionError' | 'synopsis' | 'tags' | 'title' | 'towards' | 'websiteUrl' | PlaceKeySpecifier)[];
export type PlaceFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	attr?: FieldPolicy<any> | FieldReadFunction<any>,
	attrValue?: FieldPolicy<any> | FieldReadFunction<any>,
	attribution?: FieldPolicy<any> | FieldReadFunction<any>,
	attrs?: FieldPolicy<any> | FieldReadFunction<any>,
	bounds?: FieldPolicy<any> | FieldReadFunction<any>,
	contact?: FieldPolicy<any> | FieldReadFunction<any>,
	contributor?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	hours?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	layers?: FieldPolicy<any> | FieldReadFunction<any>,
	maki?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaContainers?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	navigationUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	preferredMedia?: FieldPolicy<any> | FieldReadFunction<any>,
	readMoreUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	resolutionError?: FieldPolicy<any> | FieldReadFunction<any>,
	synopsis?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	towards?: FieldPolicy<any> | FieldReadFunction<any>,
	websiteUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceAddressKeySpecifier = ('addressLineOne' | 'addressLineThree' | 'addressLineTwo' | 'administrativeGroup' | 'area' | 'country' | 'countryCode' | 'crossStreet' | 'locality' | 'postalCode' | 'region' | 'regionCode' | PlaceAddressKeySpecifier)[];
export type PlaceAddressFieldPolicy = {
	addressLineOne?: FieldPolicy<any> | FieldReadFunction<any>,
	addressLineThree?: FieldPolicy<any> | FieldReadFunction<any>,
	addressLineTwo?: FieldPolicy<any> | FieldReadFunction<any>,
	administrativeGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	area?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	countryCode?: FieldPolicy<any> | FieldReadFunction<any>,
	crossStreet?: FieldPolicy<any> | FieldReadFunction<any>,
	locality?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCode?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	regionCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceAttributionKeySpecifier = ('license' | 'link' | 'mediaResource' | 'pixel' | 'text' | PlaceAttributionKeySpecifier)[];
export type PlaceAttributionFieldPolicy = {
	license?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaResource?: FieldPolicy<any> | FieldReadFunction<any>,
	pixel?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceContactKeySpecifier = ('bookingUrl' | 'emailAddress' | 'facebookUrl' | 'instagramUrl' | 'phoneNumber' | 'twitterUrl' | 'websiteUrl' | PlaceContactKeySpecifier)[];
export type PlaceContactFieldPolicy = {
	bookingUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	emailAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	facebookUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	instagramUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	twitterUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	websiteUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceHoursKeySpecifier = ('comment' | 'forDays' | 'intervals' | 'osmTag' | 'status' | 'weekStable' | PlaceHoursKeySpecifier)[];
export type PlaceHoursFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	forDays?: FieldPolicy<any> | FieldReadFunction<any>,
	intervals?: FieldPolicy<any> | FieldReadFunction<any>,
	osmTag?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	weekStable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceHoursForDayKeySpecifier = ('date' | 'intervals' | 'publicHolidays' | PlaceHoursForDayKeySpecifier)[];
export type PlaceHoursForDayFieldPolicy = {
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	intervals?: FieldPolicy<any> | FieldReadFunction<any>,
	publicHolidays?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceHoursIntervalKeySpecifier = ('comment' | 'from' | 'publicHolidays' | 'status' | 'to' | PlaceHoursIntervalKeySpecifier)[];
export type PlaceHoursIntervalFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	publicHolidays?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceHoursIntervalConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | PlaceHoursIntervalConnectionKeySpecifier)[];
export type PlaceHoursIntervalConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceHoursIntervalEdgeKeySpecifier = ('cursor' | 'node' | PlaceHoursIntervalEdgeKeySpecifier)[];
export type PlaceHoursIntervalEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceHoursIntervalHolidayKeySpecifier = ('date' | 'name' | PlaceHoursIntervalHolidayKeySpecifier)[];
export type PlaceHoursIntervalHolidayFieldPolicy = {
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceLayerKeySpecifier = ('id' | 'name' | PlaceLayerKeySpecifier)[];
export type PlaceLayerFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceSearchConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | PlaceSearchConnectionKeySpecifier)[];
export type PlaceSearchConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceSearchEdgeKeySpecifier = ('cursor' | 'main' | 'node' | 'secondary' | 'single' | PlaceSearchEdgeKeySpecifier)[];
export type PlaceSearchEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	main?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	secondary?: FieldPolicy<any> | FieldReadFunction<any>,
	single?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceSearchNodeKeySpecifier = ('address' | 'contributor' | 'description' | 'id' | 'layers' | 'maki' | 'name' | 'position' | 'synopsis' | 'title' | PlaceSearchNodeKeySpecifier)[];
export type PlaceSearchNodeFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	contributor?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	layers?: FieldPolicy<any> | FieldReadFunction<any>,
	maki?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	synopsis?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceTowardsKeySpecifier = ('bearing' | 'compass' | 'distance' | 'position' | PlaceTowardsKeySpecifier)[];
export type PlaceTowardsFieldPolicy = {
	bearing?: FieldPolicy<any> | FieldReadFunction<any>,
	compass?: FieldPolicy<any> | FieldReadFunction<any>,
	distance?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionKeySpecifier = ('attr' | 'attrValue' | 'attrs' | 'id' | 'lat' | 'latLon' | 'layers' | 'lon' | 'lonLat' | PositionKeySpecifier)[];
export type PositionFieldPolicy = {
	attr?: FieldPolicy<any> | FieldReadFunction<any>,
	attrValue?: FieldPolicy<any> | FieldReadFunction<any>,
	attrs?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lat?: FieldPolicy<any> | FieldReadFunction<any>,
	latLon?: FieldPolicy<any> | FieldReadFunction<any>,
	layers?: FieldPolicy<any> | FieldReadFunction<any>,
	lon?: FieldPolicy<any> | FieldReadFunction<any>,
	lonLat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileKeySpecifier = ('attr' | 'attrValue' | 'attrs' | 'autoApproveFollows' | 'avatar' | 'billingDetails' | 'billingSubscriptions' | 'bio' | 'connectedApps' | 'followers' | 'following' | 'handle' | 'id' | 'name' | 'type' | 'websiteUrl' | ProfileKeySpecifier)[];
export type ProfileFieldPolicy = {
	attr?: FieldPolicy<any> | FieldReadFunction<any>,
	attrValue?: FieldPolicy<any> | FieldReadFunction<any>,
	attrs?: FieldPolicy<any> | FieldReadFunction<any>,
	autoApproveFollows?: FieldPolicy<any> | FieldReadFunction<any>,
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	billingDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	billingSubscriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	connectedApps?: FieldPolicy<any> | FieldReadFunction<any>,
	followers?: FieldPolicy<any> | FieldReadFunction<any>,
	following?: FieldPolicy<any> | FieldReadFunction<any>,
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	websiteUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ProfileConnectionKeySpecifier)[];
export type ProfileConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileEdgeKeySpecifier = ('cursor' | 'node' | ProfileEdgeKeySpecifier)[];
export type ProfileEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileFollowConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ProfileFollowConnectionKeySpecifier)[];
export type ProfileFollowConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileFollowEdgeKeySpecifier = ('cursor' | 'node' | 'status' | ProfileFollowEdgeKeySpecifier)[];
export type ProfileFollowEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublishItineraryPayloadKeySpecifier = ('itinerary' | PublishItineraryPayloadKeySpecifier)[];
export type PublishItineraryPayloadFieldPolicy = {
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('authorizedProfiles' | 'billingDetails' | 'billingPrices' | 'billingSubscriptions' | 'collection' | 'collectionItem' | 'collectionItems' | 'collections' | 'connectedApp' | 'connectedApps' | 'iconResource' | 'iconResources' | 'isochrone' | 'itineraries' | 'itinerary' | 'mediaContainer' | 'mediaResource' | 'node' | 'place' | 'placeAddressSearch' | 'placeAutocompleteSearch' | 'placeReverseSearch' | 'placeSearch' | 'places' | 'profile' | 'profileByHandle' | 'profiles' | 'routes' | 'userAgreements' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	authorizedProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	billingDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	billingPrices?: FieldPolicy<any> | FieldReadFunction<any>,
	billingSubscriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionItem?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionItems?: FieldPolicy<any> | FieldReadFunction<any>,
	collections?: FieldPolicy<any> | FieldReadFunction<any>,
	connectedApp?: FieldPolicy<any> | FieldReadFunction<any>,
	connectedApps?: FieldPolicy<any> | FieldReadFunction<any>,
	iconResource?: FieldPolicy<any> | FieldReadFunction<any>,
	iconResources?: FieldPolicy<any> | FieldReadFunction<any>,
	isochrone?: FieldPolicy<any> | FieldReadFunction<any>,
	itineraries?: FieldPolicy<any> | FieldReadFunction<any>,
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaContainer?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaResource?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	place?: FieldPolicy<any> | FieldReadFunction<any>,
	placeAddressSearch?: FieldPolicy<any> | FieldReadFunction<any>,
	placeAutocompleteSearch?: FieldPolicy<any> | FieldReadFunction<any>,
	placeReverseSearch?: FieldPolicy<any> | FieldReadFunction<any>,
	placeSearch?: FieldPolicy<any> | FieldReadFunction<any>,
	places?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	profileByHandle?: FieldPolicy<any> | FieldReadFunction<any>,
	profiles?: FieldPolicy<any> | FieldReadFunction<any>,
	routes?: FieldPolicy<any> | FieldReadFunction<any>,
	userAgreements?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResolutionErrorKeySpecifier = ('message' | ResolutionErrorKeySpecifier)[];
export type ResolutionErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevertItineraryPayloadKeySpecifier = ('itinerary' | RevertItineraryPayloadKeySpecifier)[];
export type RevertItineraryPayloadFieldPolicy = {
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouteKeySpecifier = ('modes' | 'segments' | RouteKeySpecifier)[];
export type RouteFieldPolicy = {
	modes?: FieldPolicy<any> | FieldReadFunction<any>,
	segments?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouteConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RouteConnectionKeySpecifier)[];
export type RouteConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouteEdgeKeySpecifier = ('cursor' | 'node' | RouteEdgeKeySpecifier)[];
export type RouteEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouteSegmentKeySpecifier = ('distance' | 'duration' | 'elevation' | 'geoJson' | 'id' | 'mode' | 'polyline' | 'positions' | 'useRouteSearching' | RouteSegmentKeySpecifier)[];
export type RouteSegmentFieldPolicy = {
	distance?: FieldPolicy<any> | FieldReadFunction<any>,
	duration?: FieldPolicy<any> | FieldReadFunction<any>,
	elevation?: FieldPolicy<any> | FieldReadFunction<any>,
	geoJson?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mode?: FieldPolicy<any> | FieldReadFunction<any>,
	polyline?: FieldPolicy<any> | FieldReadFunction<any>,
	positions?: FieldPolicy<any> | FieldReadFunction<any>,
	useRouteSearching?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StartMediaUploadPayloadKeySpecifier = ('fields' | 'token' | 'url' | StartMediaUploadPayloadKeySpecifier)[];
export type StartMediaUploadPayloadFieldPolicy = {
	fields?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TextSearchResultKeySpecifier = ('label' | 'matches' | TextSearchResultKeySpecifier)[];
export type TextSearchResultFieldPolicy = {
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	matches?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TextSearchResultMatchKeySpecifier = ('length' | 'offset' | TextSearchResultMatchKeySpecifier)[];
export type TextSearchResultMatchFieldPolicy = {
	length?: FieldPolicy<any> | FieldReadFunction<any>,
	offset?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnfollowProfilePayloadKeySpecifier = ('fromProfile' | 'status' | 'toProfile' | UnfollowProfilePayloadKeySpecifier)[];
export type UnfollowProfilePayloadFieldPolicy = {
	fromProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	toProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateBillingDetailsOutputKeySpecifier = ('billingDetails' | UpdateBillingDetailsOutputKeySpecifier)[];
export type UpdateBillingDetailsOutputFieldPolicy = {
	billingDetails?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateCollectionLocationPayloadKeySpecifier = ('location' | UpdateCollectionLocationPayloadKeySpecifier)[];
export type UpdateCollectionLocationPayloadFieldPolicy = {
	location?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateCollectionPayloadKeySpecifier = ('collection' | UpdateCollectionPayloadKeySpecifier)[];
export type UpdateCollectionPayloadFieldPolicy = {
	collection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateConnectedAppPayloadKeySpecifier = ('connectedApp' | UpdateConnectedAppPayloadKeySpecifier)[];
export type UpdateConnectedAppPayloadFieldPolicy = {
	connectedApp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateIconSilhouettePayloadKeySpecifier = ('icon' | UpdateIconSilhouettePayloadKeySpecifier)[];
export type UpdateIconSilhouettePayloadFieldPolicy = {
	icon?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateItineraryCollectionPayloadKeySpecifier = ('cascaded' | 'collection' | 'itinerary' | UpdateItineraryCollectionPayloadKeySpecifier)[];
export type UpdateItineraryCollectionPayloadFieldPolicy = {
	cascaded?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateItineraryDirectionsPayloadKeySpecifier = ('cascaded' | 'directions' | 'itinerary' | UpdateItineraryDirectionsPayloadKeySpecifier)[];
export type UpdateItineraryDirectionsPayloadFieldPolicy = {
	cascaded?: FieldPolicy<any> | FieldReadFunction<any>,
	directions?: FieldPolicy<any> | FieldReadFunction<any>,
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateItineraryLocationPayloadKeySpecifier = ('cascaded' | 'itinerary' | 'location' | UpdateItineraryLocationPayloadKeySpecifier)[];
export type UpdateItineraryLocationPayloadFieldPolicy = {
	cascaded?: FieldPolicy<any> | FieldReadFunction<any>,
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateItineraryPayloadKeySpecifier = ('cascaded' | 'itinerary' | UpdateItineraryPayloadKeySpecifier)[];
export type UpdateItineraryPayloadFieldPolicy = {
	cascaded?: FieldPolicy<any> | FieldReadFunction<any>,
	itinerary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateMediaResourcePayloadKeySpecifier = ('resource' | UpdateMediaResourcePayloadKeySpecifier)[];
export type UpdateMediaResourcePayloadFieldPolicy = {
	resource?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateProfilePayloadKeySpecifier = ('profile' | UpdateProfilePayloadKeySpecifier)[];
export type UpdateProfilePayloadFieldPolicy = {
	profile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAgreementKeySpecifier = ('date' | 'id' | 'profile' | 'type' | UserAgreementKeySpecifier)[];
export type UserAgreementFieldPolicy = {
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAgreementConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | UserAgreementConnectionKeySpecifier)[];
export type UserAgreementConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAgreementEdgeKeySpecifier = ('cursor' | 'node' | UserAgreementEdgeKeySpecifier)[];
export type UserAgreementEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	ApproveProfileFollowPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApproveProfileFollowPayloadKeySpecifier | (() => undefined | ApproveProfileFollowPayloadKeySpecifier),
		fields?: ApproveProfileFollowPayloadFieldPolicy,
	},
	Attribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeKeySpecifier | (() => undefined | AttributeKeySpecifier),
		fields?: AttributeFieldPolicy,
	},
	AttributeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeConnectionKeySpecifier | (() => undefined | AttributeConnectionKeySpecifier),
		fields?: AttributeConnectionFieldPolicy,
	},
	AttributeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeEdgeKeySpecifier | (() => undefined | AttributeEdgeKeySpecifier),
		fields?: AttributeEdgeFieldPolicy,
	},
	BillingAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BillingAddressKeySpecifier | (() => undefined | BillingAddressKeySpecifier),
		fields?: BillingAddressFieldPolicy,
	},
	BillingDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BillingDetailsKeySpecifier | (() => undefined | BillingDetailsKeySpecifier),
		fields?: BillingDetailsFieldPolicy,
	},
	BillingPlan?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BillingPlanKeySpecifier | (() => undefined | BillingPlanKeySpecifier),
		fields?: BillingPlanFieldPolicy,
	},
	BillingPrice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BillingPriceKeySpecifier | (() => undefined | BillingPriceKeySpecifier),
		fields?: BillingPriceFieldPolicy,
	},
	BillingPriceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BillingPriceConnectionKeySpecifier | (() => undefined | BillingPriceConnectionKeySpecifier),
		fields?: BillingPriceConnectionFieldPolicy,
	},
	BillingPriceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BillingPriceEdgeKeySpecifier | (() => undefined | BillingPriceEdgeKeySpecifier),
		fields?: BillingPriceEdgeFieldPolicy,
	},
	BillingPriceRecurring?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BillingPriceRecurringKeySpecifier | (() => undefined | BillingPriceRecurringKeySpecifier),
		fields?: BillingPriceRecurringFieldPolicy,
	},
	BillingProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BillingProductKeySpecifier | (() => undefined | BillingProductKeySpecifier),
		fields?: BillingProductFieldPolicy,
	},
	BillingSubscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BillingSubscriptionKeySpecifier | (() => undefined | BillingSubscriptionKeySpecifier),
		fields?: BillingSubscriptionFieldPolicy,
	},
	BillingSubscriptionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BillingSubscriptionConnectionKeySpecifier | (() => undefined | BillingSubscriptionConnectionKeySpecifier),
		fields?: BillingSubscriptionConnectionFieldPolicy,
	},
	BillingSubscriptionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BillingSubscriptionEdgeKeySpecifier | (() => undefined | BillingSubscriptionEdgeKeySpecifier),
		fields?: BillingSubscriptionEdgeFieldPolicy,
	},
	Bounds?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BoundsKeySpecifier | (() => undefined | BoundsKeySpecifier),
		fields?: BoundsFieldPolicy,
	},
	CaptureMarketingInformationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CaptureMarketingInformationPayloadKeySpecifier | (() => undefined | CaptureMarketingInformationPayloadKeySpecifier),
		fields?: CaptureMarketingInformationPayloadFieldPolicy,
	},
	ChangeItineraryDefaultLocalePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChangeItineraryDefaultLocalePayloadKeySpecifier | (() => undefined | ChangeItineraryDefaultLocalePayloadKeySpecifier),
		fields?: ChangeItineraryDefaultLocalePayloadFieldPolicy,
	},
	ClaimProfileHandlePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClaimProfileHandlePayloadKeySpecifier | (() => undefined | ClaimProfileHandlePayloadKeySpecifier),
		fields?: ClaimProfileHandlePayloadFieldPolicy,
	},
	Collection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionKeySpecifier | (() => undefined | CollectionKeySpecifier),
		fields?: CollectionFieldPolicy,
	},
	CollectionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionConnectionKeySpecifier | (() => undefined | CollectionConnectionKeySpecifier),
		fields?: CollectionConnectionFieldPolicy,
	},
	CollectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionEdgeKeySpecifier | (() => undefined | CollectionEdgeKeySpecifier),
		fields?: CollectionEdgeFieldPolicy,
	},
	CollectionItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionItemKeySpecifier | (() => undefined | CollectionItemKeySpecifier),
		fields?: CollectionItemFieldPolicy,
	},
	CollectionItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionItemConnectionKeySpecifier | (() => undefined | CollectionItemConnectionKeySpecifier),
		fields?: CollectionItemConnectionFieldPolicy,
	},
	CollectionItemEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionItemEdgeKeySpecifier | (() => undefined | CollectionItemEdgeKeySpecifier),
		fields?: CollectionItemEdgeFieldPolicy,
	},
	CollectionItemFailedToLoad?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionItemFailedToLoadKeySpecifier | (() => undefined | CollectionItemFailedToLoadKeySpecifier),
		fields?: CollectionItemFailedToLoadFieldPolicy,
	},
	CollectionLocation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionLocationKeySpecifier | (() => undefined | CollectionLocationKeySpecifier),
		fields?: CollectionLocationFieldPolicy,
	},
	ConnectedApp?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConnectedAppKeySpecifier | (() => undefined | ConnectedAppKeySpecifier),
		fields?: ConnectedAppFieldPolicy,
	},
	ConnectedAppConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConnectedAppConnectionKeySpecifier | (() => undefined | ConnectedAppConnectionKeySpecifier),
		fields?: ConnectedAppConnectionFieldPolicy,
	},
	ConnectedAppEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConnectedAppEdgeKeySpecifier | (() => undefined | ConnectedAppEdgeKeySpecifier),
		fields?: ConnectedAppEdgeFieldPolicy,
	},
	CreateBillingCheckoutSessionOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateBillingCheckoutSessionOutputKeySpecifier | (() => undefined | CreateBillingCheckoutSessionOutputKeySpecifier),
		fields?: CreateBillingCheckoutSessionOutputFieldPolicy,
	},
	CreateBillingPortalSessionOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateBillingPortalSessionOutputKeySpecifier | (() => undefined | CreateBillingPortalSessionOutputKeySpecifier),
		fields?: CreateBillingPortalSessionOutputFieldPolicy,
	},
	CreateCollectionLocationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCollectionLocationPayloadKeySpecifier | (() => undefined | CreateCollectionLocationPayloadKeySpecifier),
		fields?: CreateCollectionLocationPayloadFieldPolicy,
	},
	CreateCollectionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCollectionPayloadKeySpecifier | (() => undefined | CreateCollectionPayloadKeySpecifier),
		fields?: CreateCollectionPayloadFieldPolicy,
	},
	CreateConnectedAppPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateConnectedAppPayloadKeySpecifier | (() => undefined | CreateConnectedAppPayloadKeySpecifier),
		fields?: CreateConnectedAppPayloadFieldPolicy,
	},
	CreateIconSilhouettePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateIconSilhouettePayloadKeySpecifier | (() => undefined | CreateIconSilhouettePayloadKeySpecifier),
		fields?: CreateIconSilhouettePayloadFieldPolicy,
	},
	CreateItineraryCollectionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateItineraryCollectionPayloadKeySpecifier | (() => undefined | CreateItineraryCollectionPayloadKeySpecifier),
		fields?: CreateItineraryCollectionPayloadFieldPolicy,
	},
	CreateItineraryDirectionsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateItineraryDirectionsPayloadKeySpecifier | (() => undefined | CreateItineraryDirectionsPayloadKeySpecifier),
		fields?: CreateItineraryDirectionsPayloadFieldPolicy,
	},
	CreateItineraryLocationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateItineraryLocationPayloadKeySpecifier | (() => undefined | CreateItineraryLocationPayloadKeySpecifier),
		fields?: CreateItineraryLocationPayloadFieldPolicy,
	},
	CreateItineraryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateItineraryPayloadKeySpecifier | (() => undefined | CreateItineraryPayloadKeySpecifier),
		fields?: CreateItineraryPayloadFieldPolicy,
	},
	CreateProfilePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateProfilePayloadKeySpecifier | (() => undefined | CreateProfilePayloadKeySpecifier),
		fields?: CreateProfilePayloadFieldPolicy,
	},
	CreateUserAgreementPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateUserAgreementPayloadKeySpecifier | (() => undefined | CreateUserAgreementPayloadKeySpecifier),
		fields?: CreateUserAgreementPayloadFieldPolicy,
	},
	DeleteCollectionItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteCollectionItemPayloadKeySpecifier | (() => undefined | DeleteCollectionItemPayloadKeySpecifier),
		fields?: DeleteCollectionItemPayloadFieldPolicy,
	},
	DeleteCollectionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteCollectionPayloadKeySpecifier | (() => undefined | DeleteCollectionPayloadKeySpecifier),
		fields?: DeleteCollectionPayloadFieldPolicy,
	},
	DeleteConnectedAppPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteConnectedAppPayloadKeySpecifier | (() => undefined | DeleteConnectedAppPayloadKeySpecifier),
		fields?: DeleteConnectedAppPayloadFieldPolicy,
	},
	DeleteIconResourcePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteIconResourcePayloadKeySpecifier | (() => undefined | DeleteIconResourcePayloadKeySpecifier),
		fields?: DeleteIconResourcePayloadFieldPolicy,
	},
	DeleteItineraryItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteItineraryItemPayloadKeySpecifier | (() => undefined | DeleteItineraryItemPayloadKeySpecifier),
		fields?: DeleteItineraryItemPayloadFieldPolicy,
	},
	DeleteItineraryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteItineraryPayloadKeySpecifier | (() => undefined | DeleteItineraryPayloadKeySpecifier),
		fields?: DeleteItineraryPayloadFieldPolicy,
	},
	DeleteProfilePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteProfilePayloadKeySpecifier | (() => undefined | DeleteProfilePayloadKeySpecifier),
		fields?: DeleteProfilePayloadFieldPolicy,
	},
	DenyProfileFollowPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DenyProfileFollowPayloadKeySpecifier | (() => undefined | DenyProfileFollowPayloadKeySpecifier),
		fields?: DenyProfileFollowPayloadFieldPolicy,
	},
	DuplicateItineraryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DuplicateItineraryPayloadKeySpecifier | (() => undefined | DuplicateItineraryPayloadKeySpecifier),
		fields?: DuplicateItineraryPayloadFieldPolicy,
	},
	Elevation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ElevationKeySpecifier | (() => undefined | ElevationKeySpecifier),
		fields?: ElevationFieldPolicy,
	},
	FinalizeMediaUploadPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FinalizeMediaUploadPayloadKeySpecifier | (() => undefined | FinalizeMediaUploadPayloadKeySpecifier),
		fields?: FinalizeMediaUploadPayloadFieldPolicy,
	},
	FollowProfilePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FollowProfilePayloadKeySpecifier | (() => undefined | FollowProfilePayloadKeySpecifier),
		fields?: FollowProfilePayloadFieldPolicy,
	},
	IconComposition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IconCompositionKeySpecifier | (() => undefined | IconCompositionKeySpecifier),
		fields?: IconCompositionFieldPolicy,
	},
	IconCompositionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IconCompositionConnectionKeySpecifier | (() => undefined | IconCompositionConnectionKeySpecifier),
		fields?: IconCompositionConnectionFieldPolicy,
	},
	IconCompositionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IconCompositionEdgeKeySpecifier | (() => undefined | IconCompositionEdgeKeySpecifier),
		fields?: IconCompositionEdgeFieldPolicy,
	},
	IconResource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IconResourceKeySpecifier | (() => undefined | IconResourceKeySpecifier),
		fields?: IconResourceFieldPolicy,
	},
	IconResourceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IconResourceConnectionKeySpecifier | (() => undefined | IconResourceConnectionKeySpecifier),
		fields?: IconResourceConnectionFieldPolicy,
	},
	IconResourceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IconResourceEdgeKeySpecifier | (() => undefined | IconResourceEdgeKeySpecifier),
		fields?: IconResourceEdgeFieldPolicy,
	},
	IconResourceFailedToLoad?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IconResourceFailedToLoadKeySpecifier | (() => undefined | IconResourceFailedToLoadKeySpecifier),
		fields?: IconResourceFailedToLoadFieldPolicy,
	},
	IconSilhouette?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IconSilhouetteKeySpecifier | (() => undefined | IconSilhouetteKeySpecifier),
		fields?: IconSilhouetteFieldPolicy,
	},
	Isochrone?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IsochroneKeySpecifier | (() => undefined | IsochroneKeySpecifier),
		fields?: IsochroneFieldPolicy,
	},
	Itinerary?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItineraryKeySpecifier | (() => undefined | ItineraryKeySpecifier),
		fields?: ItineraryFieldPolicy,
	},
	ItineraryAutoRoute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItineraryAutoRouteKeySpecifier | (() => undefined | ItineraryAutoRouteKeySpecifier),
		fields?: ItineraryAutoRouteFieldPolicy,
	},
	ItineraryCollection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItineraryCollectionKeySpecifier | (() => undefined | ItineraryCollectionKeySpecifier),
		fields?: ItineraryCollectionFieldPolicy,
	},
	ItineraryDirections?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItineraryDirectionsKeySpecifier | (() => undefined | ItineraryDirectionsKeySpecifier),
		fields?: ItineraryDirectionsFieldPolicy,
	},
	ItineraryDirectionsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItineraryDirectionsConnectionKeySpecifier | (() => undefined | ItineraryDirectionsConnectionKeySpecifier),
		fields?: ItineraryDirectionsConnectionFieldPolicy,
	},
	ItineraryDirectionsDurations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItineraryDirectionsDurationsKeySpecifier | (() => undefined | ItineraryDirectionsDurationsKeySpecifier),
		fields?: ItineraryDirectionsDurationsFieldPolicy,
	},
	ItineraryDirectionsEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItineraryDirectionsEdgeKeySpecifier | (() => undefined | ItineraryDirectionsEdgeKeySpecifier),
		fields?: ItineraryDirectionsEdgeFieldPolicy,
	},
	ItineraryItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItineraryItemKeySpecifier | (() => undefined | ItineraryItemKeySpecifier),
		fields?: ItineraryItemFieldPolicy,
	},
	ItineraryItemCascadedChanges?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItineraryItemCascadedChangesKeySpecifier | (() => undefined | ItineraryItemCascadedChangesKeySpecifier),
		fields?: ItineraryItemCascadedChangesFieldPolicy,
	},
	ItineraryItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItineraryItemConnectionKeySpecifier | (() => undefined | ItineraryItemConnectionKeySpecifier),
		fields?: ItineraryItemConnectionFieldPolicy,
	},
	ItineraryItemEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItineraryItemEdgeKeySpecifier | (() => undefined | ItineraryItemEdgeKeySpecifier),
		fields?: ItineraryItemEdgeFieldPolicy,
	},
	ItineraryLocation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItineraryLocationKeySpecifier | (() => undefined | ItineraryLocationKeySpecifier),
		fields?: ItineraryLocationFieldPolicy,
	},
	ItinerarySearchConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItinerarySearchConnectionKeySpecifier | (() => undefined | ItinerarySearchConnectionKeySpecifier),
		fields?: ItinerarySearchConnectionFieldPolicy,
	},
	ItinerarySearchEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItinerarySearchEdgeKeySpecifier | (() => undefined | ItinerarySearchEdgeKeySpecifier),
		fields?: ItinerarySearchEdgeFieldPolicy,
	},
	ItinerarySearchNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ItinerarySearchNodeKeySpecifier | (() => undefined | ItinerarySearchNodeKeySpecifier),
		fields?: ItinerarySearchNodeFieldPolicy,
	},
	MediaContainer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaContainerKeySpecifier | (() => undefined | MediaContainerKeySpecifier),
		fields?: MediaContainerFieldPolicy,
	},
	MediaContainerConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaContainerConnectionKeySpecifier | (() => undefined | MediaContainerConnectionKeySpecifier),
		fields?: MediaContainerConnectionFieldPolicy,
	},
	MediaContainerEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaContainerEdgeKeySpecifier | (() => undefined | MediaContainerEdgeKeySpecifier),
		fields?: MediaContainerEdgeFieldPolicy,
	},
	MediaImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaImageKeySpecifier | (() => undefined | MediaImageKeySpecifier),
		fields?: MediaImageFieldPolicy,
	},
	MediaImageExif?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaImageExifKeySpecifier | (() => undefined | MediaImageExifKeySpecifier),
		fields?: MediaImageExifFieldPolicy,
	},
	MediaImageSource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaImageSourceKeySpecifier | (() => undefined | MediaImageSourceKeySpecifier),
		fields?: MediaImageSourceFieldPolicy,
	},
	MediaResource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaResourceKeySpecifier | (() => undefined | MediaResourceKeySpecifier),
		fields?: MediaResourceFieldPolicy,
	},
	MediaResourceFailedToLoad?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaResourceFailedToLoadKeySpecifier | (() => undefined | MediaResourceFailedToLoadKeySpecifier),
		fields?: MediaResourceFailedToLoadFieldPolicy,
	},
	MoveItineraryItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoveItineraryItemPayloadKeySpecifier | (() => undefined | MoveItineraryItemPayloadKeySpecifier),
		fields?: MoveItineraryItemPayloadFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Place?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceKeySpecifier | (() => undefined | PlaceKeySpecifier),
		fields?: PlaceFieldPolicy,
	},
	PlaceAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceAddressKeySpecifier | (() => undefined | PlaceAddressKeySpecifier),
		fields?: PlaceAddressFieldPolicy,
	},
	PlaceAttribution?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceAttributionKeySpecifier | (() => undefined | PlaceAttributionKeySpecifier),
		fields?: PlaceAttributionFieldPolicy,
	},
	PlaceContact?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceContactKeySpecifier | (() => undefined | PlaceContactKeySpecifier),
		fields?: PlaceContactFieldPolicy,
	},
	PlaceHours?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceHoursKeySpecifier | (() => undefined | PlaceHoursKeySpecifier),
		fields?: PlaceHoursFieldPolicy,
	},
	PlaceHoursForDay?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceHoursForDayKeySpecifier | (() => undefined | PlaceHoursForDayKeySpecifier),
		fields?: PlaceHoursForDayFieldPolicy,
	},
	PlaceHoursInterval?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceHoursIntervalKeySpecifier | (() => undefined | PlaceHoursIntervalKeySpecifier),
		fields?: PlaceHoursIntervalFieldPolicy,
	},
	PlaceHoursIntervalConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceHoursIntervalConnectionKeySpecifier | (() => undefined | PlaceHoursIntervalConnectionKeySpecifier),
		fields?: PlaceHoursIntervalConnectionFieldPolicy,
	},
	PlaceHoursIntervalEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceHoursIntervalEdgeKeySpecifier | (() => undefined | PlaceHoursIntervalEdgeKeySpecifier),
		fields?: PlaceHoursIntervalEdgeFieldPolicy,
	},
	PlaceHoursIntervalHoliday?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceHoursIntervalHolidayKeySpecifier | (() => undefined | PlaceHoursIntervalHolidayKeySpecifier),
		fields?: PlaceHoursIntervalHolidayFieldPolicy,
	},
	PlaceLayer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceLayerKeySpecifier | (() => undefined | PlaceLayerKeySpecifier),
		fields?: PlaceLayerFieldPolicy,
	},
	PlaceSearchConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceSearchConnectionKeySpecifier | (() => undefined | PlaceSearchConnectionKeySpecifier),
		fields?: PlaceSearchConnectionFieldPolicy,
	},
	PlaceSearchEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceSearchEdgeKeySpecifier | (() => undefined | PlaceSearchEdgeKeySpecifier),
		fields?: PlaceSearchEdgeFieldPolicy,
	},
	PlaceSearchNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceSearchNodeKeySpecifier | (() => undefined | PlaceSearchNodeKeySpecifier),
		fields?: PlaceSearchNodeFieldPolicy,
	},
	PlaceTowards?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceTowardsKeySpecifier | (() => undefined | PlaceTowardsKeySpecifier),
		fields?: PlaceTowardsFieldPolicy,
	},
	Position?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionKeySpecifier | (() => undefined | PositionKeySpecifier),
		fields?: PositionFieldPolicy,
	},
	Profile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileKeySpecifier | (() => undefined | ProfileKeySpecifier),
		fields?: ProfileFieldPolicy,
	},
	ProfileConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileConnectionKeySpecifier | (() => undefined | ProfileConnectionKeySpecifier),
		fields?: ProfileConnectionFieldPolicy,
	},
	ProfileEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileEdgeKeySpecifier | (() => undefined | ProfileEdgeKeySpecifier),
		fields?: ProfileEdgeFieldPolicy,
	},
	ProfileFollowConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileFollowConnectionKeySpecifier | (() => undefined | ProfileFollowConnectionKeySpecifier),
		fields?: ProfileFollowConnectionFieldPolicy,
	},
	ProfileFollowEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileFollowEdgeKeySpecifier | (() => undefined | ProfileFollowEdgeKeySpecifier),
		fields?: ProfileFollowEdgeFieldPolicy,
	},
	PublishItineraryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PublishItineraryPayloadKeySpecifier | (() => undefined | PublishItineraryPayloadKeySpecifier),
		fields?: PublishItineraryPayloadFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	ResolutionError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResolutionErrorKeySpecifier | (() => undefined | ResolutionErrorKeySpecifier),
		fields?: ResolutionErrorFieldPolicy,
	},
	RevertItineraryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RevertItineraryPayloadKeySpecifier | (() => undefined | RevertItineraryPayloadKeySpecifier),
		fields?: RevertItineraryPayloadFieldPolicy,
	},
	Route?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RouteKeySpecifier | (() => undefined | RouteKeySpecifier),
		fields?: RouteFieldPolicy,
	},
	RouteConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RouteConnectionKeySpecifier | (() => undefined | RouteConnectionKeySpecifier),
		fields?: RouteConnectionFieldPolicy,
	},
	RouteEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RouteEdgeKeySpecifier | (() => undefined | RouteEdgeKeySpecifier),
		fields?: RouteEdgeFieldPolicy,
	},
	RouteSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RouteSegmentKeySpecifier | (() => undefined | RouteSegmentKeySpecifier),
		fields?: RouteSegmentFieldPolicy,
	},
	StartMediaUploadPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StartMediaUploadPayloadKeySpecifier | (() => undefined | StartMediaUploadPayloadKeySpecifier),
		fields?: StartMediaUploadPayloadFieldPolicy,
	},
	TextSearchResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TextSearchResultKeySpecifier | (() => undefined | TextSearchResultKeySpecifier),
		fields?: TextSearchResultFieldPolicy,
	},
	TextSearchResultMatch?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TextSearchResultMatchKeySpecifier | (() => undefined | TextSearchResultMatchKeySpecifier),
		fields?: TextSearchResultMatchFieldPolicy,
	},
	UnfollowProfilePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnfollowProfilePayloadKeySpecifier | (() => undefined | UnfollowProfilePayloadKeySpecifier),
		fields?: UnfollowProfilePayloadFieldPolicy,
	},
	UpdateBillingDetailsOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateBillingDetailsOutputKeySpecifier | (() => undefined | UpdateBillingDetailsOutputKeySpecifier),
		fields?: UpdateBillingDetailsOutputFieldPolicy,
	},
	UpdateCollectionLocationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateCollectionLocationPayloadKeySpecifier | (() => undefined | UpdateCollectionLocationPayloadKeySpecifier),
		fields?: UpdateCollectionLocationPayloadFieldPolicy,
	},
	UpdateCollectionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateCollectionPayloadKeySpecifier | (() => undefined | UpdateCollectionPayloadKeySpecifier),
		fields?: UpdateCollectionPayloadFieldPolicy,
	},
	UpdateConnectedAppPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateConnectedAppPayloadKeySpecifier | (() => undefined | UpdateConnectedAppPayloadKeySpecifier),
		fields?: UpdateConnectedAppPayloadFieldPolicy,
	},
	UpdateIconSilhouettePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateIconSilhouettePayloadKeySpecifier | (() => undefined | UpdateIconSilhouettePayloadKeySpecifier),
		fields?: UpdateIconSilhouettePayloadFieldPolicy,
	},
	UpdateItineraryCollectionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateItineraryCollectionPayloadKeySpecifier | (() => undefined | UpdateItineraryCollectionPayloadKeySpecifier),
		fields?: UpdateItineraryCollectionPayloadFieldPolicy,
	},
	UpdateItineraryDirectionsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateItineraryDirectionsPayloadKeySpecifier | (() => undefined | UpdateItineraryDirectionsPayloadKeySpecifier),
		fields?: UpdateItineraryDirectionsPayloadFieldPolicy,
	},
	UpdateItineraryLocationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateItineraryLocationPayloadKeySpecifier | (() => undefined | UpdateItineraryLocationPayloadKeySpecifier),
		fields?: UpdateItineraryLocationPayloadFieldPolicy,
	},
	UpdateItineraryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateItineraryPayloadKeySpecifier | (() => undefined | UpdateItineraryPayloadKeySpecifier),
		fields?: UpdateItineraryPayloadFieldPolicy,
	},
	UpdateMediaResourcePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateMediaResourcePayloadKeySpecifier | (() => undefined | UpdateMediaResourcePayloadKeySpecifier),
		fields?: UpdateMediaResourcePayloadFieldPolicy,
	},
	UpdateProfilePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateProfilePayloadKeySpecifier | (() => undefined | UpdateProfilePayloadKeySpecifier),
		fields?: UpdateProfilePayloadFieldPolicy,
	},
	UserAgreement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAgreementKeySpecifier | (() => undefined | UserAgreementKeySpecifier),
		fields?: UserAgreementFieldPolicy,
	},
	UserAgreementConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAgreementConnectionKeySpecifier | (() => undefined | UserAgreementConnectionKeySpecifier),
		fields?: UserAgreementConnectionFieldPolicy,
	},
	UserAgreementEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAgreementEdgeKeySpecifier | (() => undefined | UserAgreementEdgeKeySpecifier),
		fields?: UserAgreementEdgeFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;

import { relayStylePagination } from "@apollo/client/utilities";

export const typePolicies: StrictTypedTypePolicies = {
  Collection: {
    fields: {
      attrs: relayStylePagination(["id","includeNoLocale","locale","@connection",["key"]]),items: relayStylePagination(["bounds","boundsCircle","externalIds","externalSources","keyword","resourceIds","sectionIds","sort","tags","@connection",["key"]]),mediaContainers: relayStylePagination(["@connection",["key"]])
    }
  },CollectionLocation: {
    fields: {
      attrs: relayStylePagination(["id","includeNoLocale","locale","@connection",["key"]]),mediaContainers: relayStylePagination(["@connection",["key"]])
    }
  },IconSilhouette: {
    fields: {
      attrs: relayStylePagination(["id","includeNoLocale","locale","@connection",["key"]])
    }
  },Itinerary: {
    fields: {
      attrs: relayStylePagination(["id","includeNoLocale","locale","@connection",["key"]]),children: relayStylePagination(["placeIds","segmentIds","type","@connection",["key"]]),descendants: relayStylePagination(["depthMax","depthMin","parentType","placeIds","segmentIds","type","@connection",["key"]]),icons: relayStylePagination(["@connection",["key"]]),mediaContainers: relayStylePagination(["@connection",["key"]])
    }
  },ItineraryCollection: {
    fields: {
      ancestors: relayStylePagination(["parentType","placeIds","segmentIds","type","@connection",["key"]]),attrs: relayStylePagination(["id","includeNoLocale","locale","@connection",["key"]]),children: relayStylePagination(["parentType","placeIds","segmentIds","type","@connection",["key"]]),descendants: relayStylePagination(["depthMax","depthMin","parentType","placeIds","segmentIds","type","@connection",["key"]]),mediaContainers: relayStylePagination(["@connection",["key"]])
    }
  },ItineraryDirections: {
    fields: {
      ancestors: relayStylePagination(["parentType","placeIds","segmentIds","type","@connection",["key"]]),attrs: relayStylePagination(["id","includeNoLocale","locale","@connection",["key"]]),children: relayStylePagination(["parentType","placeIds","segmentIds","type","@connection",["key"]]),descendants: relayStylePagination(["depthMax","depthMin","parentType","placeIds","segmentIds","type","@connection",["key"]]),mediaContainers: relayStylePagination(["@connection",["key"]])
    }
  },ItineraryItemEdge: {
    fields: {
      directions: relayStylePagination(["direction","limitImmediate","skipOptional","@connection",["key"]])
    }
  },ItineraryLocation: {
    fields: {
      ancestors: relayStylePagination(["parentType","placeIds","segmentIds","type","@connection",["key"]]),attrs: relayStylePagination(["id","includeNoLocale","locale","@connection",["key"]]),children: relayStylePagination(["parentType","placeIds","segmentIds","type","@connection",["key"]]),descendants: relayStylePagination(["depthMax","depthMin","parentType","placeIds","segmentIds","type","@connection",["key"]]),directions: relayStylePagination(["accuracy","direction","restrict","segmentIds","@connection",["key"]]),mediaContainers: relayStylePagination(["@connection",["key"]])
    }
  },MediaImage: {
    fields: {
      attrs: relayStylePagination(["id","includeNoLocale","locale","@connection",["key"]])
    }
  },Place: {
    fields: {
      attrs: relayStylePagination(["id","includeNoLocale","locale","@connection",["key"]]),mediaContainers: relayStylePagination(["@connection",["key"]])
    }
  },PlaceHours: {
    fields: {
      intervals: relayStylePagination(["from","offset","status","to","@connection",["key"]])
    }
  },Position: {
    fields: {
      attrs: relayStylePagination(["id","includeNoLocale","locale","@connection",["key"]])
    }
  },Profile: {
    fields: {
      attrs: relayStylePagination(["id","includeNoLocale","locale","@connection",["key"]]),billingSubscriptions: relayStylePagination(["@connection",["key"]]),connectedApps: relayStylePagination(["authType","deleted","expired","serviceKey","type","@connection",["key"]]),followers: relayStylePagination(["handle","status","@connection",["key"]]),following: relayStylePagination(["handle","status","@connection",["key"]])
    }
  },Query: {
    fields: {
      authorizedProfiles: relayStylePagination(["@connection",["key"]]),billingPrices: relayStylePagination(["@connection",["key"]]),billingSubscriptions: relayStylePagination(["profileId","@connection",["key"]]),collectionItems: relayStylePagination(["bounds","boundsCircle","collectionIds","externalIds","externalSources","keyword","placeIds","profileId","resourceIds","sectionIds","sort","tags","@connection",["key"]]),collections: relayStylePagination(["discriminator","profileId","sort","@connection",["key"]]),connectedApps: relayStylePagination(["authType","deleted","expired","profileId","serviceKey","type","@connection",["key"]]),iconResources: relayStylePagination(["profileId","@connection",["key"]]),itineraries: relayStylePagination(["keyword","profileId","sort","@connection",["key"]]),placeAddressSearch: relayStylePagination(["borough","country","county","layers","locality","maxLabelLength","neighbourhood","postalCode","region","sources","streetAddress","thirdPartyQuery","@connection",["key"]]),placeAutocompleteSearch: relayStylePagination(["bounds","focus","layers","maxLabelLength","sources","text","thirdPartyQuery","@connection",["key"]]),placeReverseSearch: relayStylePagination(["focus","layers","maxLabelLength","sources","thirdPartyQuery","@connection",["key"]]),placeSearch: relayStylePagination(["bounds","focus","layers","maxLabelLength","sources","text","thirdPartyQuery","@connection",["key"]]),profiles: relayStylePagination(["handle","@connection",["key"]]),routes: relayStylePagination(["mode","positions","@connection",["key"]]),userAgreements: relayStylePagination(["profileId","@connection",["key"]])
    }
  }
}
