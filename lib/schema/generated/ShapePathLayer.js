// ⚠️ DO NOT MODIFY THIS FILE DIRECTLY, IT WAS AUTO-GENERATED. See lib/generate-types.js
exports.name = 'ShapePathLayer'

exports.schema = `
  
  type ShapePathLayer implements LayerInterface {
    id: ID!
    _class: String!
    """
    When a shape is acting as a mask, this flag explicitly opts the receiver (and any folllowing layers) out of that masking, thereby breaking the chain.
    """
    shouldBreakMaskChain: Boolean!
    influenceRectForBounds: NSRect
    """
    The layer's rotation, specified in degrees. Rotation is applied about the center of \c frame
    """
    rotation: Float
    resizingConstraint: Constraint!
    isFlippedVertical: Boolean
    originalObjectID: String
    isVisible: Boolean!
    pathInBounds: JSON
    resizingType: LayerResizingType!
    isFlippedHorizontal: Boolean
    isLocked: Boolean!
    layerListExpandedType: LayerListStatus
    nameIsFixed: Boolean
    name: String!
    userInfo: JSON
    exportOptions: ExportOptions!
    """
    The underlying storage for a layer's origin and size, and whether its proportions should be constrained
    """
    frame: Rect!
    flow: FlowConnection
    booleanOperation: BooleanOperation!
    pointRadiusBehaviour: PointRadiusBehaviour!
    """
    For shapes created using a preset (e.g. a rectangle or star), records whether the path is still in its original form, or has been edited by the user
    """
    edited: Boolean
    isClosed: Boolean
    points: [CurvePoint!]!
  }
`

exports.resolver = {
  id: l => l.do_objectID,
}
