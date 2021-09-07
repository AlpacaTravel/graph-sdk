import gql from 'graphql-tag';
import * as StencilApollo from 'stencil-apollo';
import { h } from '@stencil/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/**
 * Angle unit
 * @typedef {("Degrees"|"Radians")} AngleUnit
 */

/**
 * Result of approving a follow request
 * @typedef {Object} ApproveProfileFollowPayload
 * @property {Profile} fromProfile - The follower profile
 * @property {Profile} toProfile - The profile being followed
 * @property {ProfileFollowStatus} [status] - The status of the follow request
 */

/**
 * Additional data defined on a resource
 * @typedef {Object} Attribute
 * @property {string} id - The attribute identifier
 * 
 * Has the form "{{resource_type}}/{{attribute_name}}"
 * eg: The "title" attribute on an item will have the id: "item/title"
 * 
 * Custom attributes have the form "custom/{{attribute_name}}"
 * @property {JSON} [value] - The attribute value, can be any JSON-serialisable type
 * @property {JSON} [meta] - Optional attribute metadata, can be any JSON-serialisable type
 * @property {string} [locale] - Optional string representing the locale of the attribute value
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
 * @property {JSON} value - The attribute value, can be any JSON-serialisable type
 * @property {JSON} [meta] - Optional attribute metadata, can be any JSON-serialisable type
 * @property {string} [locale] - Optional string representing the locale of the attribute value
 */

/**
 * A bounding box on a map defined by two positions (opposite corners of the box)
 * @typedef {Object} Bounds
 * @property {number} w - The west-most longitude of the bounding box
 * @property {number} s - The south-most latitude of the bounding box
 * @property {number} e - The east-most longitude of the bounding box
 * @property {number} n - The north-most latitude of the bounding box
 * @property {Array<number>} ws - The south-west point of the bounding box in the form: [west, south]
 * @property {Array<number>} en - The north-east point of the bounding box in the form: [east, north]
 * @property {Array<number>} wsen - The south-west and north-east points of the bounding box in the form: [west, south, east, north]
 * @property {Array<Array<number>>} minMax - The minimum and maximum points of the bounding box in the form: [minimum, maximum]
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
 * @property {number} n - The north-most latitude of the bounding box
 * @property {number} e - The east-most longitude of the bounding box
 * @property {number} s - The south-most latitude of the bounding box
 * @property {number} w - The west-most longitude of the bounding box
 */

/**
 * Response of claiming a handle
 * @typedef {Object} ClaimProfileHandlePayload
 * @property {Profile} [profile] - The profile that will claim the handle
 */

/**
 * A collection type is used to group together a unordered set of items
 * @typedef {Object} Collection
 * @property {string} id - The Globally Unique ID of the object.
 * @property {Profile} profile - Profile that owns this collection
 * @property {string} [created] - The date when the collection was created
 * @property {string} [modified] - The date when the collection was last modified
 * @property {string} [title] - A supplied title for this collection
 * @property {string} [synopsis] - A short text summary
 * @property {string} [description] - A longer text description
 * @property {Array<string>} tags - A series of strings applied to label this item
 * @property {Array<MediaContainer>} media - List of MediaContainers containing images or other media
 * @property {MediaContainer} [preferredMedia] - A single MediaContainer representing the preferred media to use
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {Array<(Attribute|null|undefined)>} attrs - Query multiple attributes by id and optionally locale
 * @property {AttributeConnection} allAttrs - Return all attributes on the resource
 * @property {AttributeConnection} attrsById - Query multiple attributes with the same id and optionally locale
 * @property {string} discriminator - A label used to differentiate types of collections
 * @property {CollectionItem} [item] - Returns an item belonging to this collection by id
 * @property {CollectionItemConnection} items - Retrieve multiple collection-items belonging to this collection
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
 * @property {string} id - The unique identifier, taking the shape of item/XYZ
 * @property {Profile} profile - The associated profile owner
 * @property {string} [created] - The date when the collection-item was created
 * @property {string} [modified] - The date when the collection-item was last modified
 * @property {string} [title] - The supplied title
 * @property {string} [synopsis] - A short text summary
 * @property {string} [description] - A longer text description
 * @property {Array<string>} tags - A series of strings applied to label this item
 * @property {Array<MediaContainer>} media - List of MediaContainers containing images or other media
 * @property {MediaContainer} [preferredMedia] - The preferred MediaContainer to use
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {Array<string>} sectionIds - One or more sections this item belongs to
 * @property {string} [externalId] - Identifier from an external source this item is associated with
 * @property {string} [externalSource] - The source of the item's externalId
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {Array<(Attribute|null|undefined)>} attrs - Query multiple attributes by id and optionally locale
 * @property {AttributeConnection} allAttrs - Return all attributes on the resource
 * @property {AttributeConnection} attrsById - Query multiple attributes with the same id and optionally locale
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
 * Determine how to sort CollectionItems when listing
 * @typedef {Object} CollectionItemsSort
 * @property {SortDirection} [created] - Sort by the created date
 * @property {SortDirection} [modified] - Sort by the modified date
 * @property {SortDirection} [title] - Sort by the collection-item title
 */

/**
 * A CollectionItem used to represents a single location association to a place.
 * @typedef {Object} CollectionLocation
 * @property {string} id - The unique identifier, taking the shape of item/XYZ
 * @property {Profile} profile - The associated profile owner
 * @property {string} [created] - The date when the collection-item was created
 * @property {string} [modified] - The date when the collection-item was last modified
 * @property {string} [title] - The supplied title
 * @property {string} [synopsis] - A short text summary
 * @property {string} [description] - A longer text description
 * @property {Array<string>} tags - A series of strings applied to label this item
 * @property {Array<MediaContainer>} media - List of MediaContainers containing images or other media
 * @property {MediaContainer} [preferredMedia] - The preferred MediaContainer to use
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {Array<string>} sectionIds - One or more sections this item belongs to
 * @property {string} [externalId] - Identifier from an external source this item is associated with
 * @property {string} [externalSource] - The source of the item's externalId
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {Array<(Attribute|null|undefined)>} attrs - Query multiple attributes by id and optionally locale
 * @property {AttributeConnection} allAttrs - Return all attributes on the resource
 * @property {AttributeConnection} attrsById - Query multiple attributes with the same id and optionally locale
 * @property {Place} place - The associated place information for this location
 * @property {Position} position - The position of the collection-location (derived from place if not overridden)
 * @property {Bounds} [bounds] - The bounding box around the collection-location (derived from place if not overridden)
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
 * @typedef {("N"|"NE"|"E"|"SE"|"S"|"SW"|"W"|"NW")} CompassPoint
 */

/**
 * Connected apps stored in the profile
 * @typedef {Object} ConnectedApp
 * @property {string} id - The Globally Unique ID of the object.
 * @property {Profile} [profile] - The profile associated with this connected app
 * @property {ConnectedAppTypes} [type] - A key to describe the type of connection to the application
 * @property {ConnectedAppServiceKeys} serviceKey - This is the key relating to the service, such as "atdw" or "crowdriff-api" - it identifies the "App" we are connecting to
 * @property {ConnectedAppAuthTypes} [authType] - Depending on the authentication method, this can highlight the authenticated application method (e.g. OAuth)
 * @property {string} [scope] - Any specific scope that has been granted to the 3rd party application
 * @property {JSON} [configuration] - Encrypted JSON
 * @property {string} [thirdPartyId] - A 3rd party ID or Account ID, this does not affect any of the Alpaca ID naming - for instance, if we are connecting to an Identity in OAUTH, this is the OAUTH Identity ID - This is just a place to store data
 */

/**
 * Possible auth types for a ConnectedApp
 * @typedef {("Tokens"|"Oauth"|"Credentials")} ConnectedAppAuthTypes
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
 * @typedef {("Atdw"|"CrowdriffApi"|"ShopifyApi")} ConnectedAppServiceKeys
 */

/**
 * Possible types of ConnectedApp
 * @typedef {("Configuration"|"Credentials"|"Api")} ConnectedAppTypes
 */

/**
 * Creates a collection
 * @typedef {Object} CreateCollectionInput
 * @property {CollectionDiscriminator} discriminator - A label used to differentiate types of collections
 * @property {string} [title] - Title of the collection
 * @property {string} [synopsis] - A short text summary
 * @property {string} [description] - A longer text description
 * @property {Array<string>} [tags] - A series of strings applied to label the collection
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {Array<AttributeInput>} [attrs] - Additional data defined on the collection
 * @property {Array<CreateMediaContainerInput>} [media] - The list of MediaContainers to add to the new Collection
 */

/**
 * The input to create a collection location
 * @typedef {Object} CreateCollectionLocationInput
 * @property {string} [title] - Title for the new item
 * @property {string} [synopsis] - A short summary text content for the new item
 * @property {string} [description] - A longer description content for the new item
 * @property {Array<string>} [tags] - A collection of strings used to label the new item
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {Array<string>} [sectionIds] - One or more sections for this new item
 * @property {string} [externalId] - Identifier from an external source this new item is associated with
 * @property {string} [externalSource] - The source of this item's externalId
 * @property {Array<AttributeInput>} [attrs] - Additional data defined on this CollectionLocation
 * @property {Array<CreateMediaContainerInput>} [media] - The list of MediaContainers to add to the new CollectionLocation
 * @property {PlaceInput} place - The associated place record for this location
 * @property {PositionInput} [position] - Override for the place's position
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
 * @property {ConnectedAppTypes} [type] - The type of the connected-app
 * @property {ConnectedAppServiceKeys} serviceKey - Identifies the service being connected to
 * @property {string} [scope] - Any specific scope that has been granted to the 3rd party application
 * @property {ConnectedAppAuthTypes} [authType] - The authenticated application method
 * @property {JSON} [configuration] - Encrypted JSON
 * @property {string} [thirdPartyId] - 3rd party ID or account ID
 */

/**
 * The return fields available after creating a connected app
 * @typedef {Object} CreateConnectedAppPayload
 * @property {ConnectedApp} [connectedApp] - The newly created connected-app
 */

/**
 * Creates an itinerary item collection type
 * @typedef {Object} CreateItineraryCollectionInput
 * @property {string} [title] - The title for the new itinerary-collection
 * @property {string} [synopsis] - The synopsis for the new itinerary-collection
 * @property {string} [description] - The description for the new itinerary-collection
 * @property {Array<string>} [tags] - The tags for the new itinerary-collection
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {Array<AttributeInput>} [attrs] - Additional data defined on the collection
 * @property {Array<CreateMediaContainerInput>} [media] - The list of MediaContainers to add to the new ItineraryCollection
 * @property {ItineraryItemPositionAtStart} [positionAtStart] - Creates the item positioned before all its siblings
 * @property {ItineraryItemPositionAtEnd} [positionAtEnd] - Creates the item positioned after all its siblings
 * @property {ItineraryItemPositionAfterSibling} [positionAfterSibling] - Create the item positioned after the given sibling
 * @property {ItineraryItemPositionBeforeSibling} [positionBeforeSibling] - Create the item positioned before the given sibling
 * @property {ItineraryItemPositionOnLastCollection} [positionOnLastCollection] - Create the item at last position of the last itinerary-collection item
 */

/**
 * The fields available after creating an itinerary collection
 * @typedef {Object} CreateItineraryCollectionPayload
 * @property {ItineraryCollection} [collection] - The created itinerary collection
 * @property {Itinerary} itinerary - The modified itinerary
 * @property {ItineraryItemCascadedChanges} cascaded - Other changes to the itinerary caused by the creation of the itinerary-collection
 */

/**
 * The input fields to creating new itinerary directions items
 * @typedef {Object} CreateItineraryDirectionsInput
 * @property {string} [title] - The title for the new itinerary-directions
 * @property {string} [synopsis] - The synopsis for the new itinerary-directions
 * @property {string} [description] - The description for the new itinerary-directions
 * @property {Array<string>} [tags] - The tags for the new itinerary-directions
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {Array<AttributeInput>} [attrs] - Additional data on the new itinerary
 * @property {Array<CreateMediaContainerInput>} [media] - The list of MediaContainers to add to the new ItineraryDirections
 * @property {string} [originId] - The origin itinerary location item, in the form of item/XYZ
 * @property {RouteInput} route - The route of this item, must include at least one route segment
 * @property {Array<ItineraryDirectionsDurationsInput>} [durations] - The duration details of the new itinerary-directions
 * @property {number} [distance] - The distance of the new itinerary-directions
 * @property {ElevationInput} [elevation] - The elevation details of the new itinerary-directions
 * @property {ItineraryItemPositionAtStart} [positionAtStart] - Creates the itinerary-directions to be before all its siblings
 * @property {ItineraryItemPositionAtEnd} [positionAtEnd] - Creates the itinerary-directions to be after all its siblings
 * @property {ItineraryItemPositionAfterSibling} [positionAfterSibling] - Creates the itinerary-directions after the given sibling
 * @property {ItineraryItemPositionBeforeSibling} [positionBeforeSibling] - Creates the itinerary-directions before the given sibling
 * @property {ItineraryItemPositionOnLastCollection} [positionOnLastCollection] - Creates the itinerary-directions at the last position of the last itinerary-collection item
 */

/**
 * The itinerary directions return fields available after creating the itinerary directions
 * @typedef {Object} CreateItineraryDirectionsPayload
 * @property {ItineraryDirections} [directions] - The created itinerary directions item
 * @property {Itinerary} itinerary - The modified itinerary
 * @property {ItineraryItemCascadedChanges} cascaded - Other changes to the itinerary caused by the creation of the itinerary-directions
 */

/**
 * Creates a itinerary
 * @typedef {Object} CreateItineraryInput
 * @property {string} [title] - The title for the new itinerary
 * @property {string} [synopsis] - The synopsis for the new itinerary
 * @property {string} [description] - The description for the new itinerary
 * @property {Array<string>} [tags] - The tags for the new itinerary
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {Array<AttributeInput>} [attrs] - Additional data on the new itinerary
 * @property {ItineraryAutoRouteInput} [autoRoute] - Enable auto routing, or set to null to disable
 * @property {ElevationInput} [elevation] - Elevation data of the new itinerary
 * @property {Array<CreateMediaContainerInput>} [media] - The list of MediaContainers to add to the new Itinerary
 */

/**
 * The fields to create an itinerary location
 * @typedef {Object} CreateItineraryLocationInput
 * @property {string} [title] - The title for the new itinerary-location
 * @property {string} [synopsis] - The synopsis for the new itinerary-location
 * @property {string} [description] - The description for the new itinerary-location
 * @property {Array<string>} [tags] - The tags for the new itinerary-location
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {Array<AttributeInput>} [attrs] - Additional data defined on the collection
 * @property {Array<CreateMediaContainerInput>} [media] - The list of MediaContainers to add to the new ItineraryLocation
 * @property {PositionInput} [position] - The position of the itinerary-location
 * @property {PlaceInput} place - The place for this new itinerary-location
 * @property {boolean} [optional] - Whether this is an optional location on the itinerary
 * @property {ItineraryItemPositionAtStart} [positionAtStart] - Creates the item positioned before all its siblings
 * @property {ItineraryItemPositionAtEnd} [positionAtEnd] - Creates the item positioned after all its siblings
 * @property {ItineraryItemPositionAfterSibling} [positionAfterSibling] - Create the item positioned after the given sibling
 * @property {ItineraryItemPositionBeforeSibling} [positionBeforeSibling] - Create the item positioned before the given sibling
 * @property {ItineraryItemPositionOnLastCollection} [positionOnLastCollection] - Create the item at last position of the last itinerary-collection item
 */

/**
 * The fields available after creating an itinerary location
 * @typedef {Object} CreateItineraryLocationPayload
 * @property {ItineraryLocation} [location] - The itinerary location that was created
 * @property {Itinerary} itinerary - The modified itinerary
 * @property {ItineraryItemCascadedChanges} cascaded - Other changes to the itinerary caused by the creation of the itinerary-location
 */

/**
 * The fields available after creating an itinerary
 * @typedef {Object} CreateItineraryPayload
 * @property {Itinerary} [itinerary] - The newly created itinerary
 */

/**
 * Create a MediaContainer
 * @typedef {Object} CreateMediaContainerInput
 * @property {string} resourceId - ID to a MediaResource to contain
 * @property {MediaContainerPositionBefore} [positionBefore] - Add the MediaContainer before another container in the list
 * @property {MediaContainerPositionAfter} [positionAfter] - Add the MediaContainer after another container in the list
 * @property {MediaContainerPositionAtStart} [positionAtStart] - Add the MediaContainer at the start of the list
 * @property {MediaContainerPositionAtEnd} [positionAtEnd] - Add the MediaContainer at the end of the list
 */

/**
 * An offset in date and/or time represented as integer differences for each datetime field
 * @typedef {Object} DatetimeOffset
 * @property {number} [years] - Positive or negative difference for years
 * @property {number} [months] - Positive or negative difference for months
 * @property {number} [weeks] - Positive or negative difference for weeks
 * @property {number} [days] - Positive or negative difference for days
 * @property {number} [hours] - Positive or negative difference for hours
 * @property {number} [minutes] - Positive or negative difference for minutes
 * @property {number} [seconds] - Positive or negative difference for seconds
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
 * Deletes a itinerary item
 * @typedef {Object} DeleteItineraryItemPayload
 * @property {string} [id] - The itinerary item identifier, in the form of item/XYZ
 * @property {Itinerary} itinerary - The modified itinerary
 * @property {ItineraryItemCascadedChanges} cascaded - Other changes to the itinerary that caused by deleting the itinerary-item
 */

/**
 * The result of deleting an itinerary
 * @typedef {Object} DeleteItineraryPayload
 * @property {string} [id] - The ID of the deleted itinerary
 */

/**
 * Result of denying a follow request
 * @typedef {Object} DenyProfileFollowPayload
 * @property {Profile} fromProfile - The follower profile
 * @property {Profile} toProfile - The profile being followed
 * @property {ProfileFollowStatus} [status] - The status of the follow request
 */

/**
 * Distance unit
 * @typedef {("Kilometers"|"Feet"|"Miles"|"Meters")} DistanceUnit
 */

/**
 * Duration unit
 * @typedef {("Seconds"|"Minutes"|"Hours")} DurationUnit
 */

/**
 * Elevation data
 * @typedef {Object} Elevation
 * @property {number} [gain] - The cumulative elevation gain
 * @property {number} [loss] - The cumulative elevation loss
 * @property {number} [min] - The minimum elevation
 * @property {number} [max] - The maximum elevation
 */

/**
 * Input elevation data
 * @typedef {Object} ElevationInput
 * @property {number} [gain] - The cumulative elevation gain
 * @property {number} [loss] - The cumulative elevation loss
 * @property {number} [min] - The minimum elevation
 * @property {number} [max] - The maximum elevation
 */

/**
 * Uploads a media resource
 * @typedef {Object} FinalizeMediaUploadInput
 * @property {Array<string>} [tags] - List of labels to apply to the new media-resource
 * @property {string} [attribution] - Text attribution for the source of the new media-resource
 * @property {string} [caption] - Text caption for the new media-resource
 * @property {string} [copyright] - Copyright details of the new media-resource
 * @property {Array<AttributeInput>} [attrs] - Additional data to define on the new media-resource
 */

/**
 * Result of finalizing a media upload
 * @typedef {Object} FinalizeMediaUploadPayload
 * @property {MediaUploadStatus} status - The status of this media upload
 * @property {MediaResource} [resource] - The newly created media-resource
 */

/**
 * Result of creating a follow request
 * @typedef {Object} FollowProfilePayload
 * @property {Profile} fromProfile - The follower profile
 * @property {Profile} toProfile - The profile being followed
 * @property {ProfileFollowStatus} [status] - The status of the follow request
 */

/**
 * Different GeoJSON simplification algorithms
 * @typedef {Object} GeoJsonSimplification
 * @property {GeoJsonSimplificationRamerDouglasPeucker} ramerDouglasPeucker - The Ramer-Douglas-Peucker algorithm
 */

/**
 * The Ramer-Douglas-Peucker algorithm
 * @typedef {Object} GeoJsonSimplificationRamerDouglasPeucker
 * @property {number} [tolerance] - The amount of application applied, higher values result in more simplification
 * @property {boolean} [highQuality] - Modify the algorithm to be slower by produce higher quality results
 */

/**
 * Isochrone for the given position with duration and vehicle
 * @typedef {Object} Isochrone
 * @property {number} [duration] - The duration of the isochrone
 * @property {Array<string>} copyrights - Copyright details of the isochrone
 * @property {IsochroneMode} mode - The mode of transport of the isochrone
 * @property {Bounds} bounds - A bounding box around the isochrone
 * @property {JSON} polygon - The isochrone as a geojson polygon
 */

/**
 * Mode of transport for an isochrone
 * @typedef {("Car"|"Bike"|"Foot")} IsochroneMode
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
 * @property {string} id - The Globally Unique ID of the object.
 * @property {Profile} [profile] - Profile that owns this itinerary
 * @property {string} [created] - The date when the itinerary was created
 * @property {string} [modified] - The date when the itinerary was last modified
 * @property {ItineraryItem} [item] - Returns a single item from this itinerary by id
 * @property {ItineraryAutoRoute} [autoRoute] - If true, itinerary-directions will be created to automatically route between itinerary-locations
 * @property {string} [title] - The supplied title
 * @property {string} [synopsis] - A short text summary
 * @property {string} [description] - A longer text description
 * @property {Array<string>} tags - A series of strings applied to label this item
 * @property {Array<MediaContainer>} media - List of MediaContainers containing images or other media
 * @property {MediaContainer} [preferredMedia] - The preferred MediaContainer to use
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {ItineraryItemConnection} descendants - The descending items within this itinerary item
 * @property {ItineraryItemConnection} children - The immediate associated children itinerary items
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {Array<(Attribute|null|undefined)>} attrs - Query multiple attributes by id and optionally locale
 * @property {AttributeConnection} attrsById - Query multiple attributes with the same id and optionally locale
 * @property {AttributeConnection} allAttrs - Return all attributes on the resource
 * @property {Bounds} [bounds] - Bounds for the itinerary item
 * @property {Elevation} elevation - Elevation data of the itinerary
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
 * @property {string} id - Unique identifier for the itinerary-item
 * @property {string} [title] - The supplied title
 * @property {string} [synopsis] - A short text summary
 * @property {string} [description] - A longer text description
 * @property {Array<string>} tags - A series of strings applied to label this item
 * @property {Array<MediaContainer>} media - List of MediaContainers containing images or other media
 * @property {MediaContainer} [preferredMedia] - The preferred MediaContainer to use
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {Itinerary} itinerary - The itinerary this item belongs to
 * @property {ItineraryItem} [before] - The sibling item that comes before this item
 * @property {ItineraryItem} [after] - The sibling item that comes after this item
 * @property {ItineraryItem} [parent] - The parent item of this item
 * @property {ItineraryItemConnection} ancestors - All ancestors of the itinerary-item
 * @property {ItineraryItemConnection} descendants - All the descendants of the itinerary-item in depth-first-search order
 * @property {ItineraryItemConnection} children - All the direct children of the itinerary-item
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {Array<(Attribute|null|undefined)>} attrs - Query multiple attributes by id and optionally locale
 * @property {AttributeConnection} attrsById - Query multiple attributes with the same id and optionally locale
 * @property {AttributeConnection} allAttrs - Return all attributes on the resource
 * @property {Bounds} [bounds] - Bounds for the itinerary item
 */

/**
 * Connection of Itinerarys
 * @typedef {Object} ItineraryConnection
 * @property {Array<ItineraryEdge>} edges - All the edges in this page of the connection
 * @property {Array<Itinerary>} nodes - Shortcut for edges[].node
 * @property {PageInfo} pageInfo - Details regarding the current page of the connnection
 * @property {number} totalCount - The total number of items in the connection (in all pages)
 */

