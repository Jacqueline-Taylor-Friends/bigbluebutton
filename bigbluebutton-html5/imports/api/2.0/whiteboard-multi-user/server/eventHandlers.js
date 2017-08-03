import RedisPubSub from '/imports/startup/server/redis2x';
import handleGetWhiteboardAccess from './handlers/getWhiteboardAccess';
import handleModifyWhiteboardAccess from './handlers/modifyWhiteboardAccess';

RedisPubSub.on('GetWhiteboardAccessRespMsg', handleGetWhiteboardAccess);
RedisPubSub.on('SyncGetWhiteboardAccessRespMsg', handleGetWhiteboardAccess);
RedisPubSub.on('ModifyWhiteboardAccessEvtMsg', handleModifyWhiteboardAccess);