/**
 * An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes.
 * @typedef {Object} ItineraryDirections
 * @property {string} id - Unique identifier for the itinerary-item
 * @property {string} [title] - The supplied title
 * @property {string} [synopsis] - A short text summary
 * @property {string} [description] - A longer text description
 * @property {Array<string>} tags - A series of strings applied to label this item
 * @property {Array<MediaContainer>} media - List of MediaContainers containing images or other media
 * @property {MediaContainer} [preferredMedia] - The preferred MediaContainer to use
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {Itinerary} itinerary - The itinerary this item belongs to
 * @property {ItineraryItem} [before] - The sibling item that comes before this item
 * @property {ItineraryItem} [after] - The sibling item that comes after this item
 * @property {ItineraryItem} [parent] - The parent item of this item
 * @property {ItineraryItemConnection} ancestors - All ancestors of the itinerary-item
 * @property {ItineraryItemConnection} descendants - All the descendants of the itinerary-item in depth-first-search order
 * @property {ItineraryItemConnection} children - All the direct children of the itinerary-item
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {Array<(Attribute|null|undefined)>} attrs - Query multiple attributes by id and optionally locale
 * @property {AttributeConnection} attrsById - Query multiple attributes with the same id and optionally locale
 * @property {AttributeConnection} allAttrs - Return all attributes on the resource
 * @property {Bounds} [bounds] - Bounds for the itinerary-directions and it's descendants
 * @property {ItineraryLocation} [origin] - The itinerary-location that is the starting point of the directions
 * @property {ItineraryLocation} [destination] - The itinerary-location that is the ending point of the directions
 * @property {Route} route - The route details of this directions item
 * @property {Array<ItineraryDirectionsDurations>} durations - The duration of this itinerary-directions
 * @property {number} [durationMin] - The minimum duration of this itinerary-directions
 * @property {number} [durationMax] - The maximum duration of this itinerary-directions
 * @property {number} [distance] - The estimated distance of this itinerary-directions
 * @property {Elevation} elevation - The elevation details of this itinerary-directions
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
 * @property {string} id - Unique identifier for this duration
 * @property {number} duration - The duration value
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
 * @property {ItineraryDirections} node - The item
 * @property {ItineraryDirectionsDirection} direction - Whether this itinerary-directions is inbound or outbound from the itinerary-location
 */

/**
 * Restricts search for directions to a portion of an Itinerary
 * @typedef {("ParentDescendants")} ItineraryDirectionsRestrict
 */

/**
 * Edge containing a Itinerary
 * @typedef {Object} ItineraryEdge
 * @property {string} cursor - The cursor string pointing to this item
 * @property {Itinerary} node - The item
 */

/**
 * An item in an itinerary as part of the tree
 * @typedef {Object} ItineraryItem
 * @property {string} id - Unique identifier for the itinerary-item
 * @property {string} [title] - The supplied title
 * @property {string} [synopsis] - A short text summary
 * @property {string} [description] - A longer text description
 * @property {Array<string>} tags - A series of strings applied to label this item
 * @property {Array<MediaContainer>} media - List of MediaContainers containing images or other media
 * @property {MediaContainer} [preferredMedia] - The preferred MediaContainer to use
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {Itinerary} itinerary - The itinerary this item belongs to
 * @property {ItineraryItem} [before] - The sibling item that comes before this item
 * @property {ItineraryItem} [after] - The sibling item that comes after this item
 * @property {ItineraryItem} [parent] - The parent item of this item
 * @property {ItineraryItemConnection} ancestors - All ancestors of the itinerary-item
 * @property {ItineraryItemConnection} descendants - All the descendants of the itinerary-item in depth-first-search order
 * @property {ItineraryItemConnection} children - All the direct children of the itinerary-item
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {Array<(Attribute|null|undefined)>} attrs - Query multiple attributes by id and optionally locale
 * @property {AttributeConnection} attrsById - Query multiple attributes with the same id and optionally locale
 * @property {AttributeConnection} allAttrs - Return all attributes on the resource
 * @property {Bounds} [bounds] - Bounds for the itinerary item
 */

/**
 * Changes to an itinerary caused by a mutation
 * @typedef {Object} ItineraryItemCascadedChanges
 * @property {Array<string>} deletedIds - Itinerary-items that were deleted due to the mutation
 * @property {Array<ItineraryItem>} created - Itinerary-items that were created due to the mutation
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
 * @property {ItineraryItem} node - The item
 * @property {ItineraryDirectionsConnection} directions - List itinerary-directions connecting this node to other nodes in the connection
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
 * @typedef {("ItineraryCollection"|"ItineraryLocation"|"ItineraryDirections")} ItineraryItemType
 */

/**
 * An itinerary item representing a location with an associated place in the itinerary
 * @typedef {Object} ItineraryLocation
 * @property {string} id - Unique identifier for the itinerary-item
 * @property {string} [title] - The supplied title
 * @property {string} [synopsis] - A short text summary
 * @property {string} [description] - A longer text description
 * @property {Array<string>} tags - A series of strings applied to label this item
 * @property {Array<MediaContainer>} media - List of MediaContainers containing images or other media
 * @property {MediaContainer} [preferredMedia] - The preferred MediaContainer to use
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {Itinerary} itinerary - The itinerary this item belongs to
 * @property {ItineraryItem} [before] - The sibling item that comes before this item
 * @property {ItineraryItem} [after] - The sibling item that comes after this item
 * @property {ItineraryItem} [parent] - The parent item of this item
 * @property {ItineraryItemConnection} ancestors - All ancestors of the itinerary-item
 * @property {ItineraryItemConnection} descendants - All the descendants of the itinerary-item in depth-first-search order
 * @property {ItineraryItemConnection} children - All the direct children of the itinerary-item
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {Array<(Attribute|null|undefined)>} attrs - Query multiple attributes by id and optionally locale
 * @property {AttributeConnection} attrsById - Query multiple attributes with the same id and optionally locale
 * @property {AttributeConnection} allAttrs - Return all attributes on the resource
 * @property {Bounds} bounds - Bounds for the itinerary-location and it's descendants
 * @property {Place} place - The place details of this location
 * @property {Position} position - The position of the collection-location (derived from place if not overridden)
 * @property {JSON} geoJson - The representation of a location, as a GeoJSON FeatureCollection
 * @property {boolean} optional - Whether the location is an optional stop
 * @property {ItineraryDirectionsConnection} directions - Retrieves itinerary-directions associated with this itinerary-location
 */

/**
 * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
 * @typedef {*} JSON
 */

/**
 * A container for a MediaResource
 * @typedef {Object} MediaContainer
 * @property {string} id - Unique identifier for this container
 * @property {MediaResource} resource - The MediaResource inside this container
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
 * @property {string} [id] - Unique identifier for the media-resource
 * @property {Profile} [profile] - The associated profile owner
 * @property {string} provider - The provider for the media
 * @property {string} [caption] - Text caption for the media-resource
 * @property {string} [attribution] - Text attribution for the source of the media-resource
 * @property {string} [copyright] - Copyright details of the media-resource
 * @property {string} [altText] - Alternative text for the media-resource
 * @property {Array<string>} tags - A series of strings representing applied labels to the media
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {Array<(Attribute|null|undefined)>} attrs - Query multiple attributes by id and optionally locale
 * @property {AttributeConnection} allAttrs - Return all attributes on the resource
 * @property {AttributeConnection} attrsById - Query multiple attributes with the same id and optionally locale
 * @property {Array<number>} [originalSize] - The original width and height of the image
 * @property {string} [url] - Provides the URL of the media
 * @property {MediaImageSource} [source] - Provides a specific source for the media, based often on different encoding or different sizing
 * @property {Array<MediaImageSource>} sources - A collection of sources for the media
 * @property {Array<string>} exifIds - Ids of all exif data in this media-image
 * @property {MediaImageExif} [exif] - Look up one exif value in this media-image by id
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
 * @property {string} [id] - A optional identifier for the source
 * @property {string} type - The content-type of the media source
 * @property {string} url - The URL to the media source
 * @property {number} [width] - The width of the media
 * @property {number} [height] - The height of the media
 */

/**
 * Representing media such as images/photos as well as other types such as video or audio
 * @typedef {Object} MediaResource
 * @property {string} [id] - Unique identifier for the media-resource
 * @property {Profile} [profile] - The associated profile owner
 * @property {string} provider - The provider for the media
 * @property {string} [caption] - Text caption for the media-resource
 * @property {string} [attribution] - Text attribution for the source of the media-resource
 * @property {string} [copyright] - Copyright details of the media-resource
 * @property {string} [altText] - Alternative text for the media-resource
 * @property {Array<string>} tags - A series of strings representing applied labels to the media
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {Array<(Attribute|null|undefined)>} attrs - Query multiple attributes by id and optionally locale
 * @property {AttributeConnection} allAttrs - Return all attributes on the resource
 * @property {AttributeConnection} attrsById - Query multiple attributes with the same id and optionally locale
 */

/**
 * The status of a Media upload process
 * @typedef {("AwaitingUpload"|"Processing"|"Complete"|"ProcessingFailed")} MediaUploadStatus
 */

/**
 * Moves the itinerary item
 * @typedef {Object} MoveItineraryItemPayload
 * @property {ItineraryItem} [item] - The fields for the item
 * @property {Itinerary} itinerary - The modified itinerary
 * @property {ItineraryItemCascadedChanges} cascaded - Other changes to the itinerary that caused by moving the itinerary-item
 */

/**
 * Move a MediaContainer within a list, exactly one of the position arguments is required.
 * @typedef {Object} MoveMediaContainerInput
 * @property {string} id - ID to the Container to update
 * @property {MediaContainerPositionBefore} [positionBefore] - Move the MediaContainer before another container in the list
 * @property {MediaContainerPositionAfter} [positionAfter] - Move the MediaContainer after another container in the list
 * @property {MediaContainerPositionAtStart} [positionAtStart] - Move the MediaContainer at the start of the list
 * @property {MediaContainerPositionAtEnd} [positionAtEnd] - Move the MediaContainer at the end of the list
 */

/**
 * @typedef {Object} Mutation
 * @property {CreateCollectionPayload} createCollection - The return fields available after creating a collection
 * @property {UpdateCollectionPayload} updateCollection - Updates a collection
 * @property {DeleteCollectionPayload} deleteCollection - Delete an collection
 * @property {DeleteCollectionItemPayload} deleteCollectionItem - The fields available after the collection is deleted
 * @property {CreateCollectionLocationPayload} createCollectionLocation - Create a new collection-location under the given collection
 * @property {UpdateCollectionLocationPayload} updateCollectionLocation - The fields avaialble after updating the collection location
 * @property {CreateConnectedAppPayload} createConnectedApp - The return fields available after creating a connected app
 * @property {UpdateConnectedAppPayload} updateConnectedApp - Update a connected app
 * @property {DeleteConnectedAppPayload} deleteConnectedApp - Deleted a connected app
 * @property {MoveItineraryItemPayload} moveItineraryItem - Move an ItineraryItem
 * @property {DeleteItineraryItemPayload} deleteItineraryItem - Delete an ItineraryItem
 * @property {CreateItineraryPayload} createItinerary - Create a new itinerary
 * @property {UpdateItineraryPayload} updateItinerary - Updates a itinerary
 * @property {DeleteItineraryPayload} deleteItinerary - Delete an itinerary
 * @property {PublishItineraryPayload} publishItinerary - Publish an itinerary making it publically accessible
 * @property {CreateItineraryCollectionPayload} createItineraryCollection - Create a new ItineraryCollection item inside the given itinerary
 * @property {UpdateItineraryCollectionPayload} updateItineraryCollection - Update an ItineraryCollection
 * @property {CreateItineraryLocationPayload} createItineraryLocation - Create a new ItineraryLocation item inside the given itinerary
 * @property {UpdateItineraryLocationPayload} updateItineraryLocation - Update an ItineraryLocation
 * @property {CreateItineraryDirectionsPayload} createItineraryDirections - Create a new ItineraryDirections item inside the given itinerary
 * @property {UpdateItineraryDirectionsPayload} updateItineraryDirections - Update an ItineraryDirections
 * @property {StartMediaUploadPayload} startMediaUpload - Start a media upload
 * @property {FinalizeMediaUploadPayload} finalizeMediaUpload - Finalize the media upload by creating a media-resource
 * @property {UpdateMediaResourcePayload} updateMediaResource - Update a media resource with updated properties
 * @property {FollowProfilePayload} followProfile - Create a follow request between two profiles
 * @property {UnfollowProfilePayload} unfollowProfile - Remove the follow between two profiles
 * @property {ApproveProfileFollowPayload} approveProfileFollow - Approve a follow request between two profiles
 * @property {DenyProfileFollowPayload} denyProfileFollow - Deny a follow request between two profiles
 * @property {ClaimProfileHandlePayload} claimProfileHandle - Claim an unclaimed handle for the given profile
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
 * @property {boolean} hasPreviousPage - True if there is a page before this one
 * @property {boolean} hasNextPage - True if there is a page after this one
 * @property {string} [startCursor] - The cursor of the first edge in this page
 * @property {string} [endCursor] - The cursor of the last edge in this page
 */

/**
 * A defined location in the world
 * @typedef {Object} Place
 * @property {string} id - The Globally Unique ID of the object.
 * @property {PlaceResolutionError} [resolutionError] - If non-null, an error occured while resolving this place and only a subset of data will be accessible
 * @property {string} [title] - Alias for `Place.name`
 * @property {string} [name] - The name of the place
 * @property {string} [synopsis] - A short summary
 * @property {string} [description] - A longer description
 * @property {Array<string>} tags - A collection of strings used to label this place
 * @property {PlaceAddress} address - The address of the place
 * @property {Position} position - The position of the place
 * @property {Bounds} [bounds] - The bounding box around the place
 * @property {PlaceHours} [hours] - The operating hours for this place, as encoded in OpenStreetMap hours specification
 * @property {string} [maki] - The maki icon for this place
 * @property {string} [contributor] - Source of the place data
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {Array<(Attribute|null|undefined)>} attrs - Query multiple attributes by id and optionally locale
 * @property {AttributeConnection} allAttrs - Return all attributes on the resource
 * @property {AttributeConnection} attrsById - Query multiple attributes with the same id and optionally locale
 * @property {Array<PlaceAttribution>} attribution - The required attribution required when using this place information
 * @property {PlaceContact} contact - Contact information supplied for this place
 * @property {Array<PlaceLayer>} layers - Layers associated to this place
 * @property {Array<MediaContainer>} media - List of MediaContainers supplied with the place information, such as images of the places
 * @property {MediaContainer} [preferredMedia] - The preferred MediaContainer to use
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {string} navigationUrl - A url displaying how to navigate to this place
 * @property {Array<PlaceTowards>} towards - Calculate distance and bearing information from the specified positions to this place
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
 * @property {string} [text] - Text Attribution required for this place
 * @property {string} [link] - A link required for this place
 * @property {string} [license] - Specific licensing information for this place if known
 * @property {string} [pixel] - The required tracking pixel
 * @property {MediaResource} [mediaResource] - Any media to be used in attribution, such as watermarks
 */

/**
 * Contact information for a Place
 * @typedef {Object} PlaceContact
 * @property {string} [websiteUrl] - Contact website for this place
 * @property {string} [phoneNumber] - Phone number for this place
 * @property {string} [emailAddress] - Email address for this place
 * @property {string} [bookingsUrl] - Bookings url for this place
 * @property {string} [facebookUrl] - Facebook page for this place
 * @property {string} [twitterUrl] - Twitter for this place
 * @property {string} [instagramUrl] - Instagram for this place
 */

/**
 * The opening hours for a place
 * @typedef {Object} PlaceHours
 * @property {string} osmTag - The opening hours formatted in the OpenStreetMap opening_hours tag format.
 * 
 * See: <https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification>
 * @property {boolean} weekStable - Whether or not the hours are the same each week.
 * @property {PlaceHoursStatus} status - Look up the open/closed status of the place for the current time or a given datetime.
 * @property {string} [comment] - Look up the place hours comment (if any) for the current time or a given datetime.
 * @property {PlaceHoursIntervalConnection} intervals - Look up intervals where the opening hours status/comment for the place changes
 * @property {Array<PlaceHoursForDay>} forDays - Look up the opening hours for a specific day. Days are calculated according to the local time of the place.
 * 
 * Will return a maximum of 90 days.
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
 * @property {string} from - The starting datetime of this interval
 * @property {string} [to] - The ending datetime of this interval, will be null if there is no following interval and the status/comment will no longer change
 * @property {PlaceHoursStatus} status - The open/closed status of the place during this interval
 * @property {string} [comment] - The place hours comment (if any) during this interval
 * @property {Array<PlaceHoursIntervalHoliday>} publicHolidays - The holidays that occur during this interval
 * 
 * Note: Will return holidays up to a maximum of one year from the "from" date
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
 * @typedef {("Open"|"Closed"|"Unknown")} PlaceHoursStatus
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
 * @typedef {("Google"|"Apple")} PlaceNavigationUrlProvider
 */

/**
 * Error which occured while resolving a Place ID
 * @typedef {Object} PlaceResolutionError
 * @property {string} message - Human readable error message
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
 * @property {PlaceSearchNode} node - The item
 * @property {TextSearchResult} single - The one line text search result
 * @property {TextSearchResult} main - The main line of the two line search result
 * @property {TextSearchResult} secondary - The secondary line of the two line search result
 */

/**
 * A result from a place search
 * @typedef {Object} PlaceSearchNode
 * @property {string} id - The Globally Unique ID of the place.
 * @property {Position} position - The position of the place
 * @property {string} [title] - Alias for `Place.name`
 * @property {string} [name] - The name of the place
 * @property {string} [synopsis] - A short summary
 * @property {string} [description] - A longer description
 * @property {PlaceAddress} address - The address of the place
 * @property {string} [maki] - The maki icon for this place
 * @property {Array<PlaceLayer>} layers - Layers associated to this place
 * @property {string} [contributor] - Source of the place data
 */

/**
 * Where to search for place information
 * @typedef {("OpenStreetMap"|"Facebook"|"OpenAddresses"|"Geonames"|"Yelp"|"AustralianTourismDataWarehouse"|"Zomato"|"TripAdvisor"|"WhosOnFirst")} PlaceSearchSource
 */

/**
 * Place bearing and distance information towards point
 * @typedef {Object} PlaceTowards
 * @property {Position} position - The point
 * @property {number} bearing - The bearing angle from the place to the point
 * @property {number} distance - The distance from the place to the point
 * @property {CompassPoint} compass - Compass point towards given point
 */

/**
 * A position on a map with a longitude and latitude
 * @typedef {Object} Position
 * @property {Array<number>} lonLat - The position in the form: [longitude, latitude]
 * @property {Array<number>} latLon - The position in the form: [latitude, longitude]
 * @property {number} lat - The position's latitude
 * @property {number} lon - The position's longitude
 * @property {string} id - Identifier for the Position type useful for client-side caching
 * @property {Array<PlaceLayer>} layers - PlaceLayers associated to this position
 * @property {Attribute} [attr] - Arbitrary JSON value stored on this resource, keyed by an id
 * @property {JSON} [attrValue] - Shortcut for the attr.value, returns null if the attribute doesn't exist
 * @property {Array<(Attribute|null|undefined)>} attrs - Query multiple attributes by id and optionally locale
 * @property {AttributeConnection} allAttrs - Return all attributes on the resource
 * @property {AttributeConnection} attrsById - Query multiple attributes with the same id and optionally locale
 */

/**
 * A position on a map with a longitude and latitude
 * @typedef {Object} PositionInput
 * @property {number} lon - The longitude
 * @property {number} lat - The latitude
 */

/**
 * Profile
 * @typedef {Object} Profile
 * @property {string} id - The Globally Unique ID of the object.
 * @property {string} name - The name of the profile
 * @property {ProfileType} type - The type of the profile
 * @property {boolean} autoApproveFollows - Indicates if follows on this profile are automatically approved
 * @property {string} [handle] - The (optional) unique handle of the profile
 * @property {string} [bio] - A short biography
 * @property {string} [websiteUrl] - The Website URL
 * @property {ProfileFollowConnection} followers - Profiles that follow this profile
 * @property {ProfileFollowConnection} following - Profiles that this profile follows
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
 * @typedef {("Pending"|"Approved"|"Denied")} ProfileFollowStatus
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
 * @property {Node} [node] - Get a resource that implements Node by id
 * @property {Collection} [collection] - Retrieve a collection by id
 * @property {CollectionConnection} collections - Retrieve multiple collections
 * @property {CollectionItem} [collectionItem] - Retrieve a collection item by id
 * @property {CollectionItemConnection} collectionItems - Retrieve multiple collection items filtered by different criteria
 * @property {ConnectedApp} [connectedApp] - Obtains a connected app by a provided id
 * @property {ConnectedAppConnection} connectedApps - Search connected apps
 * @property {Array<Isochrone>} isochrone - Query for fetching isochrone
 * @property {Itinerary} [itinerary] - Get an itinerary by id
 * @property {ItineraryConnection} itineraries - Query itineraries that belong to a profile
 * @property {RouteConnection} routes - Look up routes for traveling along the given positions
 * @property {MediaResource} [mediaResource] - Retrieve a MediaResource by id
 * @property {Place} [place] - Get a place by id
 * @property {PlaceSearchConnection} placeSearch - Search for places
 * @property {PlaceSearchConnection} placeAutocompleteSearch - Autocomplete for place search
 * @property {PlaceSearchConnection} placeAddressSearch - Search for places based on address details
 * @property {PlaceSearchConnection} placeReverseSearch - Search for places by location
 * @property {Profile} [profile] - Obtains a profile by a provided id
 * @property {ProfileConnection} authorizedProfiles - Look up all authorised profiles
 * @property {ProfileConnection} profiles - Search profiles
 */

/**
 * The representation of a route path taken
 * @typedef {Object} Route
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
 * @typedef {("Bike"|"Boat"|"Bus"|"Car"|"Cruise"|"DogSled"|"Foot"|"Hike"|"Kayak"|"Motorcycle"|"MountainBike"|"Plane"|"Train"|"Transit")} RouteMode
 */

/**
 * Subset of RouteModes supporting route search
 * @typedef {("Bike"|"Bus"|"Car"|"Foot"|"Hike"|"Motorcycle"|"MountainBike"|"Transit")} RouteSearchableMode
 */

/**
 * One segment of a Route
 * @typedef {Object} RouteSegment
 * @property {string} id - WARNING: this ID is unstable, modifying the route might change the ID
 * @property {RouteMode} mode - The mode of transport to be taken. eg: car, walk, kayak, etc
 * @property {Array<Position>} [positions] - The way positions along this route
 * @property {boolean} useRouteSearching - Whether this route was searched for
 * @property {JSON} [geoJson] - The representation of this path as encoded as geojson FeatureCollection type
 * @property {number} [duration] - The estimated duration for this path
 * @property {number} [distance] - The estimated distance for this path
 * @property {Elevation} elevation - The estimated elevation details of this route
 * @property {string} [polyline] - The path representation as encoded as a polyline format
 */

/**
 * Create a RouteSegment
 * @typedef {Object} RouteSegmentInput
 * @property {RouteMode} [mode] - The mode of transport to be taken on this segment, defaults to Car
 * @property {Array<PositionInput>} [positions] - The way positions along this route
 * @property {boolean} [useRouteSearching] - Whether to plan out a route using the positions. Defaults to true if the mode is searchable and otherwise will be set to false
 * @property {number} [distance] - The distance for this route segment
 * @property {number} [duration] - The duration for this route segment
 */

/**
 * Determines which order a specific field will be ordered in
 * @typedef {("Asc"|"Desc")} SortDirection
 */

/**
 * Result of starting a media upload
 * @typedef {Object} StartMediaUploadPayload
 * @property {string} token - The upload token, required when finalising the upload
 * @property {string} url - The url to upload media to (via HTTP POST)
 * @property {JSON} fields - Data to pass with the upload
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
 * @property {number} offset - Start of the match
 * @property {number} length - Length of the match
 */

/**
 * Result of unfollowing a profile
 * @typedef {Object} UnfollowProfilePayload
 * @property {Profile} fromProfile - The follower profile
 * @property {Profile} toProfile - The profile being followed
 * @property {ProfileFollowStatus} [status] - The status of the follow request
 */

/**
 * Updates a collection
 * @typedef {Object} UpdateCollectionInput
 * @property {string} [title] - The title for the collection
 * @property {string} [synopsis] - The synopsis for the collection
 * @property {string} [description] - The description for the collection
 * @property {Array<string>} [tags] - The tags for the collection
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {Array<AttributeInput>} [upsertAttrs] - Insert or update attributes to the collection
 * @property {Array<AttributeIdentifierInput>} [deleteAttrs] - Delete attributes to the collection
 * @property {Array<CreateMediaContainerInput>} [createMedia] - Add multiple Media with MediaResources
 * @property {Array<MoveMediaContainerInput>} [moveMedia] - Move one or move MediaContainers
 * @property {Array<UpdateMediaContainerInput>} [updateMedia] - Update one or move MediaContainers
 * @property {Array<string>} [deleteMedia] - Delete one or move MediaContainers
 */

/**
 * The fields for the collection location to update
 * @typedef {Object} UpdateCollectionLocationInput
 * @property {string} [title] - Title for this item
 * @property {string} [synopsis] - A longer description content for this item
 * @property {string} [description] - A longer description content for this item
 * @property {Array<string>} [tags] - A collection of strings used to label this item
 * @property {string} [readMoreUrl] - Shortcut for setting the read-more attribute
 * @property {string} [websiteUrl] - Shortcut for setting the website-url attribute
 * @property {Array<string>} [sectionIds] - One or more sections for this item
 * @property {string} [externalId] - Identifier from an external source this item is associated with
 * @property {string} [externalSource] - The source of this item's externalId
 * @property {PlaceInput} [place] - The associated place information for this item
 * @property {PositionInput} [position] - Override for the place's position
 * @property {Array<AttributeInput>} [upsertAttrs] - Insert or update attributes to the collection
 * @property {Array<AttributeIdentifierInput>} [deleteAttrs] - Delete attributes to the collection
 * @property {Array<CreateMediaContainerInput>} [createMedia] - Add multiple Media with MediaResources
 * @property {Array<MoveMediaContainerInput>} [moveMedia] - Move one or move MediaContainers
 * @property {Array<UpdateMediaContainerInput>} [updateMedia] - Update one or move MediaContainers
 * @property {Array<string>} [deleteMedia] - Delete one or move MediaContainers
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
 * @property {ConnectedAppAuthTypes} [authType] - The type of the connected-app
 * @property {string} [scope] - Any specific scope that has been granted to the 3rd party application
 * @property {string} [thirdPartyId] - 3rd party ID or account ID
 * @property {string} [configuration] - Encrypted JSON
 */

/**
 * The available fields after updating a connected app
 * @typedef {Object} UpdateConnectedAppPayload
 * @property {ConnectedApp} [connectedApp] - The updated connected app
 */

/**
 * The intinerary collection fields to update
 * @typedef {Object} UpdateItineraryCollectionInput
 * @property {string} [title] - The title for the itinerary-collection
 * @property {string} [synopsis] - The synopsis for the itinerary-collection
 * @property {string} [description] - The description for the itinerary-collection
 * @property {Array<string>} [tags] - The tags for the itinerary-collection
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {Array<AttributeInput>} [upsertAttrs] - Insert or update attributes to the itinerary-collection
 * @property {Array<AttributeIdentifierInput>} [deleteAttrs] - Delete attributes to the itinerary-collection
 * @property {Array<CreateMediaContainerInput>} [createMedia] - Add multiple Media with MediaResources
 * @property {Array<MoveMediaContainerInput>} [moveMedia] - Move one or move MediaContainers
 * @property {Array<UpdateMediaContainerInput>} [updateMedia] - Update one or move MediaContainers
 * @property {Array<string>} [deleteMedia] - Delete one or move MediaContainers
 */

/**
 * The fields available after updating the itinerary collection
 * @typedef {Object} UpdateItineraryCollectionPayload
 * @property {ItineraryCollection} [collection] - The itinerary collection that was created
 * @property {Itinerary} itinerary - The modified itinerary
 * @property {ItineraryItemCascadedChanges} cascaded - Other changes to the itinerary that caused by deleting the itinerary-item
 */

/**
 * The input fields to update the itinerary directions
 * @typedef {Object} UpdateItineraryDirectionsInput
 * @property {string} [title] - The title for the itinerary directions
 * @property {string} [synopsis] - The synopsis for the itinerary-directions
 * @property {string} [description] - The description for the itinerary-directions
 * @property {Array<string>} [tags] - The tags for the itinerary-directions
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {Array<AttributeInput>} [upsertAttrs] - Insert or update attributes to the collection
 * @property {Array<AttributeIdentifierInput>} [deleteAttrs] - Delete attributes to the collection
 * @property {Array<CreateMediaContainerInput>} [createMedia] - Add multiple Media with MediaResources
 * @property {Array<MoveMediaContainerInput>} [moveMedia] - Move one or move MediaContainers
 * @property {Array<UpdateMediaContainerInput>} [updateMedia] - Update one or move MediaContainers
 * @property {Array<string>} [deleteMedia] - Delete one or move MediaContainers
 * @property {string} [originId] - The origin/starting itinerary location item, in the form of item/XYZ
 * @property {RouteInput} [route] - The route of this item, must include at least one route segment
 * @property {number} [distance] - The distance of the itinerary-directions
 * @property {Array<ItineraryDirectionsDurationsInput>} [durations] - The duration details of the new itinerary-directions
 * @property {ElevationInput} [elevation] - The elevation details of the new itinerary-directions
 */

/**
 * The fields available after updating the itinerary directions item
 * @typedef {Object} UpdateItineraryDirectionsPayload
 * @property {ItineraryDirections} [directions] - The updated itinerary directions item
 * @property {Itinerary} itinerary - The modified itinerary
 * @property {ItineraryItemCascadedChanges} cascaded - Other changes to the itinerary that caused by deleting the itinerary-item
 */

/**
 * Updates a itinerary
 * @typedef {Object} UpdateItineraryInput
 * @property {string} [title] - The title for the itinerary
 * @property {string} [synopsis] - The synopsis for the itinerary
 * @property {string} [description] - The description for the itinerary
 * @property {Array<string>} [tags] - The tags for the itinerary
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {Array<AttributeInput>} [upsertAttrs] - Insert or update attributes to the collection
 * @property {Array<AttributeIdentifierInput>} [deleteAttrs] - Delete attributes to the collection
 * @property {Array<CreateMediaContainerInput>} [createMedia] - Add multiple Media with MediaResources
 * @property {Array<MoveMediaContainerInput>} [moveMedia] - Move one or move MediaContainers
 * @property {Array<UpdateMediaContainerInput>} [updateMedia] - Update one or move MediaContainers
 * @property {Array<string>} [deleteMedia] - Delete one or move MediaContainers
 * @property {ItineraryAutoRouteInput} [autoRoute] - Enable auto routing, or set to null to disable
 * @property {ElevationInput} [elevation] - Elevation data of the new itinerary
 */

/**
 * The fields to update on an itinerary location
 * @typedef {Object} UpdateItineraryLocationInput
 * @property {string} [title] - The title for the itinerary-location
 * @property {string} [synopsis] - The synopsis for the itinerary-location
 * @property {string} [description] - The description for the itinerary-location
 * @property {Array<string>} [tags] - The tags for the itinerary-location
 * @property {string} [readMoreUrl] - Alias for the read-more attribute
 * @property {string} [websiteUrl] - Alias for the website-url attribute
 * @property {Array<AttributeInput>} [upsertAttrs] - Insert or update attributes to the itinerary-collection
 * @property {Array<AttributeIdentifierInput>} [deleteAttrs] - Delete attributes to the itinerary-collection
 * @property {Array<CreateMediaContainerInput>} [createMedia] - Add multiple Media with MediaResources
 * @property {Array<MoveMediaContainerInput>} [moveMedia] - Move one or move MediaContainers
 * @property {Array<UpdateMediaContainerInput>} [updateMedia] - Update one or move MediaContainers
 * @property {Array<string>} [deleteMedia] - Delete one or move MediaContainers
 * @property {PositionInput} [position] - The place for this itinerary-location
 * @property {PlaceInput} [place] - The place for this itinerary-location
 * @property {boolean} [optional] - Whether the location specified is optional on the itinerary
 */

/**
 * The fields available after updating a location
 * @typedef {Object} UpdateItineraryLocationPayload
 * @property {ItineraryLocation} [location] - The updated itinerary location
 * @property {Itinerary} itinerary - The modified itinerary
 * @property {ItineraryItemCascadedChanges} cascaded - Other changes to the itinerary that caused by deleting the itinerary-item
 */

/**
 * The available fields after updating a itinerary
 * @typedef {Object} UpdateItineraryPayload
 * @property {Itinerary} [itinerary] - The updated itinerary
 * @property {ItineraryItemCascadedChanges} cascaded - Other changes to the itinerary that caused by updating the itinerary
 */

/**
 * Update a MediaContainer
 * @typedef {Object} UpdateMediaContainerInput
 * @property {string} id - ID to the MediaContainer to update
 * @property {string} [resourceId] - ID to a MediaResource
 */

/**
 * Updates a media resource
 * @typedef {Object} UpdateMediaResourceInput
 * @property {Array<string>} [tags] - List of labels to apply to the media-resource
 * @property {string} [attribution] - Text attribution for the source of the media-resource
 * @property {string} [caption] - Text caption for the media-resource
 * @property {string} [copyright] - Copyright details of the media-resource
 * @property {Array<AttributeInput>} [upsertAttrs] - Insert or update attributes to the media-resource
 * @property {Array<AttributeIdentifierInput>} [deleteAttrs] - Delete attributes to the media-resource
 */

/**
 * Response payload to Mutation.updateMediaResource
 * @typedef {Object} UpdateMediaResourcePayload
 * @property {MediaResource} resource - The updated media-resource
 */

/**
 * Input object to Mutation.updateProfile
 * @typedef {Object} UpdateProfileInput
 * @property {string} [name] - The name of the profile
 * @property {string} [bio] - A short biography
 * @property {string} [websiteUrl] - The website url
 * @property {boolean} [autoApproveFollows] - If follow requests should be automatically approved for this profile
 */

/**
 * Response payload to Mutation.updateProfile
 * @typedef {Object} UpdateProfilePayload
 * @property {Profile} [profile] - The updated profile
 */
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
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
  /** The profile being followed */
  toProfile: Profile;
  /** The status of the follow request */
  status?: Maybe<ProfileFollowStatus>;
};

/** Additional data defined on a resource */
export type Attribute = {
  __typename?: 'Attribute';
  /**
   * The attribute identifier
   *
   * Has the form "{{resource_type}}/{{attribute_name}}"
   * eg: The "title" attribute on an item will have the id: "item/title"
   *
   * Custom attributes have the form "custom/{{attribute_name}}"
   */
  id: Scalars['ID'];
  /** The attribute value, can be any JSON-serialisable type */
  value?: Maybe<Scalars['JSON']>;
  /** Optional attribute metadata, can be any JSON-serialisable type */
  meta?: Maybe<Scalars['JSON']>;
  /** Optional string representing the locale of the attribute value */
  locale?: Maybe<Scalars['String']>;
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
  locale?: Maybe<Scalars['String']>;
};

/** Defines an attribute */
export type AttributeInput = {
  /** The attribute identifier */
  id: Scalars['ID'];
  /** The attribute value, can be any JSON-serialisable type */
  value: Scalars['JSON'];
  /** Optional attribute metadata, can be any JSON-serialisable type */
  meta?: Maybe<Scalars['JSON']>;
  /** Optional string representing the locale of the attribute value */
  locale?: Maybe<Scalars['String']>;
};

/** A bounding box on a map defined by two positions (opposite corners of the box) */
export type Bounds = {
  __typename?: 'Bounds';
  /** The west-most longitude of the bounding box */
  w: Scalars['Float'];
  /** The south-most latitude of the bounding box */
  s: Scalars['Float'];
  /** The east-most longitude of the bounding box */
  e: Scalars['Float'];
  /** The north-most latitude of the bounding box */
  n: Scalars['Float'];
  /** The south-west point of the bounding box in the form: [west, south] */
  ws: Array<Scalars['Float']>;
  /** The north-east point of the bounding box in the form: [east, north] */
  en: Array<Scalars['Float']>;
  /** The south-west and north-east points of the bounding box in the form: [west, south, east, north] */
  wsen: Array<Scalars['Float']>;
  /** The minimum and maximum points of the bounding box in the form: [minimum, maximum] */
  minMax: Array<Array<Scalars['Float']>>;
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
  /** The north-most latitude of the bounding box */
  n: Scalars['Float'];
  /** The east-most longitude of the bounding box */
  e: Scalars['Float'];
  /** The south-most latitude of the bounding box */
  s: Scalars['Float'];
  /** The west-most longitude of the bounding box */
  w: Scalars['Float'];
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
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
  /** Profile that owns this collection */
  profile: Profile;
  /** The date when the collection was created */
  created?: Maybe<Scalars['String']>;
  /** The date when the collection was last modified */
  modified?: Maybe<Scalars['String']>;
  /** A supplied title for this collection */
  title?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** List of MediaContainers containing images or other media */
  media: Array<MediaContainer>;
  /** A single MediaContainer representing the preferred media to use */
  preferredMedia?: Maybe<MediaContainer>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
  /** A label used to differentiate types of collections */
  discriminator: Scalars['String'];
  /** Returns an item belonging to this collection by id */
  item?: Maybe<CollectionItem>;
  /** Retrieve multiple collection-items belonging to this collection */
  items: CollectionItemConnection;
};


/** A collection type is used to group together a unordered set of items */
export type CollectionCreatedArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** A collection type is used to group together a unordered set of items */
export type CollectionModifiedArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** A collection type is used to group together a unordered set of items */
export type CollectionMediaArgs = {
  limit?: Scalars['Int'];
};


/** A collection type is used to group together a unordered set of items */
export type CollectionAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A collection type is used to group together a unordered set of items */
export type CollectionAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A collection type is used to group together a unordered set of items */
export type CollectionAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** A collection type is used to group together a unordered set of items */
export type CollectionAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


/** A collection type is used to group together a unordered set of items */
export type CollectionAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A collection type is used to group together a unordered set of items */
export type CollectionItemArgs = {
  id: Scalars['ID'];
};


/** A collection type is used to group together a unordered set of items */
export type CollectionItemsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  keyword?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  sectionIds?: Maybe<Array<Scalars['ID']>>;
  resourceIds?: Maybe<Array<Scalars['ID']>>;
  boundsCircle?: Maybe<BoundsCircleInput>;
  bounds?: Maybe<BoundsInput>;
  externalIds?: Maybe<Array<Scalars['ID']>>;
  externalSources?: Maybe<Array<Scalars['ID']>>;
  sort?: Maybe<Array<CollectionItemsSort>>;
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
  /** The unique identifier, taking the shape of item/XYZ */
  id: Scalars['ID'];
  /** The associated profile owner */
  profile: Profile;
  /** The date when the collection-item was created */
  created?: Maybe<Scalars['String']>;
  /** The date when the collection-item was last modified */
  modified?: Maybe<Scalars['String']>;
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** List of MediaContainers containing images or other media */
  media: Array<MediaContainer>;
  /** The preferred MediaContainer to use */
  preferredMedia?: Maybe<MediaContainer>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** One or more sections this item belongs to */
  sectionIds: Array<Scalars['ID']>;
  /** Identifier from an external source this item is associated with */
  externalId?: Maybe<Scalars['ID']>;
  /** The source of the item's externalId */
  externalSource?: Maybe<Scalars['ID']>;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemCreatedArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemModifiedArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemMediaArgs = {
  limit?: Scalars['Int'];
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
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

/** Determine how to sort CollectionItems when listing */
export type CollectionItemsSort = {
  /** Sort by the created date */
  created?: Maybe<SortDirection>;
  /** Sort by the modified date */
  modified?: Maybe<SortDirection>;
  /** Sort by the collection-item title */
  title?: Maybe<SortDirection>;
};

/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocation = Node & CollectionItem & {
  __typename?: 'CollectionLocation';
  /** The unique identifier, taking the shape of item/XYZ */
  id: Scalars['ID'];
  /** The associated profile owner */
  profile: Profile;
  /** The date when the collection-item was created */
  created?: Maybe<Scalars['String']>;
  /** The date when the collection-item was last modified */
  modified?: Maybe<Scalars['String']>;
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** List of MediaContainers containing images or other media */
  media: Array<MediaContainer>;
  /** The preferred MediaContainer to use */
  preferredMedia?: Maybe<MediaContainer>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** One or more sections this item belongs to */
  sectionIds: Array<Scalars['ID']>;
  /** Identifier from an external source this item is associated with */
  externalId?: Maybe<Scalars['ID']>;
  /** The source of the item's externalId */
  externalSource?: Maybe<Scalars['ID']>;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
  /** The associated place information for this location */
  place: Place;
  /** The position of the collection-location (derived from place if not overridden) */
  position: Position;
  /** The bounding box around the collection-location (derived from place if not overridden) */
  bounds?: Maybe<Bounds>;
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationCreatedArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationModifiedArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationMediaArgs = {
  limit?: Scalars['Int'];
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};

/** Determine how to sort Collections when listing */
export type CollectionsSort = {
  /** Sort by the created date */
  created?: Maybe<SortDirection>;
  /** Sort by the modified date */
  modified?: Maybe<SortDirection>;
  /** Sort by the collection title */
  title?: Maybe<SortDirection>;
};

/** Points on the compass rose */
export enum CompassPoint {
  N = 'N',
  Ne = 'NE',
  E = 'E',
  Se = 'SE',
  S = 'S',
  Sw = 'SW',
  W = 'W',
  Nw = 'NW'
}

/** Connected apps stored in the profile */
export type ConnectedApp = Node & {
  __typename?: 'ConnectedApp';
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
  /** The profile associated with this connected app */
  profile?: Maybe<Profile>;
  /** A key to describe the type of connection to the application */
  type?: Maybe<ConnectedAppTypes>;
  /** This is the key relating to the service, such as "atdw" or "crowdriff-api" - it identifies the "App" we are connecting to */
  serviceKey: ConnectedAppServiceKeys;
  /** Depending on the authentication method, this can highlight the authenticated application method (e.g. OAuth) */
  authType?: Maybe<ConnectedAppAuthTypes>;
  /** Any specific scope that has been granted to the 3rd party application */
  scope?: Maybe<Scalars['String']>;
  /** Encrypted JSON */
  configuration?: Maybe<Scalars['JSON']>;
  /** A 3rd party ID or Account ID, this does not affect any of the Alpaca ID naming - for instance, if we are connecting to an Identity in OAUTH, this is the OAUTH Identity ID - This is just a place to store data */
  thirdPartyId?: Maybe<Scalars['ID']>;
};

/** Possible auth types for a ConnectedApp */
export enum ConnectedAppAuthTypes {
  Tokens = 'Tokens',
  Oauth = 'Oauth',
  Credentials = 'Credentials'
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
export enum ConnectedAppServiceKeys {
  Atdw = 'Atdw',
  CrowdriffApi = 'CrowdriffApi',
  ShopifyApi = 'ShopifyApi'
}

/** Possible types of ConnectedApp */
export enum ConnectedAppTypes {
  Configuration = 'Configuration',
  Credentials = 'Credentials',
  Api = 'Api'
}

/** Creates a collection */
export type CreateCollectionInput = {
  /** A label used to differentiate types of collections */
  discriminator?: CollectionDiscriminator;
  /** Title of the collection */
  title?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** A series of strings applied to label the collection */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Additional data defined on the collection */
  attrs?: Maybe<Array<AttributeInput>>;
  /** The list of MediaContainers to add to the new Collection */
  media?: Maybe<Array<CreateMediaContainerInput>>;
};

/** The input to create a collection location */
export type CreateCollectionLocationInput = {
  /** Title for the new item */
  title?: Maybe<Scalars['String']>;
  /** A short summary text content for the new item */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer description content for the new item */
  description?: Maybe<Scalars['String']>;
  /** A collection of strings used to label the new item */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** One or more sections for this new item */
  sectionIds?: Maybe<Array<Scalars['ID']>>;
  /** Identifier from an external source this new item is associated with */
  externalId?: Maybe<Scalars['ID']>;
  /** The source of this item's externalId */
  externalSource?: Maybe<Scalars['ID']>;
  /** Additional data defined on this CollectionLocation */
  attrs?: Maybe<Array<AttributeInput>>;
  /** The list of MediaContainers to add to the new CollectionLocation */
  media?: Maybe<Array<CreateMediaContainerInput>>;
  /** The associated place record for this location */
  place: PlaceInput;
  /** Override for the place's position */
  position?: Maybe<PositionInput>;
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
  /** The type of the connected-app */
  type?: Maybe<ConnectedAppTypes>;
  /** Identifies the service being connected to */
  serviceKey: ConnectedAppServiceKeys;
  /** Any specific scope that has been granted to the 3rd party application */
  scope?: Maybe<Scalars['String']>;
  /** The authenticated application method */
  authType?: Maybe<ConnectedAppAuthTypes>;
  /** Encrypted JSON */
  configuration?: Maybe<Scalars['JSON']>;
  /** 3rd party ID or account ID */
  thirdPartyId?: Maybe<Scalars['ID']>;
};

/** The return fields available after creating a connected app */
export type CreateConnectedAppPayload = {
  __typename?: 'CreateConnectedAppPayload';
  /** The newly created connected-app */
  connectedApp?: Maybe<ConnectedApp>;
};

/** Creates an itinerary item collection type */
export type CreateItineraryCollectionInput = {
  /** The title for the new itinerary-collection */
  title?: Maybe<Scalars['String']>;
  /** The synopsis for the new itinerary-collection */
  synopsis?: Maybe<Scalars['String']>;
  /** The description for the new itinerary-collection */
  description?: Maybe<Scalars['String']>;
  /** The tags for the new itinerary-collection */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Additional data defined on the collection */
  attrs?: Maybe<Array<AttributeInput>>;
  /** The list of MediaContainers to add to the new ItineraryCollection */
  media?: Maybe<Array<CreateMediaContainerInput>>;
  /** Creates the item positioned before all its siblings */
  positionAtStart?: Maybe<ItineraryItemPositionAtStart>;
  /** Creates the item positioned after all its siblings */
  positionAtEnd?: Maybe<ItineraryItemPositionAtEnd>;
  /** Create the item positioned after the given sibling */
  positionAfterSibling?: Maybe<ItineraryItemPositionAfterSibling>;
  /** Create the item positioned before the given sibling */
  positionBeforeSibling?: Maybe<ItineraryItemPositionBeforeSibling>;
  /** Create the item at last position of the last itinerary-collection item */
  positionOnLastCollection?: Maybe<ItineraryItemPositionOnLastCollection>;
};

/** The fields available after creating an itinerary collection */
export type CreateItineraryCollectionPayload = {
  __typename?: 'CreateItineraryCollectionPayload';
  /** The created itinerary collection */
  collection?: Maybe<ItineraryCollection>;
  /** The modified itinerary */
  itinerary: Itinerary;
  /** Other changes to the itinerary caused by the creation of the itinerary-collection */
  cascaded: ItineraryItemCascadedChanges;
};

/** The input fields to creating new itinerary directions items */
export type CreateItineraryDirectionsInput = {
  /** The title for the new itinerary-directions */
  title?: Maybe<Scalars['String']>;
  /** The synopsis for the new itinerary-directions */
  synopsis?: Maybe<Scalars['String']>;
  /** The description for the new itinerary-directions */
  description?: Maybe<Scalars['String']>;
  /** The tags for the new itinerary-directions */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Additional data on the new itinerary */
  attrs?: Maybe<Array<AttributeInput>>;
  /** The list of MediaContainers to add to the new ItineraryDirections */
  media?: Maybe<Array<CreateMediaContainerInput>>;
  /** The origin itinerary location item, in the form of item/XYZ */
  originId?: Maybe<Scalars['ID']>;
  /** The route of this item, must include at least one route segment */
  route: RouteInput;
  /** The duration details of the new itinerary-directions */
  durations?: Maybe<Array<ItineraryDirectionsDurationsInput>>;
  /** The distance of the new itinerary-directions */
  distance?: Maybe<Scalars['Float']>;
  /** The elevation details of the new itinerary-directions */
  elevation?: Maybe<ElevationInput>;
  /** Creates the itinerary-directions to be before all its siblings */
  positionAtStart?: Maybe<ItineraryItemPositionAtStart>;
  /** Creates the itinerary-directions to be after all its siblings */
  positionAtEnd?: Maybe<ItineraryItemPositionAtEnd>;
  /** Creates the itinerary-directions after the given sibling */
  positionAfterSibling?: Maybe<ItineraryItemPositionAfterSibling>;
  /** Creates the itinerary-directions before the given sibling */
  positionBeforeSibling?: Maybe<ItineraryItemPositionBeforeSibling>;
  /** Creates the itinerary-directions at the last position of the last itinerary-collection item */
  positionOnLastCollection?: Maybe<ItineraryItemPositionOnLastCollection>;
};

/** The itinerary directions return fields available after creating the itinerary directions */
export type CreateItineraryDirectionsPayload = {
  __typename?: 'CreateItineraryDirectionsPayload';
  /** The created itinerary directions item */
  directions?: Maybe<ItineraryDirections>;
  /** The modified itinerary */
  itinerary: Itinerary;
  /** Other changes to the itinerary caused by the creation of the itinerary-directions */
  cascaded: ItineraryItemCascadedChanges;
};

/** Creates a itinerary */
export type CreateItineraryInput = {
  /** The title for the new itinerary */
  title?: Maybe<Scalars['String']>;
  /** The synopsis for the new itinerary */
  synopsis?: Maybe<Scalars['String']>;
  /** The description for the new itinerary */
  description?: Maybe<Scalars['String']>;
  /** The tags for the new itinerary */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Additional data on the new itinerary */
  attrs?: Maybe<Array<AttributeInput>>;
  /** Enable auto routing, or set to null to disable */
  autoRoute?: Maybe<ItineraryAutoRouteInput>;
  /** Elevation data of the new itinerary */
  elevation?: Maybe<ElevationInput>;
  /** The list of MediaContainers to add to the new Itinerary */
  media?: Maybe<Array<CreateMediaContainerInput>>;
};

/** The fields to create an itinerary location */
export type CreateItineraryLocationInput = {
  /** The title for the new itinerary-location */
  title?: Maybe<Scalars['String']>;
  /** The synopsis for the new itinerary-location */
  synopsis?: Maybe<Scalars['String']>;
  /** The description for the new itinerary-location */
  description?: Maybe<Scalars['String']>;
  /** The tags for the new itinerary-location */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Additional data defined on the collection */
  attrs?: Maybe<Array<AttributeInput>>;
  /** The list of MediaContainers to add to the new ItineraryLocation */
  media?: Maybe<Array<CreateMediaContainerInput>>;
  /** The position of the itinerary-location */
  position?: Maybe<PositionInput>;
  /** The place for this new itinerary-location */
  place: PlaceInput;
  /** Whether this is an optional location on the itinerary */
  optional?: Maybe<Scalars['Boolean']>;
  /** Creates the item positioned before all its siblings */
  positionAtStart?: Maybe<ItineraryItemPositionAtStart>;
  /** Creates the item positioned after all its siblings */
  positionAtEnd?: Maybe<ItineraryItemPositionAtEnd>;
  /** Create the item positioned after the given sibling */
  positionAfterSibling?: Maybe<ItineraryItemPositionAfterSibling>;
  /** Create the item positioned before the given sibling */
  positionBeforeSibling?: Maybe<ItineraryItemPositionBeforeSibling>;
  /** Create the item at last position of the last itinerary-collection item */
  positionOnLastCollection?: Maybe<ItineraryItemPositionOnLastCollection>;
};

/** The fields available after creating an itinerary location */
export type CreateItineraryLocationPayload = {
  __typename?: 'CreateItineraryLocationPayload';
  /** The itinerary location that was created */
  location?: Maybe<ItineraryLocation>;
  /** The modified itinerary */
  itinerary: Itinerary;
  /** Other changes to the itinerary caused by the creation of the itinerary-location */
  cascaded: ItineraryItemCascadedChanges;
};

/** The fields available after creating an itinerary */
export type CreateItineraryPayload = {
  __typename?: 'CreateItineraryPayload';
  /** The newly created itinerary */
  itinerary?: Maybe<Itinerary>;
};

/** Create a MediaContainer */
export type CreateMediaContainerInput = {
  /** ID to a MediaResource to contain */
  resourceId: Scalars['String'];
  /** Add the MediaContainer before another container in the list */
  positionBefore?: Maybe<MediaContainerPositionBefore>;
  /** Add the MediaContainer after another container in the list */
  positionAfter?: Maybe<MediaContainerPositionAfter>;
  /** Add the MediaContainer at the start of the list */
  positionAtStart?: Maybe<MediaContainerPositionAtStart>;
  /** Add the MediaContainer at the end of the list */
  positionAtEnd?: Maybe<MediaContainerPositionAtEnd>;
};

/** An offset in date and/or time represented as integer differences for each datetime field */
export type DatetimeOffset = {
  /** Positive or negative difference for years */
  years?: Maybe<Scalars['Int']>;
  /** Positive or negative difference for months */
  months?: Maybe<Scalars['Int']>;
  /** Positive or negative difference for weeks */
  weeks?: Maybe<Scalars['Int']>;
  /** Positive or negative difference for days */
  days?: Maybe<Scalars['Int']>;
  /** Positive or negative difference for hours */
  hours?: Maybe<Scalars['Int']>;
  /** Positive or negative difference for minutes */
  minutes?: Maybe<Scalars['Int']>;
  /** Positive or negative difference for seconds */
  seconds?: Maybe<Scalars['Int']>;
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

/** Deletes a itinerary item */
export type DeleteItineraryItemPayload = {
  __typename?: 'DeleteItineraryItemPayload';
  /** The itinerary item identifier, in the form of item/XYZ */
  id?: Maybe<Scalars['ID']>;
  /** The modified itinerary */
  itinerary: Itinerary;
  /** Other changes to the itinerary that caused by deleting the itinerary-item */
  cascaded: ItineraryItemCascadedChanges;
};

/** The result of deleting an itinerary */
export type DeleteItineraryPayload = {
  __typename?: 'DeleteItineraryPayload';
  /** The ID of the deleted itinerary */
  id?: Maybe<Scalars['ID']>;
};

/** Result of denying a follow request */
export type DenyProfileFollowPayload = {
  __typename?: 'DenyProfileFollowPayload';
  /** The follower profile */
  fromProfile: Profile;
  /** The profile being followed */
  toProfile: Profile;
  /** The status of the follow request */
  status?: Maybe<ProfileFollowStatus>;
};

/** Distance unit */
export enum DistanceUnit {
  Kilometers = 'Kilometers',
  Feet = 'Feet',
  Miles = 'Miles',
  Meters = 'Meters'
}

/** Duration unit */
export enum DurationUnit {
  Seconds = 'Seconds',
  Minutes = 'Minutes',
  Hours = 'Hours'
}

/** Elevation data */
export type Elevation = {
  __typename?: 'Elevation';
  /** The cumulative elevation gain */
  gain?: Maybe<Scalars['Float']>;
  /** The cumulative elevation loss */
  loss?: Maybe<Scalars['Float']>;
  /** The minimum elevation */
  min?: Maybe<Scalars['Float']>;
  /** The maximum elevation */
  max?: Maybe<Scalars['Float']>;
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
export type ElevationMinArgs = {
  unit?: DistanceUnit;
};


/** Elevation data */
export type ElevationMaxArgs = {
  unit?: DistanceUnit;
};

/** Input elevation data */
export type ElevationInput = {
  /** The cumulative elevation gain */
  gain?: Maybe<Scalars['Float']>;
  /** The cumulative elevation loss */
  loss?: Maybe<Scalars['Float']>;
  /** The minimum elevation */
  min?: Maybe<Scalars['Float']>;
  /** The maximum elevation */
  max?: Maybe<Scalars['Float']>;
};

/** Uploads a media resource */
export type FinalizeMediaUploadInput = {
  /** List of labels to apply to the new media-resource */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Text attribution for the source of the new media-resource */
  attribution?: Maybe<Scalars['String']>;
  /** Text caption for the new media-resource */
  caption?: Maybe<Scalars['String']>;
  /** Copyright details of the new media-resource */
  copyright?: Maybe<Scalars['String']>;
  /** Additional data to define on the new media-resource */
  attrs?: Maybe<Array<AttributeInput>>;
};

/** Result of finalizing a media upload */
export type FinalizeMediaUploadPayload = {
  __typename?: 'FinalizeMediaUploadPayload';
  /** The status of this media upload */
  status: MediaUploadStatus;
  /** The newly created media-resource */
  resource?: Maybe<MediaResource>;
};

/** Result of creating a follow request */
export type FollowProfilePayload = {
  __typename?: 'FollowProfilePayload';
  /** The follower profile */
  fromProfile: Profile;
  /** The profile being followed */
  toProfile: Profile;
  /** The status of the follow request */
  status?: Maybe<ProfileFollowStatus>;
};

/** Different GeoJSON simplification algorithms */
export type GeoJsonSimplification = {
  /** The Ramer-Douglas-Peucker algorithm */
  ramerDouglasPeucker: GeoJsonSimplificationRamerDouglasPeucker;
};

/** The Ramer-Douglas-Peucker algorithm */
export type GeoJsonSimplificationRamerDouglasPeucker = {
  /** The amount of application applied, higher values result in more simplification */
  tolerance?: Maybe<Scalars['Float']>;
  /** Modify the algorithm to be slower by produce higher quality results */
  highQuality?: Maybe<Scalars['Boolean']>;
};

/** Isochrone for the given position with duration and vehicle */
export type Isochrone = {
  __typename?: 'Isochrone';
  /** The duration of the isochrone */
  duration?: Maybe<Scalars['Float']>;
  /** Copyright details of the isochrone */
  copyrights: Array<Scalars['String']>;
  /** The mode of transport of the isochrone */
  mode: IsochroneMode;
  /** A bounding box around the isochrone */
  bounds: Bounds;
  /** The isochrone as a geojson polygon */
  polygon: Scalars['JSON'];
};


/** Isochrone for the given position with duration and vehicle */
export type IsochroneDurationArgs = {
  unit?: DurationUnit;
};


/** Isochrone for the given position with duration and vehicle */
export type IsochronePolygonArgs = {
  simplify?: Maybe<GeoJsonSimplification>;
};

/** Mode of transport for an isochrone */
export enum IsochroneMode {
  Car = 'Car',
  Bike = 'Bike',
  Foot = 'Foot'
}

/** Determine how to sort Itineraries when listing */
export type ItinerariesSort = {
  /** Sort by the created date */
  created?: Maybe<SortDirection>;
  /** Sort by the modified date */
  modified?: Maybe<SortDirection>;
  /** Sort by the itinerary title */
  title?: Maybe<SortDirection>;
};

/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type Itinerary = Node & {
  __typename?: 'Itinerary';
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
  /** Profile that owns this itinerary */
  profile?: Maybe<Profile>;
  /** The date when the itinerary was created */
  created?: Maybe<Scalars['String']>;
  /** The date when the itinerary was last modified */
  modified?: Maybe<Scalars['String']>;
  /** Returns a single item from this itinerary by id */
  item?: Maybe<ItineraryItem>;
  /** If true, itinerary-directions will be created to automatically route between itinerary-locations */
  autoRoute?: Maybe<ItineraryAutoRoute>;
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** List of MediaContainers containing images or other media */
  media: Array<MediaContainer>;
  /** The preferred MediaContainer to use */
  preferredMedia?: Maybe<MediaContainer>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** The descending items within this itinerary item */
  descendants: ItineraryItemConnection;
  /** The immediate associated children itinerary items */
  children: ItineraryItemConnection;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Bounds for the itinerary item */
  bounds?: Maybe<Bounds>;
  /** Elevation data of the itinerary */
  elevation: Elevation;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryCreatedArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryModifiedArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryItemArgs = {
  id: Scalars['ID'];
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryMediaArgs = {
  limit?: Scalars['Int'];
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryDescendantsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
  depthMax?: Maybe<Scalars['Int']>;
  depthMin?: Maybe<Scalars['Int']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryChildrenArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
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
  defaultMode?: Maybe<RouteMode>;
};

/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollection = Node & ItineraryItem & {
  __typename?: 'ItineraryCollection';
  /** Unique identifier for the itinerary-item */
  id: Scalars['ID'];
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** List of MediaContainers containing images or other media */
  media: Array<MediaContainer>;
  /** The preferred MediaContainer to use */
  preferredMedia?: Maybe<MediaContainer>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** The itinerary this item belongs to */
  itinerary: Itinerary;
  /** The sibling item that comes before this item */
  before?: Maybe<ItineraryItem>;
  /** The sibling item that comes after this item */
  after?: Maybe<ItineraryItem>;
  /** The parent item of this item */
  parent?: Maybe<ItineraryItem>;
  /** All ancestors of the itinerary-item */
  ancestors: ItineraryItemConnection;
  /** All the descendants of the itinerary-item in depth-first-search order */
  descendants: ItineraryItemConnection;
  /** All the direct children of the itinerary-item */
  children: ItineraryItemConnection;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Bounds for the itinerary item */
  bounds?: Maybe<Bounds>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionMediaArgs = {
  limit?: Scalars['Int'];
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionBeforeArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionAfterArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionParentArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionAncestorsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionDescendantsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
  depthMax?: Maybe<Scalars['Int']>;
  depthMin?: Maybe<Scalars['Int']>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionChildrenArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};

/** Connection of Itinerarys */
export type ItineraryConnection = {
  __typename?: 'ItineraryConnection';
  /** All the edges in this page of the connection */
  edges: Array<ItineraryEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<Itinerary>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirections = Node & ItineraryItem & {
  __typename?: 'ItineraryDirections';
  /** Unique identifier for the itinerary-item */
  id: Scalars['ID'];
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** List of MediaContainers containing images or other media */
  media: Array<MediaContainer>;
  /** The preferred MediaContainer to use */
  preferredMedia?: Maybe<MediaContainer>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** The itinerary this item belongs to */
  itinerary: Itinerary;
  /** The sibling item that comes before this item */
  before?: Maybe<ItineraryItem>;
  /** The sibling item that comes after this item */
  after?: Maybe<ItineraryItem>;
  /** The parent item of this item */
  parent?: Maybe<ItineraryItem>;
  /** All ancestors of the itinerary-item */
  ancestors: ItineraryItemConnection;
  /** All the descendants of the itinerary-item in depth-first-search order */
  descendants: ItineraryItemConnection;
  /** All the direct children of the itinerary-item */
  children: ItineraryItemConnection;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Bounds for the itinerary-directions and it's descendants */
  bounds?: Maybe<Bounds>;
  /** The itinerary-location that is the starting point of the directions */
  origin?: Maybe<ItineraryLocation>;
  /** The itinerary-location that is the ending point of the directions */
  destination?: Maybe<ItineraryLocation>;
  /** The route details of this directions item */
  route: Route;
  /** The duration of this itinerary-directions */
  durations: Array<ItineraryDirectionsDurations>;
  /** The minimum duration of this itinerary-directions */
  durationMin?: Maybe<Scalars['Float']>;
  /** The maximum duration of this itinerary-directions */
  durationMax?: Maybe<Scalars['Float']>;
  /** The estimated distance of this itinerary-directions */
  distance?: Maybe<Scalars['Float']>;
  /** The elevation details of this itinerary-directions */
  elevation: Elevation;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsMediaArgs = {
  limit?: Scalars['Int'];
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsBeforeArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsAfterArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsParentArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsAncestorsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsDescendantsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
  depthMax?: Maybe<Scalars['Int']>;
  depthMin?: Maybe<Scalars['Int']>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsChildrenArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsBoundsArgs = {
  excludeDescendants?: Maybe<Scalars['Boolean']>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsDurationMinArgs = {
  unit?: DurationUnit;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsDurationMaxArgs = {
  unit?: DurationUnit;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsDistanceArgs = {
  unit?: DistanceUnit;
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
  /** Unique identifier for this duration */
  id: Scalars['ID'];
  /** The duration value */
  duration: Scalars['Float'];
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
  label?: Maybe<Scalars['String']>;
};

/** Edge containing a ItineraryDirections */
export type ItineraryDirectionsEdge = {
  __typename?: 'ItineraryDirectionsEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: ItineraryDirections;
  /** Whether this itinerary-directions is inbound or outbound from the itinerary-location */
  direction: ItineraryDirectionsDirection;
};

/** Restricts search for directions to a portion of an Itinerary */
export enum ItineraryDirectionsRestrict {
  /** Restrict results to include directions that are descendants of the parent item */
  ParentDescendants = 'ParentDescendants'
}

/** Edge containing a Itinerary */
export type ItineraryEdge = {
  __typename?: 'ItineraryEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: Itinerary;
};

/** An item in an itinerary as part of the tree */
export type ItineraryItem = {
  /** Unique identifier for the itinerary-item */
  id: Scalars['ID'];
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** List of MediaContainers containing images or other media */
  media: Array<MediaContainer>;
  /** The preferred MediaContainer to use */
  preferredMedia?: Maybe<MediaContainer>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** The itinerary this item belongs to */
  itinerary: Itinerary;
  /** The sibling item that comes before this item */
  before?: Maybe<ItineraryItem>;
  /** The sibling item that comes after this item */
  after?: Maybe<ItineraryItem>;
  /** The parent item of this item */
  parent?: Maybe<ItineraryItem>;
  /** All ancestors of the itinerary-item */
  ancestors: ItineraryItemConnection;
  /** All the descendants of the itinerary-item in depth-first-search order */
  descendants: ItineraryItemConnection;
  /** All the direct children of the itinerary-item */
  children: ItineraryItemConnection;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Bounds for the itinerary item */
  bounds?: Maybe<Bounds>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemMediaArgs = {
  limit?: Scalars['Int'];
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemBeforeArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemAfterArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemParentArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemAncestorsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemDescendantsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
  depthMax?: Maybe<Scalars['Int']>;
  depthMin?: Maybe<Scalars['Int']>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemChildrenArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};

/** Changes to an itinerary caused by a mutation */
export type ItineraryItemCascadedChanges = {
  __typename?: 'ItineraryItemCascadedChanges';
  /** Itinerary-items that were deleted due to the mutation */
  deletedIds: Array<Scalars['ID']>;
  /** Itinerary-items that were created due to the mutation */
  created: Array<ItineraryItem>;
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
  /** The item */
  node: ItineraryItem;
  /** List itinerary-directions connecting this node to other nodes in the connection */
  directions: ItineraryDirectionsConnection;
};


/** Edge containing a ItineraryItem */
export type ItineraryItemEdgeDirectionsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  direction?: Maybe<ItineraryDirectionsDirection>;
  limitImmediate?: Scalars['Boolean'];
  skipOptional?: Scalars['Boolean'];
};

/** Positions the item after a sibling */
export type ItineraryItemPositionAfterSibling = {
  /** The sibling itinerary item identifier, in the form of item/XYZ */
  siblingId?: Maybe<Scalars['ID']>;
};

/** Positions the item at the end position of its siblings */
export type ItineraryItemPositionAtEnd = {
  /** The parent itinerary item identifier, in the form of item/XYZ */
  parentId?: Maybe<Scalars['ID']>;
};

/** Positions the item at the start position of its siblings */
export type ItineraryItemPositionAtStart = {
  /** The parent itinerary item identifier, in the form of item/XYZ */
  parentId?: Maybe<Scalars['ID']>;
};

/** Positions the item before a sibling */
export type ItineraryItemPositionBeforeSibling = {
  /** The sibling itinerary item identifier, in the form of item/XYZ */
  siblingId?: Maybe<Scalars['ID']>;
};

/** Positions the itinerary item to the last position of the last itinerary collection item */
export type ItineraryItemPositionOnLastCollection = {
  /** The itinerary item identifier to limit descendent searching withing */
  searchUnder?: Maybe<Scalars['ID']>;
};

/** Possible types of ItineraryItem */
export enum ItineraryItemType {
  ItineraryCollection = 'ItineraryCollection',
  ItineraryLocation = 'ItineraryLocation',
  ItineraryDirections = 'ItineraryDirections'
}

/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocation = Node & ItineraryItem & {
  __typename?: 'ItineraryLocation';
  /** Unique identifier for the itinerary-item */
  id: Scalars['ID'];
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** List of MediaContainers containing images or other media */
  media: Array<MediaContainer>;
  /** The preferred MediaContainer to use */
  preferredMedia?: Maybe<MediaContainer>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** The itinerary this item belongs to */
  itinerary: Itinerary;
  /** The sibling item that comes before this item */
  before?: Maybe<ItineraryItem>;
  /** The sibling item that comes after this item */
  after?: Maybe<ItineraryItem>;
  /** The parent item of this item */
  parent?: Maybe<ItineraryItem>;
  /** All ancestors of the itinerary-item */
  ancestors: ItineraryItemConnection;
  /** All the descendants of the itinerary-item in depth-first-search order */
  descendants: ItineraryItemConnection;
  /** All the direct children of the itinerary-item */
  children: ItineraryItemConnection;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Bounds for the itinerary-location and it's descendants */
  bounds: Bounds;
  /** The place details of this location */
  place: Place;
  /** The position of the collection-location (derived from place if not overridden) */
  position: Position;
  /** The representation of a location, as a GeoJSON FeatureCollection */
  geoJson: Scalars['JSON'];
  /** Whether the location is an optional stop */
  optional: Scalars['Boolean'];
  /** Retrieves itinerary-directions associated with this itinerary-location */
  directions: ItineraryDirectionsConnection;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationMediaArgs = {
  limit?: Scalars['Int'];
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationBeforeArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationAfterArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationParentArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationAncestorsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationDescendantsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
  depthMax?: Maybe<Scalars['Int']>;
  depthMin?: Maybe<Scalars['Int']>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationChildrenArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationBoundsArgs = {
  excludeDescendants?: Maybe<Scalars['Boolean']>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationDirectionsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  direction?: Maybe<ItineraryDirectionsDirection>;
  accuracy?: Maybe<ItineraryDirectionsAccuracy>;
  restrict?: Maybe<ItineraryDirectionsRestrict>;
};


/** A container for a MediaResource */
export type MediaContainer = {
  __typename?: 'MediaContainer';
  /** Unique identifier for this container */
  id: Scalars['ID'];
  /** The MediaResource inside this container */
  resource: MediaResource;
};

/** Positions the MediaContainer after a sibling MediaContainer */
export type MediaContainerPositionAfter = {
  /** The sibling MediaContainer identifier, if null it means the top of the list (ie. before the first sibling) */
  id?: Maybe<Scalars['ID']>;
};

/** Positions the MediaContainer at the end of the list */
export type MediaContainerPositionAtEnd = {
  /** Ignored, required by GraphQL which does not allow empty input objects */
  _?: Maybe<Scalars['Int']>;
};

/** Positions the MediaContainer at the start of the list */
export type MediaContainerPositionAtStart = {
  /** Ignored, required by GraphQL which does not allow empty input objects */
  _?: Maybe<Scalars['Int']>;
};

/** Positions the MediaContainer before a sibling MediaContainer */
export type MediaContainerPositionBefore = {
  /** The sibling MediaContainer identifier, if null it means the bottom of the list (ie. after the last sibling) */
  id?: Maybe<Scalars['ID']>;
};

/** A MediaResource representing an image */
export type MediaImage = MediaResource & {
  __typename?: 'MediaImage';
  /** Unique identifier for the media-resource */
  id?: Maybe<Scalars['ID']>;
  /** The associated profile owner */
  profile?: Maybe<Profile>;
  /** The provider for the media */
  provider: Scalars['String'];
  /** Text caption for the media-resource */
  caption?: Maybe<Scalars['String']>;
  /** Text attribution for the source of the media-resource */
  attribution?: Maybe<Scalars['String']>;
  /** Copyright details of the media-resource */
  copyright?: Maybe<Scalars['String']>;
  /** Alternative text for the media-resource */
  altText?: Maybe<Scalars['String']>;
  /** A series of strings representing applied labels to the media */
  tags: Array<Scalars['String']>;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
  /** The original width and height of the image */
  originalSize?: Maybe<Array<Scalars['Int']>>;
  /** Provides the URL of the media */
  url?: Maybe<Scalars['String']>;
  /** Provides a specific source for the media, based often on different encoding or different sizing */
  source?: Maybe<MediaImageSource>;
  /** A collection of sources for the media */
  sources: Array<MediaImageSource>;
  /** Ids of all exif data in this media-image */
  exifIds: Array<Scalars['ID']>;
  /** Look up one exif value in this media-image by id */
  exif?: Maybe<MediaImageExif>;
};


/** A MediaResource representing an image */
export type MediaImageAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A MediaResource representing an image */
export type MediaImageAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A MediaResource representing an image */
export type MediaImageAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** A MediaResource representing an image */
export type MediaImageAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


/** A MediaResource representing an image */
export type MediaImageAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A MediaResource representing an image */
export type MediaImageUrlArgs = {
  id?: Maybe<Scalars['String']>;
  bestFit?: Maybe<Array<Scalars['Int']>>;
};


/** A MediaResource representing an image */
export type MediaImageSourceArgs = {
  id?: Maybe<Scalars['String']>;
  bestFit?: Maybe<Array<Scalars['Int']>>;
};


/** A MediaResource representing an image */
export type MediaImageExifArgs = {
  id: Scalars['ID'];
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
  /** A optional identifier for the source */
  id?: Maybe<Scalars['String']>;
  /** The content-type of the media source */
  type: Scalars['String'];
  /** The URL to the media source */
  url: Scalars['String'];
  /** The width of the media */
  width?: Maybe<Scalars['Int']>;
  /** The height of the media */
  height?: Maybe<Scalars['Int']>;
};

/** Representing media such as images/photos as well as other types such as video or audio */
export type MediaResource = {
  /** Unique identifier for the media-resource */
  id?: Maybe<Scalars['ID']>;
  /** The associated profile owner */
  profile?: Maybe<Profile>;
  /** The provider for the media */
  provider: Scalars['String'];
  /** Text caption for the media-resource */
  caption?: Maybe<Scalars['String']>;
  /** Text attribution for the source of the media-resource */
  attribution?: Maybe<Scalars['String']>;
  /** Copyright details of the media-resource */
  copyright?: Maybe<Scalars['String']>;
  /** Alternative text for the media-resource */
  altText?: Maybe<Scalars['String']>;
  /** A series of strings representing applied labels to the media */
  tags: Array<Scalars['String']>;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
};


/** Representing media such as images/photos as well as other types such as video or audio */
export type MediaResourceAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** Representing media such as images/photos as well as other types such as video or audio */
export type MediaResourceAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** Representing media such as images/photos as well as other types such as video or audio */
export type MediaResourceAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** Representing media such as images/photos as well as other types such as video or audio */
export type MediaResourceAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


/** Representing media such as images/photos as well as other types such as video or audio */
export type MediaResourceAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};

/** The status of a Media upload process */
export enum MediaUploadStatus {
  AwaitingUpload = 'AwaitingUpload',
  Processing = 'Processing',
  Complete = 'Complete',
  ProcessingFailed = 'ProcessingFailed'
}

/** Moves the itinerary item */
export type MoveItineraryItemPayload = {
  __typename?: 'MoveItineraryItemPayload';
  /** The fields for the item */
  item?: Maybe<ItineraryItem>;
  /** The modified itinerary */
  itinerary: Itinerary;
  /** Other changes to the itinerary that caused by moving the itinerary-item */
  cascaded: ItineraryItemCascadedChanges;
};

/** Move a MediaContainer within a list, exactly one of the position arguments is required. */
export type MoveMediaContainerInput = {
  /** ID to the Container to update */
  id: Scalars['String'];
  /** Move the MediaContainer before another container in the list */
  positionBefore?: Maybe<MediaContainerPositionBefore>;
  /** Move the MediaContainer after another container in the list */
  positionAfter?: Maybe<MediaContainerPositionAfter>;
  /** Move the MediaContainer at the start of the list */
  positionAtStart?: Maybe<MediaContainerPositionAtStart>;
  /** Move the MediaContainer at the end of the list */
  positionAtEnd?: Maybe<MediaContainerPositionAtEnd>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** The return fields available after creating a collection */
  createCollection: CreateCollectionPayload;
  /** Updates a collection */
  updateCollection: UpdateCollectionPayload;
  /** Delete an collection */
  deleteCollection: DeleteCollectionPayload;
  /** The fields available after the collection is deleted */
  deleteCollectionItem: DeleteCollectionItemPayload;
  /** Create a new collection-location under the given collection */
  createCollectionLocation: CreateCollectionLocationPayload;
  /** The fields avaialble after updating the collection location */
  updateCollectionLocation: UpdateCollectionLocationPayload;
  /** The return fields available after creating a connected app */
  createConnectedApp: CreateConnectedAppPayload;
  /** Update a connected app */
  updateConnectedApp: UpdateConnectedAppPayload;
  /** Deleted a connected app */
  deleteConnectedApp: DeleteConnectedAppPayload;
  /** Move an ItineraryItem */
  moveItineraryItem: MoveItineraryItemPayload;
  /** Delete an ItineraryItem */
  deleteItineraryItem: DeleteItineraryItemPayload;
  /** Create a new itinerary */
  createItinerary: CreateItineraryPayload;
  /** Updates a itinerary */
  updateItinerary: UpdateItineraryPayload;
  /** Delete an itinerary */
  deleteItinerary: DeleteItineraryPayload;
  /** Publish an itinerary making it publically accessible */
  publishItinerary: PublishItineraryPayload;
  /** Create a new ItineraryCollection item inside the given itinerary */
  createItineraryCollection: CreateItineraryCollectionPayload;
  /** Update an ItineraryCollection */
  updateItineraryCollection: UpdateItineraryCollectionPayload;
  /** Create a new ItineraryLocation item inside the given itinerary */
  createItineraryLocation: CreateItineraryLocationPayload;
  /** Update an ItineraryLocation */
  updateItineraryLocation: UpdateItineraryLocationPayload;
  /** Create a new ItineraryDirections item inside the given itinerary */
  createItineraryDirections: CreateItineraryDirectionsPayload;
  /** Update an ItineraryDirections */
  updateItineraryDirections: UpdateItineraryDirectionsPayload;
  /** Start a media upload */
  startMediaUpload: StartMediaUploadPayload;
  /** Finalize the media upload by creating a media-resource */
  finalizeMediaUpload: FinalizeMediaUploadPayload;
  /** Update a media resource with updated properties */
  updateMediaResource: UpdateMediaResourcePayload;
  /** Create a follow request between two profiles */
  followProfile: FollowProfilePayload;
  /** Remove the follow between two profiles */
  unfollowProfile: UnfollowProfilePayload;
  /** Approve a follow request between two profiles */
  approveProfileFollow: ApproveProfileFollowPayload;
  /** Deny a follow request between two profiles */
  denyProfileFollow: DenyProfileFollowPayload;
  /** Claim an unclaimed handle for the given profile */
  claimProfileHandle: ClaimProfileHandlePayload;
  /** Updates the specified profile with the given fields */
  updateProfile: UpdateProfilePayload;
};


export type MutationCreateCollectionArgs = {
  profileId: Scalars['ID'];
  collection: CreateCollectionInput;
};


export type MutationUpdateCollectionArgs = {
  id: Scalars['ID'];
  collection: UpdateCollectionInput;
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCollectionItemArgs = {
  id: Scalars['ID'];
};


export type MutationCreateCollectionLocationArgs = {
  collectionId: Scalars['ID'];
  location: CreateCollectionLocationInput;
};


export type MutationUpdateCollectionLocationArgs = {
  id: Scalars['ID'];
  location: UpdateCollectionLocationInput;
};


export type MutationCreateConnectedAppArgs = {
  profileId: Scalars['ID'];
  connectedApp: CreateConnectedAppInput;
};


export type MutationUpdateConnectedAppArgs = {
  id: Scalars['ID'];
  connectedApp: UpdateConnectedAppInput;
};


export type MutationDeleteConnectedAppArgs = {
  id: Scalars['ID'];
};


export type MutationMoveItineraryItemArgs = {
  id: Scalars['ID'];
  positionAtStart?: Maybe<ItineraryItemPositionAtStart>;
  positionAtEnd?: Maybe<ItineraryItemPositionAtEnd>;
  positionAfterSibling?: Maybe<ItineraryItemPositionAfterSibling>;
  positionBeforeSibling?: Maybe<ItineraryItemPositionBeforeSibling>;
  positionOnLastCollection?: Maybe<ItineraryItemPositionOnLastCollection>;
};


export type MutationDeleteItineraryItemArgs = {
  id: Scalars['ID'];
};


export type MutationCreateItineraryArgs = {
  itinerary: CreateItineraryInput;
  profileId?: Maybe<Scalars['ID']>;
};


export type MutationUpdateItineraryArgs = {
  id: Scalars['ID'];
  itinerary: UpdateItineraryInput;
};


export type MutationDeleteItineraryArgs = {
  id: Scalars['ID'];
};


export type MutationPublishItineraryArgs = {
  id: Scalars['ID'];
};


export type MutationCreateItineraryCollectionArgs = {
  itineraryId: Scalars['ID'];
  collection: CreateItineraryCollectionInput;
};


export type MutationUpdateItineraryCollectionArgs = {
  id: Scalars['ID'];
  collection: UpdateItineraryCollectionInput;
};


export type MutationCreateItineraryLocationArgs = {
  itineraryId: Scalars['ID'];
  location: CreateItineraryLocationInput;
  autoRoute?: Maybe<RouteSegmentInput>;
};


export type MutationUpdateItineraryLocationArgs = {
  id: Scalars['ID'];
  location: UpdateItineraryLocationInput;
};


export type MutationCreateItineraryDirectionsArgs = {
  itineraryId: Scalars['ID'];
  directions: CreateItineraryDirectionsInput;
};


export type MutationUpdateItineraryDirectionsArgs = {
  id: Scalars['ID'];
  directions: UpdateItineraryDirectionsInput;
};


export type MutationStartMediaUploadArgs = {
  filename: Scalars['String'];
  contentType?: Maybe<Scalars['String']>;
};


export type MutationFinalizeMediaUploadArgs = {
  token: Scalars['String'];
  profileId?: Maybe<Scalars['ID']>;
  resource?: Maybe<FinalizeMediaUploadInput>;
};


export type MutationUpdateMediaResourceArgs = {
  id: Scalars['ID'];
  resource: UpdateMediaResourceInput;
};


export type MutationFollowProfileArgs = {
  fromProfile: Scalars['ID'];
  toProfile: Scalars['ID'];
};


export type MutationUnfollowProfileArgs = {
  fromProfile: Scalars['ID'];
  toProfile: Scalars['ID'];
};


export type MutationApproveProfileFollowArgs = {
  fromProfile: Scalars['ID'];
  toProfile: Scalars['ID'];
};


export type MutationDenyProfileFollowArgs = {
  fromProfile: Scalars['ID'];
  toProfile: Scalars['ID'];
};


export type MutationClaimProfileHandleArgs = {
  id: Scalars['ID'];
  handle: Scalars['String'];
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
  /** True if there is a page before this one */
  hasPreviousPage: Scalars['Boolean'];
  /** True if there is a page after this one */
  hasNextPage: Scalars['Boolean'];
  /** The cursor of the first edge in this page */
  startCursor?: Maybe<Scalars['String']>;
  /** The cursor of the last edge in this page */
  endCursor?: Maybe<Scalars['String']>;
};

/** A defined location in the world */
export type Place = Node & {
  __typename?: 'Place';
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
  /** If non-null, an error occured while resolving this place and only a subset of data will be accessible */
  resolutionError?: Maybe<PlaceResolutionError>;
  /** Alias for `Place.name` */
  title?: Maybe<Scalars['String']>;
  /** The name of the place */
  name?: Maybe<Scalars['String']>;
  /** A short summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer description */
  description?: Maybe<Scalars['String']>;
  /** A collection of strings used to label this place */
  tags: Array<Scalars['String']>;
  /** The address of the place */
  address: PlaceAddress;
  /** The position of the place */
  position: Position;
  /** The bounding box around the place */
  bounds?: Maybe<Bounds>;
  /** The operating hours for this place, as encoded in OpenStreetMap hours specification */
  hours?: Maybe<PlaceHours>;
  /** The maki icon for this place */
  maki?: Maybe<Scalars['String']>;
  /** Source of the place data */
  contributor?: Maybe<Scalars['String']>;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
  /** The required attribution required when using this place information */
  attribution: Array<PlaceAttribution>;
  /** Contact information supplied for this place */
  contact: PlaceContact;
  /** Layers associated to this place */
  layers: Array<PlaceLayer>;
  /** List of MediaContainers supplied with the place information, such as images of the places */
  media: Array<MediaContainer>;
  /** The preferred MediaContainer to use */
  preferredMedia?: Maybe<MediaContainer>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** A url displaying how to navigate to this place */
  navigationUrl: Scalars['String'];
  /** Calculate distance and bearing information from the specified positions to this place */
  towards: Array<PlaceTowards>;
};


/** A defined location in the world */
export type PlaceAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A defined location in the world */
export type PlaceAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A defined location in the world */
export type PlaceAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** A defined location in the world */
export type PlaceAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


/** A defined location in the world */
export type PlaceAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A defined location in the world */
export type PlaceMediaArgs = {
  limit?: Scalars['Int'];
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
  /** Text Attribution required for this place */
  text?: Maybe<Scalars['String']>;
  /** A link required for this place */
  link?: Maybe<Scalars['String']>;
  /** Specific licensing information for this place if known */
  license?: Maybe<Scalars['String']>;
  /** The required tracking pixel */
  pixel?: Maybe<Scalars['String']>;
  /** Any media to be used in attribution, such as watermarks */
  mediaResource?: Maybe<MediaResource>;
};

/** Contact information for a Place */
export type PlaceContact = {
  __typename?: 'PlaceContact';
  /** Contact website for this place */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Phone number for this place */
  phoneNumber?: Maybe<Scalars['String']>;
  /** Email address for this place */
  emailAddress?: Maybe<Scalars['String']>;
  /** Bookings url for this place */
  bookingsUrl?: Maybe<Scalars['String']>;
  /** Facebook page for this place */
  facebookUrl?: Maybe<Scalars['String']>;
  /** Twitter for this place */
  twitterUrl?: Maybe<Scalars['String']>;
  /** Instagram for this place */
  instagramUrl?: Maybe<Scalars['String']>;
};

/** The opening hours for a place */
export type PlaceHours = {
  __typename?: 'PlaceHours';
  /**
   * The opening hours formatted in the OpenStreetMap opening_hours tag format.
   *
   * See: <https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification>
   */
  osmTag: Scalars['String'];
  /** Whether or not the hours are the same each week. */
  weekStable: Scalars['Boolean'];
  /** Look up the open/closed status of the place for the current time or a given datetime. */
  status: PlaceHoursStatus;
  /** Look up the place hours comment (if any) for the current time or a given datetime. */
  comment?: Maybe<Scalars['String']>;
  /** Look up intervals where the opening hours status/comment for the place changes */
  intervals: PlaceHoursIntervalConnection;
  /**
   * Look up the opening hours for a specific day. Days are calculated according to the local time of the place.
   *
   * Will return a maximum of 90 days.
   */
  forDays: Array<PlaceHoursForDay>;
};


/** The opening hours for a place */
export type PlaceHoursStatusArgs = {
  datetime?: Maybe<Scalars['String']>;
};


/** The opening hours for a place */
export type PlaceHoursCommentArgs = {
  datetime?: Maybe<Scalars['String']>;
};


/** The opening hours for a place */
export type PlaceHoursIntervalsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  offset?: Maybe<DatetimeOffset>;
  status?: Maybe<PlaceHoursStatus>;
};


/** The opening hours for a place */
export type PlaceHoursForDaysArgs = {
  days?: Maybe<Array<Scalars['String']>>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  offset?: Maybe<DatetimeOffset>;
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
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The opening hour for a place on a specific day */
export type PlaceHoursForDayIntervalsArgs = {
  status?: Maybe<PlaceHoursStatus>;
};

/** The opening hours for a place during the interval between two datetimes */
export type PlaceHoursInterval = {
  __typename?: 'PlaceHoursInterval';
  /** The starting datetime of this interval */
  from: Scalars['String'];
  /** The ending datetime of this interval, will be null if there is no following interval and the status/comment will no longer change */
  to?: Maybe<Scalars['String']>;
  /** The open/closed status of the place during this interval */
  status: PlaceHoursStatus;
  /** The place hours comment (if any) during this interval */
  comment?: Maybe<Scalars['String']>;
  /**
   * The holidays that occur during this interval
   *
   * Note: Will return holidays up to a maximum of one year from the "from" date
   */
  publicHolidays: Array<PlaceHoursIntervalHoliday>;
};


/** The opening hours for a place during the interval between two datetimes */
export type PlaceHoursIntervalFromArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The opening hours for a place during the interval between two datetimes */
export type PlaceHoursIntervalToArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
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
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Whether a place is open/closed or if the status is unknown */
export enum PlaceHoursStatus {
  Open = 'Open',
  Closed = 'Closed',
  Unknown = 'Unknown'
}

/** Create a new place or refer to an existing place */
export type PlaceInput = {
  /** Unique place identifier */
  id?: Maybe<Scalars['ID']>;
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
  Google = 'Google',
  Apple = 'Apple'
}

/** Error which occured while resolving a Place ID */
export type PlaceResolutionError = {
  __typename?: 'PlaceResolutionError';
  /** Human readable error message */
  message: Scalars['String'];
};

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
  /** The item */
  node: PlaceSearchNode;
  /** The one line text search result */
  single: TextSearchResult;
  /** The main line of the two line search result */
  main: TextSearchResult;
  /** The secondary line of the two line search result */
  secondary: TextSearchResult;
};

/** A result from a place search */
export type PlaceSearchNode = {
  __typename?: 'PlaceSearchNode';
  /** The Globally Unique ID of the place. */
  id: Scalars['ID'];
  /** The position of the place */
  position: Position;
  /** Alias for `Place.name` */
  title?: Maybe<Scalars['String']>;
  /** The name of the place */
  name?: Maybe<Scalars['String']>;
  /** A short summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer description */
  description?: Maybe<Scalars['String']>;
  /** The address of the place */
  address: PlaceAddress;
  /** The maki icon for this place */
  maki?: Maybe<Scalars['String']>;
  /** Layers associated to this place */
  layers: Array<PlaceLayer>;
  /** Source of the place data */
  contributor?: Maybe<Scalars['String']>;
};

/** Where to search for place information */
export enum PlaceSearchSource {
  OpenStreetMap = 'OpenStreetMap',
  Facebook = 'Facebook',
  OpenAddresses = 'OpenAddresses',
  Geonames = 'Geonames',
  Yelp = 'Yelp',
  AustralianTourismDataWarehouse = 'AustralianTourismDataWarehouse',
  Zomato = 'Zomato',
  TripAdvisor = 'TripAdvisor',
  WhosOnFirst = 'WhosOnFirst'
}

/** Place bearing and distance information towards point */
export type PlaceTowards = {
  __typename?: 'PlaceTowards';
  /** The point */
  position: Position;
  /** The bearing angle from the place to the point */
  bearing: Scalars['Float'];
  /** The distance from the place to the point */
  distance: Scalars['Float'];
  /** Compass point towards given point */
  compass: CompassPoint;
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
  /** The position in the form: [longitude, latitude] */
  lonLat: Array<Scalars['Float']>;
  /** The position in the form: [latitude, longitude] */
  latLon: Array<Scalars['Float']>;
  /** The position's latitude */
  lat: Scalars['Float'];
  /** The position's longitude */
  lon: Scalars['Float'];
  /** Identifier for the Position type useful for client-side caching */
  id: Scalars['ID'];
  /** PlaceLayers associated to this position */
  layers: Array<PlaceLayer>;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
};


/** A position on a map with a longitude and latitude */
export type PositionAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A position on a map with a longitude and latitude */
export type PositionAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A position on a map with a longitude and latitude */
export type PositionAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** A position on a map with a longitude and latitude */
export type PositionAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


/** A position on a map with a longitude and latitude */
export type PositionAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};

/** A position on a map with a longitude and latitude */
export type PositionInput = {
  /** The longitude */
  lon: Scalars['Float'];
  /** The latitude */
  lat: Scalars['Float'];
};

/** Profile */
export type Profile = Node & {
  __typename?: 'Profile';
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
  /** The name of the profile */
  name: Scalars['String'];
  /** The type of the profile */
  type: ProfileType;
  /** Indicates if follows on this profile are automatically approved */
  autoApproveFollows: Scalars['Boolean'];
  /** The (optional) unique handle of the profile */
  handle?: Maybe<Scalars['String']>;
  /** A short biography */
  bio?: Maybe<Scalars['String']>;
  /** The Website URL */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Profiles that follow this profile */
  followers: ProfileFollowConnection;
  /** Profiles that this profile follows */
  following: ProfileFollowConnection;
};


/** Profile */
export type ProfileFollowersArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  status?: Maybe<ProfileFollowStatus>;
  handle?: Maybe<Scalars['String']>;
};


/** Profile */
export type ProfileFollowingArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  status?: Maybe<ProfileFollowStatus>;
  handle?: Maybe<Scalars['String']>;
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
  Pending = 'Pending',
  Approved = 'Approved',
  Denied = 'Denied'
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
  /** Get a resource that implements Node by id */
  node?: Maybe<Node>;
  /** Retrieve a collection by id */
  collection?: Maybe<Collection>;
  /** Retrieve multiple collections */
  collections: CollectionConnection;
  /** Retrieve a collection item by id */
  collectionItem?: Maybe<CollectionItem>;
  /** Retrieve multiple collection items filtered by different criteria */
  collectionItems: CollectionItemConnection;
  /** Obtains a connected app by a provided id */
  connectedApp?: Maybe<ConnectedApp>;
  /** Search connected apps */
  connectedApps: ConnectedAppConnection;
  /** Query for fetching isochrone */
  isochrone: Array<Isochrone>;
  /** Get an itinerary by id */
  itinerary?: Maybe<Itinerary>;
  /** Query itineraries that belong to a profile */
  itineraries: ItineraryConnection;
  /** Look up routes for traveling along the given positions */
  routes: RouteConnection;
  /** Retrieve a MediaResource by id */
  mediaResource?: Maybe<MediaResource>;
  /** Get a place by id */
  place?: Maybe<Place>;
  /** Search for places */
  placeSearch: PlaceSearchConnection;
  /** Autocomplete for place search */
  placeAutocompleteSearch: PlaceSearchConnection;
  /** Search for places based on address details */
  placeAddressSearch: PlaceSearchConnection;
  /** Search for places by location */
  placeReverseSearch: PlaceSearchConnection;
  /** Obtains a profile by a provided id */
  profile?: Maybe<Profile>;
  /** Look up all authorised profiles */
  authorizedProfiles: ProfileConnection;
  /** Search profiles */
  profiles: ProfileConnection;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryCollectionsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  profileId: Scalars['ID'];
  discriminator?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<CollectionsSort>>;
};


export type QueryCollectionItemArgs = {
  id: Scalars['ID'];
};


export type QueryCollectionItemsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  profileId?: Maybe<Scalars['ID']>;
  collectionIds?: Maybe<Array<Scalars['ID']>>;
  keyword?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  sectionIds?: Maybe<Array<Scalars['ID']>>;
  resourceIds?: Maybe<Array<Scalars['ID']>>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
  boundsCircle?: Maybe<BoundsCircleInput>;
  bounds?: Maybe<BoundsInput>;
  externalIds?: Maybe<Array<Scalars['ID']>>;
  externalSources?: Maybe<Array<Scalars['ID']>>;
  sort?: Maybe<Array<CollectionItemsSort>>;
};


export type QueryConnectedAppArgs = {
  id: Scalars['ID'];
};


export type QueryConnectedAppsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  profileId?: Maybe<Scalars['ID']>;
  deleted?: Maybe<Scalars['Boolean']>;
  expired?: Maybe<Scalars['Boolean']>;
  type?: Maybe<ConnectedAppTypes>;
  authType?: Maybe<ConnectedAppAuthTypes>;
  serviceKey?: Maybe<ConnectedAppServiceKeys>;
};


export type QueryIsochroneArgs = {
  center: PositionInput;
  duration: Scalars['Int'];
  mode: IsochroneMode;
};


export type QueryItineraryArgs = {
  id: Scalars['ID'];
};


export type QueryItinerariesArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  profileId: Scalars['ID'];
  keyword?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<ItinerariesSort>>;
};


export type QueryRoutesArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  positions: Array<PositionInput>;
  mode?: RouteSearchableMode;
};


export type QueryMediaResourceArgs = {
  id: Scalars['ID'];
};


export type QueryPlaceArgs = {
  id: Scalars['ID'];
};


export type QueryPlaceSearchArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  focus?: Maybe<PositionInput>;
  bounds?: Maybe<BoundsInput>;
  sources?: Maybe<Array<PlaceSearchSource>>;
  layers?: Maybe<Array<Scalars['String']>>;
  thirdPartyQuery?: Maybe<Scalars['JSON']>;
  maxLabelLength?: Maybe<Scalars['Int']>;
};


export type QueryPlaceAutocompleteSearchArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  focus?: Maybe<PositionInput>;
  bounds?: Maybe<BoundsInput>;
  sources?: Maybe<Array<PlaceSearchSource>>;
  layers?: Maybe<Array<Scalars['String']>>;
  thirdPartyQuery?: Maybe<Scalars['JSON']>;
  maxLabelLength?: Maybe<Scalars['Int']>;
};


export type QueryPlaceAddressSearchArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  borough?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  neighbourhood?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  sources?: Maybe<Array<PlaceSearchSource>>;
  layers?: Maybe<Array<Scalars['String']>>;
  thirdPartyQuery?: Maybe<Scalars['JSON']>;
  maxLabelLength?: Maybe<Scalars['Int']>;
};


export type QueryPlaceReverseSearchArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  focus: PositionInput;
  sources?: Maybe<Array<PlaceSearchSource>>;
  layers?: Maybe<Array<Scalars['String']>>;
  thirdPartyQuery?: Maybe<Scalars['JSON']>;
  maxLabelLength?: Maybe<Scalars['Int']>;
};


export type QueryProfileArgs = {
  id: Scalars['ID'];
};


export type QueryAuthorizedProfilesArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


export type QueryProfilesArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  handle: Scalars['String'];
};

/** The representation of a route path taken */
export type Route = {
  __typename?: 'Route';
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
  Bike = 'Bike',
  Boat = 'Boat',
  Bus = 'Bus',
  Car = 'Car',
  Cruise = 'Cruise',
  DogSled = 'DogSled',
  Foot = 'Foot',
  Hike = 'Hike',
  Kayak = 'Kayak',
  Motorcycle = 'Motorcycle',
  MountainBike = 'MountainBike',
  Plane = 'Plane',
  Train = 'Train',
  Transit = 'Transit'
}

/** Subset of RouteModes supporting route search */
export enum RouteSearchableMode {
  Bike = 'Bike',
  Bus = 'Bus',
  Car = 'Car',
  Foot = 'Foot',
  Hike = 'Hike',
  Motorcycle = 'Motorcycle',
  MountainBike = 'MountainBike',
  Transit = 'Transit'
}

/** One segment of a Route */
export type RouteSegment = {
  __typename?: 'RouteSegment';
  /** WARNING: this ID is unstable, modifying the route might change the ID */
  id: Scalars['ID'];
  /** The mode of transport to be taken. eg: car, walk, kayak, etc */
  mode: RouteMode;
  /** The way positions along this route */
  positions?: Maybe<Array<Position>>;
  /** Whether this route was searched for */
  useRouteSearching: Scalars['Boolean'];
  /** The representation of this path as encoded as geojson FeatureCollection type */
  geoJson?: Maybe<Scalars['JSON']>;
  /** The estimated duration for this path */
  duration?: Maybe<Scalars['Float']>;
  /** The estimated distance for this path */
  distance?: Maybe<Scalars['Float']>;
  /** The estimated elevation details of this route */
  elevation: Elevation;
  /** The path representation as encoded as a polyline format */
  polyline?: Maybe<Scalars['String']>;
};


/** One segment of a Route */
export type RouteSegmentGeoJsonArgs = {
  simplify?: Maybe<GeoJsonSimplification>;
};


/** One segment of a Route */
export type RouteSegmentDurationArgs = {
  unit?: DurationUnit;
};


/** One segment of a Route */
export type RouteSegmentDistanceArgs = {
  unit?: DistanceUnit;
};


/** One segment of a Route */
export type RouteSegmentPolylineArgs = {
  simplify?: Maybe<GeoJsonSimplification>;
};

/** Create a RouteSegment */
export type RouteSegmentInput = {
  /** The mode of transport to be taken on this segment, defaults to Car */
  mode?: Maybe<RouteMode>;
  /** The way positions along this route */
  positions?: Maybe<Array<PositionInput>>;
  /** Whether to plan out a route using the positions. Defaults to true if the mode is searchable and otherwise will be set to false */
  useRouteSearching?: Maybe<Scalars['Boolean']>;
  /** The distance for this route segment */
  distance?: Maybe<Scalars['Float']>;
  /** The duration for this route segment */
  duration?: Maybe<Scalars['Float']>;
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
  /** The upload token, required when finalising the upload */
  token: Scalars['String'];
  /** The url to upload media to (via HTTP POST) */
  url: Scalars['String'];
  /** Data to pass with the upload */
  fields: Scalars['JSON'];
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
  /** Start of the match */
  offset: Scalars['Int'];
  /** Length of the match */
  length: Scalars['Int'];
};

/** Result of unfollowing a profile */
export type UnfollowProfilePayload = {
  __typename?: 'UnfollowProfilePayload';
  /** The follower profile */
  fromProfile: Profile;
  /** The profile being followed */
  toProfile: Profile;
  /** The status of the follow request */
  status?: Maybe<ProfileFollowStatus>;
};

/** Updates a collection */
export type UpdateCollectionInput = {
  /** The title for the collection */
  title?: Maybe<Scalars['String']>;
  /** The synopsis for the collection */
  synopsis?: Maybe<Scalars['String']>;
  /** The description for the collection */
  description?: Maybe<Scalars['String']>;
  /** The tags for the collection */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Insert or update attributes to the collection */
  upsertAttrs?: Maybe<Array<AttributeInput>>;
  /** Delete attributes to the collection */
  deleteAttrs?: Maybe<Array<AttributeIdentifierInput>>;
  /** Add multiple Media with MediaResources */
  createMedia?: Maybe<Array<CreateMediaContainerInput>>;
  /** Move one or move MediaContainers */
  moveMedia?: Maybe<Array<MoveMediaContainerInput>>;
  /** Update one or move MediaContainers */
  updateMedia?: Maybe<Array<UpdateMediaContainerInput>>;
  /** Delete one or move MediaContainers */
  deleteMedia?: Maybe<Array<Scalars['ID']>>;
};

/** The fields for the collection location to update */
export type UpdateCollectionLocationInput = {
  /** Title for this item */
  title?: Maybe<Scalars['String']>;
  /** A longer description content for this item */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer description content for this item */
  description?: Maybe<Scalars['String']>;
  /** A collection of strings used to label this item */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Shortcut for setting the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Shortcut for setting the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** One or more sections for this item */
  sectionIds?: Maybe<Array<Scalars['ID']>>;
  /** Identifier from an external source this item is associated with */
  externalId?: Maybe<Scalars['ID']>;
  /** The source of this item's externalId */
  externalSource?: Maybe<Scalars['ID']>;
  /** The associated place information for this item */
  place?: Maybe<PlaceInput>;
  /** Override for the place's position */
  position?: Maybe<PositionInput>;
  /** Insert or update attributes to the collection */
  upsertAttrs?: Maybe<Array<AttributeInput>>;
  /** Delete attributes to the collection */
  deleteAttrs?: Maybe<Array<AttributeIdentifierInput>>;
  /** Add multiple Media with MediaResources */
  createMedia?: Maybe<Array<CreateMediaContainerInput>>;
  /** Move one or move MediaContainers */
  moveMedia?: Maybe<Array<MoveMediaContainerInput>>;
  /** Update one or move MediaContainers */
  updateMedia?: Maybe<Array<UpdateMediaContainerInput>>;
  /** Delete one or move MediaContainers */
  deleteMedia?: Maybe<Array<Scalars['ID']>>;
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
  authType?: Maybe<ConnectedAppAuthTypes>;
  /** Any specific scope that has been granted to the 3rd party application */
  scope?: Maybe<Scalars['String']>;
  /** 3rd party ID or account ID */
  thirdPartyId?: Maybe<Scalars['ID']>;
  /** Encrypted JSON */
  configuration?: Maybe<Scalars['String']>;
};

/** The available fields after updating a connected app */
export type UpdateConnectedAppPayload = {
  __typename?: 'UpdateConnectedAppPayload';
  /** The updated connected app */
  connectedApp?: Maybe<ConnectedApp>;
};

/** The intinerary collection fields to update */
export type UpdateItineraryCollectionInput = {
  /** The title for the itinerary-collection */
  title?: Maybe<Scalars['String']>;
  /** The synopsis for the itinerary-collection */
  synopsis?: Maybe<Scalars['String']>;
  /** The description for the itinerary-collection */
  description?: Maybe<Scalars['String']>;
  /** The tags for the itinerary-collection */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Insert or update attributes to the itinerary-collection */
  upsertAttrs?: Maybe<Array<AttributeInput>>;
  /** Delete attributes to the itinerary-collection */
  deleteAttrs?: Maybe<Array<AttributeIdentifierInput>>;
  /** Add multiple Media with MediaResources */
  createMedia?: Maybe<Array<CreateMediaContainerInput>>;
  /** Move one or move MediaContainers */
  moveMedia?: Maybe<Array<MoveMediaContainerInput>>;
  /** Update one or move MediaContainers */
  updateMedia?: Maybe<Array<UpdateMediaContainerInput>>;
  /** Delete one or move MediaContainers */
  deleteMedia?: Maybe<Array<Scalars['ID']>>;
};

/** The fields available after updating the itinerary collection */
export type UpdateItineraryCollectionPayload = {
  __typename?: 'UpdateItineraryCollectionPayload';
  /** The itinerary collection that was created */
  collection?: Maybe<ItineraryCollection>;
  /** The modified itinerary */
  itinerary: Itinerary;
  /** Other changes to the itinerary that caused by deleting the itinerary-item */
  cascaded: ItineraryItemCascadedChanges;
};

/** The input fields to update the itinerary directions */
export type UpdateItineraryDirectionsInput = {
  /** The title for the itinerary directions */
  title?: Maybe<Scalars['String']>;
  /** The synopsis for the itinerary-directions */
  synopsis?: Maybe<Scalars['String']>;
  /** The description for the itinerary-directions */
  description?: Maybe<Scalars['String']>;
  /** The tags for the itinerary-directions */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Insert or update attributes to the collection */
  upsertAttrs?: Maybe<Array<AttributeInput>>;
  /** Delete attributes to the collection */
  deleteAttrs?: Maybe<Array<AttributeIdentifierInput>>;
  /** Add multiple Media with MediaResources */
  createMedia?: Maybe<Array<CreateMediaContainerInput>>;
  /** Move one or move MediaContainers */
  moveMedia?: Maybe<Array<MoveMediaContainerInput>>;
  /** Update one or move MediaContainers */
  updateMedia?: Maybe<Array<UpdateMediaContainerInput>>;
  /** Delete one or move MediaContainers */
  deleteMedia?: Maybe<Array<Scalars['ID']>>;
  /** The origin/starting itinerary location item, in the form of item/XYZ */
  originId?: Maybe<Scalars['ID']>;
  /** The route of this item, must include at least one route segment */
  route?: Maybe<RouteInput>;
  /** The distance of the itinerary-directions */
  distance?: Maybe<Scalars['Float']>;
  /** The duration details of the new itinerary-directions */
  durations?: Maybe<Array<ItineraryDirectionsDurationsInput>>;
  /** The elevation details of the new itinerary-directions */
  elevation?: Maybe<ElevationInput>;
};

/** The fields available after updating the itinerary directions item */
export type UpdateItineraryDirectionsPayload = {
  __typename?: 'UpdateItineraryDirectionsPayload';
  /** The updated itinerary directions item */
  directions?: Maybe<ItineraryDirections>;
  /** The modified itinerary */
  itinerary: Itinerary;
  /** Other changes to the itinerary that caused by deleting the itinerary-item */
  cascaded: ItineraryItemCascadedChanges;
};

/** Updates a itinerary */
export type UpdateItineraryInput = {
  /** The title for the itinerary */
  title?: Maybe<Scalars['String']>;
  /** The synopsis for the itinerary */
  synopsis?: Maybe<Scalars['String']>;
  /** The description for the itinerary */
  description?: Maybe<Scalars['String']>;
  /** The tags for the itinerary */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Insert or update attributes to the collection */
  upsertAttrs?: Maybe<Array<AttributeInput>>;
  /** Delete attributes to the collection */
  deleteAttrs?: Maybe<Array<AttributeIdentifierInput>>;
  /** Add multiple Media with MediaResources */
  createMedia?: Maybe<Array<CreateMediaContainerInput>>;
  /** Move one or move MediaContainers */
  moveMedia?: Maybe<Array<MoveMediaContainerInput>>;
  /** Update one or move MediaContainers */
  updateMedia?: Maybe<Array<UpdateMediaContainerInput>>;
  /** Delete one or move MediaContainers */
  deleteMedia?: Maybe<Array<Scalars['ID']>>;
  /** Enable auto routing, or set to null to disable */
  autoRoute?: Maybe<ItineraryAutoRouteInput>;
  /** Elevation data of the new itinerary */
  elevation?: Maybe<ElevationInput>;
};

/** The fields to update on an itinerary location */
export type UpdateItineraryLocationInput = {
  /** The title for the itinerary-location */
  title?: Maybe<Scalars['String']>;
  /** The synopsis for the itinerary-location */
  synopsis?: Maybe<Scalars['String']>;
  /** The description for the itinerary-location */
  description?: Maybe<Scalars['String']>;
  /** The tags for the itinerary-location */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Insert or update attributes to the itinerary-collection */
  upsertAttrs?: Maybe<Array<AttributeInput>>;
  /** Delete attributes to the itinerary-collection */
  deleteAttrs?: Maybe<Array<AttributeIdentifierInput>>;
  /** Add multiple Media with MediaResources */
  createMedia?: Maybe<Array<CreateMediaContainerInput>>;
  /** Move one or move MediaContainers */
  moveMedia?: Maybe<Array<MoveMediaContainerInput>>;
  /** Update one or move MediaContainers */
  updateMedia?: Maybe<Array<UpdateMediaContainerInput>>;
  /** Delete one or move MediaContainers */
  deleteMedia?: Maybe<Array<Scalars['ID']>>;
  /** The place for this itinerary-location */
  position?: Maybe<PositionInput>;
  /** The place for this itinerary-location */
  place?: Maybe<PlaceInput>;
  /** Whether the location specified is optional on the itinerary */
  optional?: Maybe<Scalars['Boolean']>;
};

/** The fields available after updating a location */
export type UpdateItineraryLocationPayload = {
  __typename?: 'UpdateItineraryLocationPayload';
  /** The updated itinerary location */
  location?: Maybe<ItineraryLocation>;
  /** The modified itinerary */
  itinerary: Itinerary;
  /** Other changes to the itinerary that caused by deleting the itinerary-item */
  cascaded: ItineraryItemCascadedChanges;
};

/** The available fields after updating a itinerary */
export type UpdateItineraryPayload = {
  __typename?: 'UpdateItineraryPayload';
  /** The updated itinerary */
  itinerary?: Maybe<Itinerary>;
  /** Other changes to the itinerary that caused by updating the itinerary */
  cascaded: ItineraryItemCascadedChanges;
};

/** Update a MediaContainer */
export type UpdateMediaContainerInput = {
  /** ID to the MediaContainer to update */
  id: Scalars['String'];
  /** ID to a MediaResource */
  resourceId?: Maybe<Scalars['String']>;
};

/** Updates a media resource */
export type UpdateMediaResourceInput = {
  /** List of labels to apply to the media-resource */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Text attribution for the source of the media-resource */
  attribution?: Maybe<Scalars['String']>;
  /** Text caption for the media-resource */
  caption?: Maybe<Scalars['String']>;
  /** Copyright details of the media-resource */
  copyright?: Maybe<Scalars['String']>;
  /** Insert or update attributes to the media-resource */
  upsertAttrs?: Maybe<Array<AttributeInput>>;
  /** Delete attributes to the media-resource */
  deleteAttrs?: Maybe<Array<AttributeIdentifierInput>>;
};

/** Response payload to Mutation.updateMediaResource */
export type UpdateMediaResourcePayload = {
  __typename?: 'UpdateMediaResourcePayload';
  /** The updated media-resource */
  resource: MediaResource;
};

/** Input object to Mutation.updateProfile */
export type UpdateProfileInput = {
  /** The name of the profile */
  name?: Maybe<Scalars['String']>;
  /** A short biography */
  bio?: Maybe<Scalars['String']>;
  /** The website url */
  websiteUrl?: Maybe<Scalars['String']>;
  /** If follow requests should be automatically approved for this profile */
  autoApproveFollows?: Maybe<Scalars['Boolean']>;
};

/** Response payload to Mutation.updateProfile */
export type UpdateProfilePayload = {
  __typename?: 'UpdateProfilePayload';
  /** The updated profile */
  profile?: Maybe<Profile>;
};

export type CreateCollectionLocationMutationVariables = Exact<{
  collectionId: Scalars['ID'];
  location: CreateCollectionLocationInput;
}>;


export type CreateCollectionLocationMutation = { __typename?: 'Mutation', createCollectionLocation: { __typename: 'CreateCollectionLocationPayload', location?: Maybe<{ __typename: 'CollectionLocation', id: string, title?: Maybe<string>, synopsis?: Maybe<string>, description?: Maybe<string>, tags: Array<string>, readMoreUrl?: Maybe<string>, websiteUrl?: Maybe<string>, place: { __typename: 'Place', id: string, name?: Maybe<string>, synopsis?: Maybe<string>, maki?: Maybe<string>, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: Maybe<string>, addressLineTwo?: Maybe<string>, addressLineThree?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, regionCode?: Maybe<string>, country?: Maybe<string>, countryCode?: Maybe<string> }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: Maybe<string> }> }, position: { __typename?: 'Position', lon: number, lat: number } }> } };

export type DeleteCollectionLocationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteCollectionLocationMutation = { __typename?: 'Mutation', deleteCollectionItem: { __typename: 'DeleteCollectionItemPayload' } };

export type FindCollectionLocationIdsByExternalQueryVariables = Exact<{
  collectionId?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
  externalIds?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
  externalSources?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
}>;


export type FindCollectionLocationIdsByExternalQuery = { __typename?: 'Query', collectionItems: { __typename: 'CollectionItemConnection', totalCount: number, edges: Array<{ __typename?: 'CollectionItemEdge', cursor: string, node: { __typename: 'CollectionLocation', id: string, place: { __typename: 'Place', id: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string>, endCursor?: Maybe<string> } } };

export type FindCollectionLocationIdsByTagQueryVariables = Exact<{
  collectionId?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
  tags?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
}>;


export type FindCollectionLocationIdsByTagQuery = { __typename?: 'Query', collectionItems: { __typename: 'CollectionItemConnection', totalCount: number, edges: Array<{ __typename?: 'CollectionItemEdge', cursor: string, node: { __typename: 'CollectionLocation', id: string, place: { __typename: 'Place', id: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string>, endCursor?: Maybe<string> } } };

export type FindCollectionLocationsByExternalQueryVariables = Exact<{
  collectionId?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
  externalIds?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
  externalSources?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
}>;


export type FindCollectionLocationsByExternalQuery = { __typename?: 'Query', collectionItems: { __typename: 'CollectionItemConnection', totalCount: number, edges: Array<{ __typename?: 'CollectionItemEdge', cursor: string, node: { __typename: 'CollectionLocation', id: string, title?: Maybe<string>, synopsis?: Maybe<string>, tags: Array<string>, readMoreUrl?: Maybe<string>, place: { __typename: 'Place', id: string, name?: Maybe<string>, synopsis?: Maybe<string>, maki?: Maybe<string>, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: Maybe<string>, addressLineTwo?: Maybe<string>, addressLineThree?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, regionCode?: Maybe<string>, country?: Maybe<string>, countryCode?: Maybe<string> }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: Maybe<string> }> }, position: { __typename?: 'Position', lon: number, lat: number }, externalId?: Maybe<{ __typename?: 'Attribute', value?: Maybe<any> }>, externalSource?: Maybe<{ __typename?: 'Attribute', value?: Maybe<any> }> } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string>, endCursor?: Maybe<string> } } };

export type FindCollectionLocationsByTagQueryVariables = Exact<{
  collectionId?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
  tags?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
}>;


export type FindCollectionLocationsByTagQuery = { __typename?: 'Query', collectionItems: { __typename: 'CollectionItemConnection', totalCount: number, edges: Array<{ __typename?: 'CollectionItemEdge', cursor: string, node: { __typename: 'CollectionLocation', id: string, title?: Maybe<string>, synopsis?: Maybe<string>, tags: Array<string>, readMoreUrl?: Maybe<string>, place: { __typename: 'Place', id: string, name?: Maybe<string>, synopsis?: Maybe<string>, maki?: Maybe<string>, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: Maybe<string>, addressLineTwo?: Maybe<string>, addressLineThree?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, regionCode?: Maybe<string>, country?: Maybe<string>, countryCode?: Maybe<string> }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: Maybe<string> }> }, position: { __typename?: 'Position', lon: number, lat: number }, externalId?: Maybe<{ __typename?: 'Attribute', value?: Maybe<any> }>, externalSource?: Maybe<{ __typename?: 'Attribute', value?: Maybe<any> }> } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string>, endCursor?: Maybe<string> } } };

export type CollectionContentFragment = { __typename?: 'Collection', title?: Maybe<string>, synopsis?: Maybe<string>, description?: Maybe<string>, discriminator: string, readMoreUrl?: Maybe<string> };

export type CollectionItemsCountFragment = { __typename?: 'Collection', items: { __typename?: 'CollectionItemConnection', totalCount: number } };

export type CollectionLocationContentFragment = { __typename?: 'CollectionLocation', title?: Maybe<string>, synopsis?: Maybe<string>, description?: Maybe<string>, tags: Array<string>, readMoreUrl?: Maybe<string>, websiteUrl?: Maybe<string>, position: { __typename?: 'Position', lon: number, lat: number } };

export type CollectionLocationExternalRefsFragment = { __typename?: 'CollectionLocation', externalId?: Maybe<{ __typename?: 'Attribute', value?: Maybe<any> }>, externalSource?: Maybe<{ __typename?: 'Attribute', value?: Maybe<any> }> };

export type CollectionLocationPartialContentFragment = { __typename?: 'CollectionLocation', title?: Maybe<string>, synopsis?: Maybe<string>, tags: Array<string>, readMoreUrl?: Maybe<string>, position: { __typename?: 'Position', lon: number, lat: number } };

export type CollectionPartialContentFragment = { __typename?: 'Collection', title?: Maybe<string>, synopsis?: Maybe<string>, readMoreUrl?: Maybe<string> };

export type GetCollectionLocationQueryVariables = Exact<{
  id: Scalars['ID'];
  mediaImagePreferredBestFit?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type GetCollectionLocationQuery = { __typename?: 'Query', collectionItem?: Maybe<{ __typename: 'CollectionLocation', id: string, title?: Maybe<string>, synopsis?: Maybe<string>, description?: Maybe<string>, tags: Array<string>, readMoreUrl?: Maybe<string>, websiteUrl?: Maybe<string>, place: { __typename: 'Place', id: string, name?: Maybe<string>, synopsis?: Maybe<string>, maki?: Maybe<string>, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: Maybe<string>, addressLineTwo?: Maybe<string>, addressLineThree?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, regionCode?: Maybe<string>, country?: Maybe<string>, countryCode?: Maybe<string> }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: Maybe<string> }> }, preferredMedia?: Maybe<{ __typename: 'MediaContainer', id: string, resource: { __typename: 'MediaImage', caption?: Maybe<string>, copyright?: Maybe<string>, attribution?: Maybe<string>, id?: Maybe<string>, altText?: Maybe<string>, source?: Maybe<{ __typename?: 'MediaImageSource', url: string }> } }>, position: { __typename?: 'Position', lon: number, lat: number } }> };

export type GetCollectionQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCollectionQuery = { __typename?: 'Query', collection?: Maybe<{ __typename: 'Collection', id: string, title?: Maybe<string>, synopsis?: Maybe<string>, description?: Maybe<string>, discriminator: string, readMoreUrl?: Maybe<string>, items: { __typename?: 'CollectionItemConnection', totalCount: number } }> };

export type ListCollectionsQueryVariables = Exact<{
  profileId: Scalars['ID'];
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  discriminator?: Maybe<Scalars['String']>;
}>;


export type ListCollectionsQuery = { __typename?: 'Query', collections: { __typename: 'CollectionConnection', totalCount: number, edges: Array<{ __typename?: 'CollectionEdge', node: { __typename: 'Collection', id: string, title?: Maybe<string>, synopsis?: Maybe<string>, readMoreUrl?: Maybe<string>, items: { __typename?: 'CollectionItemConnection', totalCount: number } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string>, endCursor?: Maybe<string> } } };

export type UpdateCollectionLocationMutationVariables = Exact<{
  id: Scalars['ID'];
  location: UpdateCollectionLocationInput;
}>;


export type UpdateCollectionLocationMutation = { __typename?: 'Mutation', updateCollectionLocation: { __typename: 'UpdateCollectionLocationPayload', location?: Maybe<{ __typename: 'CollectionLocation', id: string, title?: Maybe<string>, synopsis?: Maybe<string>, description?: Maybe<string>, tags: Array<string>, readMoreUrl?: Maybe<string>, websiteUrl?: Maybe<string>, position: { __typename?: 'Position', lon: number, lat: number } }> } };

export type CreateItineraryDirectionsMutationVariables = Exact<{
  itineraryId: Scalars['ID'];
  directions: CreateItineraryDirectionsInput;
}>;


export type CreateItineraryDirectionsMutation = { __typename?: 'Mutation', createItineraryDirections: { __typename: 'CreateItineraryDirectionsPayload', directions?: Maybe<{ __typename: 'ItineraryDirections', id: string, durationMin?: Maybe<number> }>, cascaded: { __typename?: 'ItineraryItemCascadedChanges', deletedIds: Array<string>, created: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }>, updated: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }> } } };

export type CreateItineraryLocationMutationVariables = Exact<{
  itineraryId: Scalars['ID'];
  location: CreateItineraryLocationInput;
}>;


export type CreateItineraryLocationMutation = { __typename?: 'Mutation', createItineraryLocation: { __typename: 'CreateItineraryLocationPayload', location?: Maybe<{ __typename: 'ItineraryLocation', id: string, title?: Maybe<string>, synopsis?: Maybe<string>, description?: Maybe<string>, tags: Array<string>, optional: boolean, readMoreUrl?: Maybe<string>, itinerary: { __typename: 'Itinerary', id: string, locations: { __typename?: 'ItineraryItemConnection', totalCount: number } }, place: { __typename: 'Place', id: string, name?: Maybe<string>, synopsis?: Maybe<string>, maki?: Maybe<string>, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: Maybe<string>, addressLineTwo?: Maybe<string>, addressLineThree?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, regionCode?: Maybe<string>, country?: Maybe<string>, countryCode?: Maybe<string> }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: Maybe<string> }> }, position: { __typename?: 'Position', lon: number, lat: number } }>, cascaded: { __typename?: 'ItineraryItemCascadedChanges', deletedIds: Array<string>, created: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }>, updated: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }> } } };

export type CreateItineraryMutationVariables = Exact<{
  itinerary: CreateItineraryInput;
  profileId?: Maybe<Scalars['ID']>;
}>;


export type CreateItineraryMutation = { __typename?: 'Mutation', createItinerary: { __typename: 'CreateItineraryPayload', itinerary?: Maybe<{ __typename: 'Itinerary', id: string, title?: Maybe<string>, synopsis?: Maybe<string>, description?: Maybe<string>, tags: Array<string>, created?: Maybe<string>, autoRoute?: Maybe<{ __typename?: 'ItineraryAutoRoute', defaultMode: RouteMode }>, locations: { __typename?: 'ItineraryItemConnection', totalCount: number } }> } };

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


export type DisableItineraryAutoRouteMutation = { __typename?: 'Mutation', updateItinerary: { __typename: 'UpdateItineraryPayload', itinerary?: Maybe<{ __typename: 'Itinerary', id: string, autoRoute?: Maybe<{ __typename?: 'ItineraryAutoRoute', defaultMode: RouteMode }> }>, cascaded: { __typename?: 'ItineraryItemCascadedChanges', deletedIds: Array<string>, created: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }>, updated: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }> } } };

export type EnableItineraryAutoRouteMutationVariables = Exact<{
  id: Scalars['ID'];
  defaultMode: RouteMode;
}>;


export type EnableItineraryAutoRouteMutation = { __typename?: 'Mutation', updateItinerary: { __typename: 'UpdateItineraryPayload', itinerary?: Maybe<{ __typename: 'Itinerary', id: string, autoRoute?: Maybe<{ __typename?: 'ItineraryAutoRoute', defaultMode: RouteMode }> }>, cascaded: { __typename?: 'ItineraryItemCascadedChanges', deletedIds: Array<string>, created: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }>, updated: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }> } } };

export type FindItineraryLocationIdsByPlaceIdQueryVariables = Exact<{
  itineraryId: Scalars['ID'];
  placeId: Scalars['ID'];
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
}>;


export type FindItineraryLocationIdsByPlaceIdQuery = { __typename?: 'Query', itinerary?: Maybe<{ __typename?: 'Itinerary', descendants: { __typename: 'ItineraryItemConnection', totalCount: number, edges: Array<{ __typename?: 'ItineraryItemEdge', node: { __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string, place: { __typename: 'Place', id: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string>, endCursor?: Maybe<string> } } }> };

export type FindItineraryLocationsByPlaceIdQueryVariables = Exact<{
  itineraryId: Scalars['ID'];
  placeId: Scalars['ID'];
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
}>;


export type FindItineraryLocationsByPlaceIdQuery = { __typename?: 'Query', itinerary?: Maybe<{ __typename?: 'Itinerary', descendants: { __typename: 'ItineraryItemConnection', totalCount: number, edges: Array<{ __typename?: 'ItineraryItemEdge', node: { __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string, title?: Maybe<string>, synopsis?: Maybe<string>, tags: Array<string>, optional: boolean, readMoreUrl?: Maybe<string>, place: { __typename: 'Place', id: string, name?: Maybe<string>, synopsis?: Maybe<string>, maki?: Maybe<string>, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: Maybe<string>, addressLineTwo?: Maybe<string>, addressLineThree?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, regionCode?: Maybe<string>, country?: Maybe<string>, countryCode?: Maybe<string> }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: Maybe<string> }> }, position: { __typename?: 'Position', lon: number, lat: number } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string>, endCursor?: Maybe<string> } } }> };

export type ItineraryCascadedChangesFragment = { __typename?: 'ItineraryItemCascadedChanges', deletedIds: Array<string>, created: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }>, updated: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }> };

export type ItineraryContentFragment = { __typename?: 'Itinerary', title?: Maybe<string>, synopsis?: Maybe<string>, description?: Maybe<string>, tags: Array<string>, created?: Maybe<string>, autoRoute?: Maybe<{ __typename?: 'ItineraryAutoRoute', defaultMode: RouteMode }> };

export type ItineraryDirectionsContentFragment = { __typename?: 'ItineraryDirections', durationMin?: Maybe<number> };

export type ItineraryDirectionsPartialContentFragment = { __typename?: 'ItineraryDirections', durationMin?: Maybe<number> };

export type ItineraryLocationContentFragment = { __typename?: 'ItineraryLocation', title?: Maybe<string>, synopsis?: Maybe<string>, description?: Maybe<string>, tags: Array<string>, optional: boolean, readMoreUrl?: Maybe<string>, position: { __typename?: 'Position', lon: number, lat: number } };

export type ItineraryLocationPartialContentFragment = { __typename?: 'ItineraryLocation', title?: Maybe<string>, synopsis?: Maybe<string>, tags: Array<string>, optional: boolean, readMoreUrl?: Maybe<string>, position: { __typename?: 'Position', lon: number, lat: number } };

export type ItineraryLocationsCountFragment = { __typename?: 'Itinerary', locations: { __typename?: 'ItineraryItemConnection', totalCount: number } };

export type ItineraryPartialContentFragment = { __typename?: 'Itinerary', title?: Maybe<string>, synopsis?: Maybe<string>, tags: Array<string>, created?: Maybe<string> };

export type GetItineraryDirectionsQueryVariables = Exact<{
  id: Scalars['ID'];
  includeRoutePolyline: Scalars['Boolean'];
}>;


export type GetItineraryDirectionsQuery = { __typename?: 'Query', node?: Maybe<{ __typename: 'Collection', id: string } | { __typename: 'CollectionLocation', id: string } | { __typename: 'ConnectedApp', id: string } | { __typename: 'Itinerary', id: string } | { __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string, durationMin?: Maybe<number>, route: { __typename?: 'Route', segments: Array<{ __typename: 'RouteSegment', id: string, mode: RouteMode, polyline?: Maybe<string> }> } } | { __typename: 'ItineraryLocation', id: string } | { __typename: 'Place', id: string } | { __typename: 'Profile', id: string }> };

export type GetItineraryLocationQueryVariables = Exact<{
  id: Scalars['ID'];
  mediaImagePreferredBestFit?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type GetItineraryLocationQuery = { __typename?: 'Query', node?: Maybe<{ __typename: 'Collection', id: string } | { __typename: 'CollectionLocation', id: string } | { __typename: 'ConnectedApp', id: string } | { __typename: 'Itinerary', id: string } | { __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string, title?: Maybe<string>, synopsis?: Maybe<string>, description?: Maybe<string>, tags: Array<string>, optional: boolean, readMoreUrl?: Maybe<string>, place: { __typename: 'Place', id: string, name?: Maybe<string>, synopsis?: Maybe<string>, description?: Maybe<string>, maki?: Maybe<string>, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: Maybe<string>, addressLineTwo?: Maybe<string>, addressLineThree?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, regionCode?: Maybe<string>, country?: Maybe<string>, countryCode?: Maybe<string> }, contact: { __typename?: 'PlaceContact', phoneNumber?: Maybe<string>, emailAddress?: Maybe<string>, websiteUrl?: Maybe<string>, bookingsUrl?: Maybe<string>, facebookUrl?: Maybe<string>, instagramUrl?: Maybe<string>, twitterUrl?: Maybe<string> }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: Maybe<string> }>, hours?: Maybe<{ __typename?: 'PlaceHours', osmTag: string }> }, preferredMedia?: Maybe<{ __typename: 'MediaContainer', id: string, resource: { __typename: 'MediaImage', id?: Maybe<string>, provider: string, copyright?: Maybe<string>, altText?: Maybe<string>, attribution?: Maybe<string>, caption?: Maybe<string>, tags: Array<string>, source?: Maybe<{ __typename?: 'MediaImageSource', url: string }> } }>, position: { __typename?: 'Position', lon: number, lat: number } } | { __typename: 'Place', id: string } | { __typename: 'Profile', id: string }> };

export type GetItineraryQueryVariables = Exact<{
  id: Scalars['ID'];
  mediaImagePreferredBestFit?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type GetItineraryQuery = { __typename?: 'Query', itinerary?: Maybe<{ __typename: 'Itinerary', id: string, title?: Maybe<string>, synopsis?: Maybe<string>, description?: Maybe<string>, tags: Array<string>, created?: Maybe<string>, profile?: Maybe<{ __typename: 'Profile', id: string, name: string, handle?: Maybe<string> }>, preferredMedia?: Maybe<{ __typename: 'MediaContainer', id: string, resource: { __typename: 'MediaImage', id?: Maybe<string>, provider: string, copyright?: Maybe<string>, altText?: Maybe<string>, attribution?: Maybe<string>, caption?: Maybe<string>, tags: Array<string>, source?: Maybe<{ __typename?: 'MediaImageSource', url: string }> } }>, autoRoute?: Maybe<{ __typename?: 'ItineraryAutoRoute', defaultMode: RouteMode }>, locations: { __typename?: 'ItineraryItemConnection', totalCount: number } }> };

export type ListItinerariesQueryVariables = Exact<{
  profileId: Scalars['ID'];
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  mediaImagePreferredBestFit?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type ListItinerariesQuery = { __typename?: 'Query', itineraries: { __typename: 'ItineraryConnection', totalCount: number, edges: Array<{ __typename?: 'ItineraryEdge', node: { __typename: 'Itinerary', id: string, title?: Maybe<string>, synopsis?: Maybe<string>, tags: Array<string>, created?: Maybe<string>, preferredMedia?: Maybe<{ __typename: 'MediaContainer', id: string, resource: { __typename: 'MediaImage', id?: Maybe<string>, provider: string, copyright?: Maybe<string>, altText?: Maybe<string>, attribution?: Maybe<string>, caption?: Maybe<string>, tags: Array<string>, source?: Maybe<{ __typename?: 'MediaImageSource', url: string }> } }> } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string>, endCursor?: Maybe<string> } } };

export type ListItineraryLocationsQueryVariables = Exact<{
  id: Scalars['ID'];
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  includeRoutePolyline: Scalars['Boolean'];
  mediaImagePreferredBestFit?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type ListItineraryLocationsQuery = { __typename?: 'Query', itinerary?: Maybe<{ __typename: 'Itinerary', id: string, locations: { __typename?: 'ItineraryItemConnection', totalCount: number, edges: Array<{ __typename?: 'ItineraryItemEdge', location: { __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string, title?: Maybe<string>, synopsis?: Maybe<string>, tags: Array<string>, optional: boolean, readMoreUrl?: Maybe<string>, place: { __typename: 'Place', id: string, name?: Maybe<string>, synopsis?: Maybe<string>, maki?: Maybe<string>, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: Maybe<string>, addressLineTwo?: Maybe<string>, addressLineThree?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, regionCode?: Maybe<string>, country?: Maybe<string>, countryCode?: Maybe<string> }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: Maybe<string> }> }, preferredMedia?: Maybe<{ __typename: 'MediaContainer', id: string, resource: { __typename: 'MediaImage', id?: Maybe<string>, provider: string, copyright?: Maybe<string>, altText?: Maybe<string>, attribution?: Maybe<string>, caption?: Maybe<string>, tags: Array<string>, source?: Maybe<{ __typename?: 'MediaImageSource', url: string }> } }>, position: { __typename?: 'Position', lon: number, lat: number } }, arrival: { __typename?: 'ItineraryDirectionsConnection', totalCount: number, directions: Array<{ __typename: 'ItineraryDirections', id: string, durationMin?: Maybe<number>, route: { __typename?: 'Route', segments: Array<{ __typename: 'RouteSegment', id: string, mode: RouteMode, polyline?: Maybe<string> }> } }> } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string>, endCursor?: Maybe<string> } } }> };

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


export type UpdateItineraryLocationIsOptionalMutation = { __typename?: 'Mutation', updateItineraryLocation: { __typename: 'UpdateItineraryLocationPayload', location?: Maybe<{ __typename: 'ItineraryLocation', id: string, optional: boolean }>, cascaded: { __typename?: 'ItineraryItemCascadedChanges', deletedIds: Array<string>, created: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }>, updated: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }> } } };

export type UpdateItineraryLocationMutationVariables = Exact<{
  id: Scalars['ID'];
  location: UpdateItineraryLocationInput;
}>;


export type UpdateItineraryLocationMutation = { __typename?: 'Mutation', updateItineraryLocation: { __typename: 'UpdateItineraryLocationPayload', location?: Maybe<{ __typename: 'ItineraryLocation', id: string, title?: Maybe<string>, synopsis?: Maybe<string>, description?: Maybe<string>, tags: Array<string>, optional: boolean, readMoreUrl?: Maybe<string>, position: { __typename?: 'Position', lon: number, lat: number } }>, cascaded: { __typename?: 'ItineraryItemCascadedChanges', deletedIds: Array<string>, created: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }>, updated: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }> } } };

export type UpdateItineraryMutationVariables = Exact<{
  id: Scalars['ID'];
  itinerary: UpdateItineraryInput;
}>;


export type UpdateItineraryMutation = { __typename?: 'Mutation', updateItinerary: { __typename: 'UpdateItineraryPayload', itinerary?: Maybe<{ __typename: 'Itinerary', id: string, title?: Maybe<string>, synopsis?: Maybe<string>, description?: Maybe<string>, tags: Array<string>, created?: Maybe<string>, autoRoute?: Maybe<{ __typename?: 'ItineraryAutoRoute', defaultMode: RouteMode }> }>, cascaded: { __typename?: 'ItineraryItemCascadedChanges', deletedIds: Array<string>, created: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }>, updated: Array<{ __typename: 'ItineraryCollection', id: string } | { __typename: 'ItineraryDirections', id: string } | { __typename: 'ItineraryLocation', id: string }> } } };

export type MediaImageContentFragment = { __typename?: 'MediaImage', provider: string, copyright?: Maybe<string>, altText?: Maybe<string>, attribution?: Maybe<string>, caption?: Maybe<string>, tags: Array<string> };

export type MediaImagePartialContentFragment = { __typename?: 'MediaImage', provider: string, copyright?: Maybe<string>, altText?: Maybe<string>, attribution?: Maybe<string>, caption?: Maybe<string>, tags: Array<string> };

export type GetMediaImageQueryVariables = Exact<{
  id: Scalars['ID'];
  smallBestFit?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
  mediumBestFit?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
  largeBestFit?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type GetMediaImageQuery = { __typename?: 'Query', mediaResource?: Maybe<{ __typename: 'MediaImage', id?: Maybe<string>, provider: string, copyright?: Maybe<string>, altText?: Maybe<string>, attribution?: Maybe<string>, caption?: Maybe<string>, tags: Array<string>, small?: Maybe<{ __typename?: 'MediaImageSource', url: string }>, medium?: Maybe<{ __typename?: 'MediaImageSource', url: string }>, large?: Maybe<{ __typename?: 'MediaImageSource', url: string }> }> };

export type AutocompleteSearchPlaceQueryVariables = Exact<{
  text: Scalars['String'];
  source: PlaceSearchSource;
}>;


export type AutocompleteSearchPlaceQuery = { __typename?: 'Query', placeAutocompleteSearch: { __typename: 'PlaceSearchConnection', edges: Array<{ __typename?: 'PlaceSearchEdge', node: { __typename: 'PlaceSearchNode', id: string, name?: Maybe<string>, maki?: Maybe<string>, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: Maybe<string>, addressLineTwo?: Maybe<string>, addressLineThree?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, regionCode?: Maybe<string>, country?: Maybe<string>, countryCode?: Maybe<string> }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: Maybe<string> }> }, main: { __typename?: 'TextSearchResult', label: string, matches: Array<{ __typename?: 'TextSearchResultMatch', offset: number, length: number }> }, secondary: { __typename?: 'TextSearchResult', label: string, matches: Array<{ __typename?: 'TextSearchResultMatch', offset: number, length: number }> } }> } };

export type PlaceContentFragment = { __typename?: 'Place', name?: Maybe<string>, synopsis?: Maybe<string>, description?: Maybe<string>, maki?: Maybe<string>, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: Maybe<string>, addressLineTwo?: Maybe<string>, addressLineThree?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, regionCode?: Maybe<string>, country?: Maybe<string>, countryCode?: Maybe<string> }, contact: { __typename?: 'PlaceContact', phoneNumber?: Maybe<string>, emailAddress?: Maybe<string>, websiteUrl?: Maybe<string>, bookingsUrl?: Maybe<string>, facebookUrl?: Maybe<string>, instagramUrl?: Maybe<string>, twitterUrl?: Maybe<string> }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: Maybe<string> }>, hours?: Maybe<{ __typename?: 'PlaceHours', osmTag: string }> };

export type PlacePartialContentFragment = { __typename?: 'Place', name?: Maybe<string>, synopsis?: Maybe<string>, maki?: Maybe<string>, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: Maybe<string>, addressLineTwo?: Maybe<string>, addressLineThree?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, regionCode?: Maybe<string>, country?: Maybe<string>, countryCode?: Maybe<string> }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: Maybe<string> }> };

export type PlaceSearchContentFragment = { __typename?: 'PlaceSearchNode', name?: Maybe<string>, maki?: Maybe<string>, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: Maybe<string>, addressLineTwo?: Maybe<string>, addressLineThree?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, regionCode?: Maybe<string>, country?: Maybe<string>, countryCode?: Maybe<string> }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: Maybe<string> }> };

export type GetPlaceQueryVariables = Exact<{
  id: Scalars['ID'];
  mediaImagePreferredBestFit?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type GetPlaceQuery = { __typename?: 'Query', place?: Maybe<{ __typename: 'Place', id: string, name?: Maybe<string>, synopsis?: Maybe<string>, description?: Maybe<string>, maki?: Maybe<string>, preferredMedia?: Maybe<{ __typename: 'MediaContainer', id: string, resource: { __typename: 'MediaImage', id?: Maybe<string>, provider: string, copyright?: Maybe<string>, altText?: Maybe<string>, attribution?: Maybe<string>, caption?: Maybe<string>, tags: Array<string>, source?: Maybe<{ __typename?: 'MediaImageSource', url: string }> } }>, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: Maybe<string>, addressLineTwo?: Maybe<string>, addressLineThree?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, regionCode?: Maybe<string>, country?: Maybe<string>, countryCode?: Maybe<string> }, contact: { __typename?: 'PlaceContact', phoneNumber?: Maybe<string>, emailAddress?: Maybe<string>, websiteUrl?: Maybe<string>, bookingsUrl?: Maybe<string>, facebookUrl?: Maybe<string>, instagramUrl?: Maybe<string>, twitterUrl?: Maybe<string> }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: Maybe<string> }>, hours?: Maybe<{ __typename?: 'PlaceHours', osmTag: string }> }> };

export type ReverseSearchPlaceByPositionQueryVariables = Exact<{
  focus: PositionInput;
  sources: Array<PlaceSearchSource> | PlaceSearchSource;
  first: Scalars['Int'];
}>;


export type ReverseSearchPlaceByPositionQuery = { __typename?: 'Query', placeReverseSearch: { __typename: 'PlaceSearchConnection', places: Array<{ __typename: 'PlaceSearchNode', id: string, name?: Maybe<string>, maki?: Maybe<string>, position: { __typename?: 'Position', lon: number, lat: number }, address: { __typename?: 'PlaceAddress', addressLineOne?: Maybe<string>, addressLineTwo?: Maybe<string>, addressLineThree?: Maybe<string>, locality?: Maybe<string>, region?: Maybe<string>, regionCode?: Maybe<string>, country?: Maybe<string>, countryCode?: Maybe<string> }, layers: Array<{ __typename: 'PlaceLayer', id: string, name?: Maybe<string> }> }> } };

export type ProfileContentFragment = { __typename?: 'Profile', name: string, handle?: Maybe<string>, type: ProfileType, bio?: Maybe<string>, websiteUrl?: Maybe<string> };

export type ProfilePartialContentFragment = { __typename?: 'Profile', name: string, handle?: Maybe<string> };

export type GetProfileQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProfileQuery = { __typename?: 'Query', profile?: Maybe<{ __typename: 'Profile', id: string, name: string, handle?: Maybe<string>, type: ProfileType, bio?: Maybe<string>, websiteUrl?: Maybe<string> }> };

export type ListAuthorizedProfilesQueryVariables = Exact<{
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
}>;


export type ListAuthorizedProfilesQuery = { __typename?: 'Query', authorizedProfiles: { __typename: 'ProfileConnection', totalCount: number, profiles: Array<{ __typename: 'Profile', id: string, name: string, handle?: Maybe<string> }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string>, endCursor?: Maybe<string> } } };

export type SearchRoutesBetweenPositionsQueryVariables = Exact<{
  mode: RouteSearchableMode;
  positions: Array<PositionInput> | PositionInput;
  first: Scalars['Int'];
  includeRoutePolyline: Scalars['Boolean'];
}>;


export type SearchRoutesBetweenPositionsQuery = { __typename?: 'Query', routes: { __typename: 'RouteConnection', routes: Array<{ __typename?: 'Route', segments: Array<{ __typename?: 'RouteSegment', distance?: Maybe<number>, duration?: Maybe<number>, polyline?: Maybe<string> }> }> } };


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
    "ItineraryItem": [
      "ItineraryCollection",
      "ItineraryDirections",
      "ItineraryLocation"
    ],
    "MediaResource": [
      "MediaImage"
    ],
    "Node": [
      "Collection",
      "CollectionLocation",
      "ConnectedApp",
      "Itinerary",
      "ItineraryCollection",
      "ItineraryDirections",
      "ItineraryLocation",
      "Place",
      "Profile"
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
  items(first: 0) {
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
  externalId: attr(id: "custom://external-ref") {
    value
  }
  externalSource: attr(id: "custom://external-source") {
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
  autoRoute {
    defaultMode
  }
}
    `;
export const ItineraryDirectionsContentFragmentDoc = gql`
    fragment ItineraryDirectionsContent on ItineraryDirections {
  durationMin
}
    `;
export const ItineraryDirectionsPartialContentFragmentDoc = gql`
    fragment ItineraryDirectionsPartialContent on ItineraryDirections {
  durationMin
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
  locations: descendants(first: 0, type: ItineraryLocation) {
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
}
    `;
export const MediaImageContentFragmentDoc = gql`
    fragment MediaImageContent on MediaImage {
  provider
  copyright
  altText
  attribution
  caption
  tags
}
    `;
export const MediaImagePartialContentFragmentDoc = gql`
    fragment MediaImagePartialContent on MediaImage {
  provider
  copyright
  altText
  attribution
  caption
  tags
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
    bookingsUrl
    facebookUrl
    instagramUrl
    twitterUrl
  }
  layers {
    id
    __typename
    name
  }
  hours {
    osmTag
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
  type
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

export type CreateCollectionLocationProps = {
    variables ?: CreateCollectionLocationMutationVariables;
    inlist ?: StencilApollo.MutationRenderer<CreateCollectionLocationMutation, CreateCollectionLocationMutationVariables>;
};
      

export const CreateCollectionLocationComponent = (props: CreateCollectionLocationProps, children: [StencilApollo.MutationRenderer<CreateCollectionLocationMutation, CreateCollectionLocationMutationVariables>]) => (
  <apollo-mutation mutation={ CreateCollectionLocationDocument } { ...props } renderer={ children[0] } />
);
      
export const DeleteCollectionLocationDocument = gql`
    mutation deleteCollectionLocation($id: ID!) {
  deleteCollectionItem(id: $id) {
    __typename
  }
}
    `;

export type DeleteCollectionLocationProps = {
    variables ?: DeleteCollectionLocationMutationVariables;
    inlist ?: StencilApollo.MutationRenderer<DeleteCollectionLocationMutation, DeleteCollectionLocationMutationVariables>;
};
      

export const DeleteCollectionLocationComponent = (props: DeleteCollectionLocationProps, children: [StencilApollo.MutationRenderer<DeleteCollectionLocationMutation, DeleteCollectionLocationMutationVariables>]) => (
  <apollo-mutation mutation={ DeleteCollectionLocationDocument } { ...props } renderer={ children[0] } />
);
      
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

export type FindCollectionLocationIdsByExternalProps = {
    variables ?: FindCollectionLocationIdsByExternalQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<FindCollectionLocationIdsByExternalQuery, FindCollectionLocationIdsByExternalQueryVariables>;
};
      

export const FindCollectionLocationIdsByExternalComponent = (props: FindCollectionLocationIdsByExternalProps, children: [StencilApollo.QueryRenderer<FindCollectionLocationIdsByExternalQuery, FindCollectionLocationIdsByExternalQueryVariables>]) => (
  <apollo-query query={ FindCollectionLocationIdsByExternalDocument } { ...props } renderer={ children[0] } />
);
      
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

export type FindCollectionLocationIdsByTagProps = {
    variables ?: FindCollectionLocationIdsByTagQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<FindCollectionLocationIdsByTagQuery, FindCollectionLocationIdsByTagQueryVariables>;
};
      

export const FindCollectionLocationIdsByTagComponent = (props: FindCollectionLocationIdsByTagProps, children: [StencilApollo.QueryRenderer<FindCollectionLocationIdsByTagQuery, FindCollectionLocationIdsByTagQueryVariables>]) => (
  <apollo-query query={ FindCollectionLocationIdsByTagDocument } { ...props } renderer={ children[0] } />
);
      
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

export type FindCollectionLocationsByExternalProps = {
    variables ?: FindCollectionLocationsByExternalQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<FindCollectionLocationsByExternalQuery, FindCollectionLocationsByExternalQueryVariables>;
};
      

export const FindCollectionLocationsByExternalComponent = (props: FindCollectionLocationsByExternalProps, children: [StencilApollo.QueryRenderer<FindCollectionLocationsByExternalQuery, FindCollectionLocationsByExternalQueryVariables>]) => (
  <apollo-query query={ FindCollectionLocationsByExternalDocument } { ...props } renderer={ children[0] } />
);
      
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

export type FindCollectionLocationsByTagProps = {
    variables ?: FindCollectionLocationsByTagQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<FindCollectionLocationsByTagQuery, FindCollectionLocationsByTagQueryVariables>;
};
      

export const FindCollectionLocationsByTagComponent = (props: FindCollectionLocationsByTagProps, children: [StencilApollo.QueryRenderer<FindCollectionLocationsByTagQuery, FindCollectionLocationsByTagQueryVariables>]) => (
  <apollo-query query={ FindCollectionLocationsByTagDocument } { ...props } renderer={ children[0] } />
);
      
export const GetCollectionLocationDocument = gql`
    query getCollectionLocation($id: ID!, $mediaImagePreferredBestFit: [Int!]) {
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
      preferredMedia {
        id
        __typename
        resource {
          id
          __typename
          altText
          ... on MediaImage {
            source(bestFit: $mediaImagePreferredBestFit) {
              url
            }
            caption
            copyright
            attribution
          }
        }
      }
    }
  }
}
    ${CollectionLocationContentFragmentDoc}
${PlacePartialContentFragmentDoc}`;

export type GetCollectionLocationProps = {
    variables ?: GetCollectionLocationQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<GetCollectionLocationQuery, GetCollectionLocationQueryVariables>;
};
      

export const GetCollectionLocationComponent = (props: GetCollectionLocationProps, children: [StencilApollo.QueryRenderer<GetCollectionLocationQuery, GetCollectionLocationQueryVariables>]) => (
  <apollo-query query={ GetCollectionLocationDocument } { ...props } renderer={ children[0] } />
);
      
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

export type GetCollectionProps = {
    variables ?: GetCollectionQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<GetCollectionQuery, GetCollectionQueryVariables>;
};
      

export const GetCollectionComponent = (props: GetCollectionProps, children: [StencilApollo.QueryRenderer<GetCollectionQuery, GetCollectionQueryVariables>]) => (
  <apollo-query query={ GetCollectionDocument } { ...props } renderer={ children[0] } />
);
      
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

export type ListCollectionsProps = {
    variables ?: ListCollectionsQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<ListCollectionsQuery, ListCollectionsQueryVariables>;
};
      

export const ListCollectionsComponent = (props: ListCollectionsProps, children: [StencilApollo.QueryRenderer<ListCollectionsQuery, ListCollectionsQueryVariables>]) => (
  <apollo-query query={ ListCollectionsDocument } { ...props } renderer={ children[0] } />
);
      
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

export type UpdateCollectionLocationProps = {
    variables ?: UpdateCollectionLocationMutationVariables;
    inlist ?: StencilApollo.MutationRenderer<UpdateCollectionLocationMutation, UpdateCollectionLocationMutationVariables>;
};
      

export const UpdateCollectionLocationComponent = (props: UpdateCollectionLocationProps, children: [StencilApollo.MutationRenderer<UpdateCollectionLocationMutation, UpdateCollectionLocationMutationVariables>]) => (
  <apollo-mutation mutation={ UpdateCollectionLocationDocument } { ...props } renderer={ children[0] } />
);
      
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

export type CreateItineraryDirectionsProps = {
    variables ?: CreateItineraryDirectionsMutationVariables;
    inlist ?: StencilApollo.MutationRenderer<CreateItineraryDirectionsMutation, CreateItineraryDirectionsMutationVariables>;
};
      

export const CreateItineraryDirectionsComponent = (props: CreateItineraryDirectionsProps, children: [StencilApollo.MutationRenderer<CreateItineraryDirectionsMutation, CreateItineraryDirectionsMutationVariables>]) => (
  <apollo-mutation mutation={ CreateItineraryDirectionsDocument } { ...props } renderer={ children[0] } />
);
      
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

export type CreateItineraryLocationProps = {
    variables ?: CreateItineraryLocationMutationVariables;
    inlist ?: StencilApollo.MutationRenderer<CreateItineraryLocationMutation, CreateItineraryLocationMutationVariables>;
};
      

export const CreateItineraryLocationComponent = (props: CreateItineraryLocationProps, children: [StencilApollo.MutationRenderer<CreateItineraryLocationMutation, CreateItineraryLocationMutationVariables>]) => (
  <apollo-mutation mutation={ CreateItineraryLocationDocument } { ...props } renderer={ children[0] } />
);
      
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

export type CreateItineraryProps = {
    variables ?: CreateItineraryMutationVariables;
    inlist ?: StencilApollo.MutationRenderer<CreateItineraryMutation, CreateItineraryMutationVariables>;
};
      

export const CreateItineraryComponent = (props: CreateItineraryProps, children: [StencilApollo.MutationRenderer<CreateItineraryMutation, CreateItineraryMutationVariables>]) => (
  <apollo-mutation mutation={ CreateItineraryDocument } { ...props } renderer={ children[0] } />
);
      
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

export type DeleteItineraryLocationProps = {
    variables ?: DeleteItineraryLocationMutationVariables;
    inlist ?: StencilApollo.MutationRenderer<DeleteItineraryLocationMutation, DeleteItineraryLocationMutationVariables>;
};
      

export const DeleteItineraryLocationComponent = (props: DeleteItineraryLocationProps, children: [StencilApollo.MutationRenderer<DeleteItineraryLocationMutation, DeleteItineraryLocationMutationVariables>]) => (
  <apollo-mutation mutation={ DeleteItineraryLocationDocument } { ...props } renderer={ children[0] } />
);
      
export const DeleteItineraryDocument = gql`
    mutation deleteItinerary($id: ID!) {
  deleteItinerary(id: $id) {
    __typename
  }
}
    `;

export type DeleteItineraryProps = {
    variables ?: DeleteItineraryMutationVariables;
    inlist ?: StencilApollo.MutationRenderer<DeleteItineraryMutation, DeleteItineraryMutationVariables>;
};
      

export const DeleteItineraryComponent = (props: DeleteItineraryProps, children: [StencilApollo.MutationRenderer<DeleteItineraryMutation, DeleteItineraryMutationVariables>]) => (
  <apollo-mutation mutation={ DeleteItineraryDocument } { ...props } renderer={ children[0] } />
);
      
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

export type DisableItineraryAutoRouteProps = {
    variables ?: DisableItineraryAutoRouteMutationVariables;
    inlist ?: StencilApollo.MutationRenderer<DisableItineraryAutoRouteMutation, DisableItineraryAutoRouteMutationVariables>;
};
      

export const DisableItineraryAutoRouteComponent = (props: DisableItineraryAutoRouteProps, children: [StencilApollo.MutationRenderer<DisableItineraryAutoRouteMutation, DisableItineraryAutoRouteMutationVariables>]) => (
  <apollo-mutation mutation={ DisableItineraryAutoRouteDocument } { ...props } renderer={ children[0] } />
);
      
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

export type EnableItineraryAutoRouteProps = {
    variables ?: EnableItineraryAutoRouteMutationVariables;
    inlist ?: StencilApollo.MutationRenderer<EnableItineraryAutoRouteMutation, EnableItineraryAutoRouteMutationVariables>;
};
      

export const EnableItineraryAutoRouteComponent = (props: EnableItineraryAutoRouteProps, children: [StencilApollo.MutationRenderer<EnableItineraryAutoRouteMutation, EnableItineraryAutoRouteMutationVariables>]) => (
  <apollo-mutation mutation={ EnableItineraryAutoRouteDocument } { ...props } renderer={ children[0] } />
);
      
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

export type FindItineraryLocationIdsByPlaceIdProps = {
    variables ?: FindItineraryLocationIdsByPlaceIdQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<FindItineraryLocationIdsByPlaceIdQuery, FindItineraryLocationIdsByPlaceIdQueryVariables>;
};
      

export const FindItineraryLocationIdsByPlaceIdComponent = (props: FindItineraryLocationIdsByPlaceIdProps, children: [StencilApollo.QueryRenderer<FindItineraryLocationIdsByPlaceIdQuery, FindItineraryLocationIdsByPlaceIdQueryVariables>]) => (
  <apollo-query query={ FindItineraryLocationIdsByPlaceIdDocument } { ...props } renderer={ children[0] } />
);
      
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

export type FindItineraryLocationsByPlaceIdProps = {
    variables ?: FindItineraryLocationsByPlaceIdQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<FindItineraryLocationsByPlaceIdQuery, FindItineraryLocationsByPlaceIdQueryVariables>;
};
      

export const FindItineraryLocationsByPlaceIdComponent = (props: FindItineraryLocationsByPlaceIdProps, children: [StencilApollo.QueryRenderer<FindItineraryLocationsByPlaceIdQuery, FindItineraryLocationsByPlaceIdQueryVariables>]) => (
  <apollo-query query={ FindItineraryLocationsByPlaceIdDocument } { ...props } renderer={ children[0] } />
);
      
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

export type GetItineraryDirectionsProps = {
    variables ?: GetItineraryDirectionsQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<GetItineraryDirectionsQuery, GetItineraryDirectionsQueryVariables>;
};
      

export const GetItineraryDirectionsComponent = (props: GetItineraryDirectionsProps, children: [StencilApollo.QueryRenderer<GetItineraryDirectionsQuery, GetItineraryDirectionsQueryVariables>]) => (
  <apollo-query query={ GetItineraryDirectionsDocument } { ...props } renderer={ children[0] } />
);
      
export const GetItineraryLocationDocument = gql`
    query getItineraryLocation($id: ID!, $mediaImagePreferredBestFit: [Int!]) {
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
      preferredMedia {
        id
        __typename
        resource {
          id
          __typename
          ... on MediaImage {
            source(bestFit: $mediaImagePreferredBestFit) {
              url
            }
            ...MediaImagePartialContent
          }
        }
      }
    }
  }
}
    ${ItineraryLocationContentFragmentDoc}
${PlaceContentFragmentDoc}
${MediaImagePartialContentFragmentDoc}`;

export type GetItineraryLocationProps = {
    variables ?: GetItineraryLocationQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<GetItineraryLocationQuery, GetItineraryLocationQueryVariables>;
};
      

export const GetItineraryLocationComponent = (props: GetItineraryLocationProps, children: [StencilApollo.QueryRenderer<GetItineraryLocationQuery, GetItineraryLocationQueryVariables>]) => (
  <apollo-query query={ GetItineraryLocationDocument } { ...props } renderer={ children[0] } />
);
      
export const GetItineraryDocument = gql`
    query getItinerary($id: ID!, $mediaImagePreferredBestFit: [Int!]) {
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
    preferredMedia {
      id
      __typename
      resource {
        id
        __typename
        ... on MediaImage {
          source(bestFit: $mediaImagePreferredBestFit) {
            url
          }
          ...MediaImagePartialContent
        }
      }
    }
  }
}
    ${ItineraryContentFragmentDoc}
${ItineraryLocationsCountFragmentDoc}
${ProfilePartialContentFragmentDoc}
${MediaImagePartialContentFragmentDoc}`;

export type GetItineraryProps = {
    variables ?: GetItineraryQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<GetItineraryQuery, GetItineraryQueryVariables>;
};
      

export const GetItineraryComponent = (props: GetItineraryProps, children: [StencilApollo.QueryRenderer<GetItineraryQuery, GetItineraryQueryVariables>]) => (
  <apollo-query query={ GetItineraryDocument } { ...props } renderer={ children[0] } />
);
      
export const ListItinerariesDocument = gql`
    query listItineraries($profileId: ID!, $first: Int!, $after: String, $mediaImagePreferredBestFit: [Int!]) {
  itineraries(profileId: $profileId, first: $first, after: $after) {
    __typename
    edges {
      node {
        id
        __typename
        ...ItineraryPartialContent
        preferredMedia {
          id
          __typename
          resource {
            id
            __typename
            ... on MediaImage {
              source(bestFit: $mediaImagePreferredBestFit) {
                url
              }
              ...MediaImagePartialContent
            }
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
    ${ItineraryPartialContentFragmentDoc}
${MediaImagePartialContentFragmentDoc}`;

export type ListItinerariesProps = {
    variables ?: ListItinerariesQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<ListItinerariesQuery, ListItinerariesQueryVariables>;
};
      

export const ListItinerariesComponent = (props: ListItinerariesProps, children: [StencilApollo.QueryRenderer<ListItinerariesQuery, ListItinerariesQueryVariables>]) => (
  <apollo-query query={ ListItinerariesDocument } { ...props } renderer={ children[0] } />
);
      
export const ListItineraryLocationsDocument = gql`
    query listItineraryLocations($id: ID!, $first: Int!, $after: String, $includeRoutePolyline: Boolean!, $mediaImagePreferredBestFit: [Int!]) {
  itinerary(id: $id) {
    id
    __typename
    locations: children(first: $first, type: ItineraryLocation, after: $after) {
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
            preferredMedia {
              id
              __typename
              resource {
                id
                __typename
                ... on MediaImage {
                  source(bestFit: $mediaImagePreferredBestFit) {
                    url
                  }
                  ...MediaImagePartialContent
                }
              }
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
${MediaImagePartialContentFragmentDoc}
${ItineraryDirectionsPartialContentFragmentDoc}`;

export type ListItineraryLocationsProps = {
    variables ?: ListItineraryLocationsQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<ListItineraryLocationsQuery, ListItineraryLocationsQueryVariables>;
};
      

export const ListItineraryLocationsComponent = (props: ListItineraryLocationsProps, children: [StencilApollo.QueryRenderer<ListItineraryLocationsQuery, ListItineraryLocationsQueryVariables>]) => (
  <apollo-query query={ ListItineraryLocationsDocument } { ...props } renderer={ children[0] } />
);
      
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

export type MoveItineraryLocationAfterProps = {
    variables ?: MoveItineraryLocationAfterMutationVariables;
    inlist ?: StencilApollo.MutationRenderer<MoveItineraryLocationAfterMutation, MoveItineraryLocationAfterMutationVariables>;
};
      

export const MoveItineraryLocationAfterComponent = (props: MoveItineraryLocationAfterProps, children: [StencilApollo.MutationRenderer<MoveItineraryLocationAfterMutation, MoveItineraryLocationAfterMutationVariables>]) => (
  <apollo-mutation mutation={ MoveItineraryLocationAfterDocument } { ...props } renderer={ children[0] } />
);
      
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

export type MoveItineraryLocationToStartProps = {
    variables ?: MoveItineraryLocationToStartMutationVariables;
    inlist ?: StencilApollo.MutationRenderer<MoveItineraryLocationToStartMutation, MoveItineraryLocationToStartMutationVariables>;
};
      

export const MoveItineraryLocationToStartComponent = (props: MoveItineraryLocationToStartProps, children: [StencilApollo.MutationRenderer<MoveItineraryLocationToStartMutation, MoveItineraryLocationToStartMutationVariables>]) => (
  <apollo-mutation mutation={ MoveItineraryLocationToStartDocument } { ...props } renderer={ children[0] } />
);
      
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

export type UpdateItineraryLocationIsOptionalProps = {
    variables ?: UpdateItineraryLocationIsOptionalMutationVariables;
    inlist ?: StencilApollo.MutationRenderer<UpdateItineraryLocationIsOptionalMutation, UpdateItineraryLocationIsOptionalMutationVariables>;
};
      

export const UpdateItineraryLocationIsOptionalComponent = (props: UpdateItineraryLocationIsOptionalProps, children: [StencilApollo.MutationRenderer<UpdateItineraryLocationIsOptionalMutation, UpdateItineraryLocationIsOptionalMutationVariables>]) => (
  <apollo-mutation mutation={ UpdateItineraryLocationIsOptionalDocument } { ...props } renderer={ children[0] } />
);
      
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

export type UpdateItineraryLocationProps = {
    variables ?: UpdateItineraryLocationMutationVariables;
    inlist ?: StencilApollo.MutationRenderer<UpdateItineraryLocationMutation, UpdateItineraryLocationMutationVariables>;
};
      

export const UpdateItineraryLocationComponent = (props: UpdateItineraryLocationProps, children: [StencilApollo.MutationRenderer<UpdateItineraryLocationMutation, UpdateItineraryLocationMutationVariables>]) => (
  <apollo-mutation mutation={ UpdateItineraryLocationDocument } { ...props } renderer={ children[0] } />
);
      
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

export type UpdateItineraryProps = {
    variables ?: UpdateItineraryMutationVariables;
    inlist ?: StencilApollo.MutationRenderer<UpdateItineraryMutation, UpdateItineraryMutationVariables>;
};
      

export const UpdateItineraryComponent = (props: UpdateItineraryProps, children: [StencilApollo.MutationRenderer<UpdateItineraryMutation, UpdateItineraryMutationVariables>]) => (
  <apollo-mutation mutation={ UpdateItineraryDocument } { ...props } renderer={ children[0] } />
);
      
export const GetMediaImageDocument = gql`
    query getMediaImage($id: ID!, $smallBestFit: [Int!], $mediumBestFit: [Int!], $largeBestFit: [Int!]) {
  mediaResource(id: $id) {
    id
    __typename
    ... on MediaImage {
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

export type GetMediaImageProps = {
    variables ?: GetMediaImageQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<GetMediaImageQuery, GetMediaImageQueryVariables>;
};
      

export const GetMediaImageComponent = (props: GetMediaImageProps, children: [StencilApollo.QueryRenderer<GetMediaImageQuery, GetMediaImageQueryVariables>]) => (
  <apollo-query query={ GetMediaImageDocument } { ...props } renderer={ children[0] } />
);
      
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

export type AutocompleteSearchPlaceProps = {
    variables ?: AutocompleteSearchPlaceQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<AutocompleteSearchPlaceQuery, AutocompleteSearchPlaceQueryVariables>;
};
      

export const AutocompleteSearchPlaceComponent = (props: AutocompleteSearchPlaceProps, children: [StencilApollo.QueryRenderer<AutocompleteSearchPlaceQuery, AutocompleteSearchPlaceQueryVariables>]) => (
  <apollo-query query={ AutocompleteSearchPlaceDocument } { ...props } renderer={ children[0] } />
);
      
export const GetPlaceDocument = gql`
    query getPlace($id: ID!, $mediaImagePreferredBestFit: [Int!]) {
  place(id: $id) {
    id
    __typename
    ...PlaceContent
    preferredMedia {
      id
      __typename
      resource {
        id
        __typename
        ... on MediaImage {
          source(bestFit: $mediaImagePreferredBestFit) {
            url
          }
          ...MediaImagePartialContent
        }
      }
    }
  }
}
    ${PlaceContentFragmentDoc}
${MediaImagePartialContentFragmentDoc}`;

export type GetPlaceProps = {
    variables ?: GetPlaceQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<GetPlaceQuery, GetPlaceQueryVariables>;
};
      

export const GetPlaceComponent = (props: GetPlaceProps, children: [StencilApollo.QueryRenderer<GetPlaceQuery, GetPlaceQueryVariables>]) => (
  <apollo-query query={ GetPlaceDocument } { ...props } renderer={ children[0] } />
);
      
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

export type ReverseSearchPlaceByPositionProps = {
    variables ?: ReverseSearchPlaceByPositionQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<ReverseSearchPlaceByPositionQuery, ReverseSearchPlaceByPositionQueryVariables>;
};
      

export const ReverseSearchPlaceByPositionComponent = (props: ReverseSearchPlaceByPositionProps, children: [StencilApollo.QueryRenderer<ReverseSearchPlaceByPositionQuery, ReverseSearchPlaceByPositionQueryVariables>]) => (
  <apollo-query query={ ReverseSearchPlaceByPositionDocument } { ...props } renderer={ children[0] } />
);
      
export const GetProfileDocument = gql`
    query getProfile($id: ID!) {
  profile(id: $id) {
    id
    __typename
    ...ProfileContent
  }
}
    ${ProfileContentFragmentDoc}`;

export type GetProfileProps = {
    variables ?: GetProfileQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<GetProfileQuery, GetProfileQueryVariables>;
};
      

export const GetProfileComponent = (props: GetProfileProps, children: [StencilApollo.QueryRenderer<GetProfileQuery, GetProfileQueryVariables>]) => (
  <apollo-query query={ GetProfileDocument } { ...props } renderer={ children[0] } />
);
      
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

export type ListAuthorizedProfilesProps = {
    variables ?: ListAuthorizedProfilesQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<ListAuthorizedProfilesQuery, ListAuthorizedProfilesQueryVariables>;
};
      

export const ListAuthorizedProfilesComponent = (props: ListAuthorizedProfilesProps, children: [StencilApollo.QueryRenderer<ListAuthorizedProfilesQuery, ListAuthorizedProfilesQueryVariables>]) => (
  <apollo-query query={ ListAuthorizedProfilesDocument } { ...props } renderer={ children[0] } />
);
      
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

export type SearchRoutesBetweenPositionsProps = {
    variables ?: SearchRoutesBetweenPositionsQueryVariables;
    inlist ?: StencilApollo.QueryRenderer<SearchRoutesBetweenPositionsQuery, SearchRoutesBetweenPositionsQueryVariables>;
};
      

export const SearchRoutesBetweenPositionsComponent = (props: SearchRoutesBetweenPositionsProps, children: [StencilApollo.QueryRenderer<SearchRoutesBetweenPositionsQuery, SearchRoutesBetweenPositionsQueryVariables>]) => (
  <apollo-query query={ SearchRoutesBetweenPositionsDocument } { ...props } renderer={ children[0] } />
);
      